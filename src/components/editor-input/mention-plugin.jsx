import { useCallback, useState, useEffect, useMemo } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
	LexicalTypeaheadMenuPlugin,
	useBasicTypeaheadTriggerMatch,
} from '@lexical/react/LexicalTypeaheadMenuPlugin';
import { mergeRegister } from '@lexical/utils';
import { $createMentionNode } from './mention-node';
import { cn } from '@/utilities/functions';
import {
	COMMAND_PRIORITY_LOW,
	KEY_ARROW_DOWN_COMMAND,
	KEY_ARROW_UP_COMMAND,
} from 'lexical';

const dummyMentionsData = [
	'Aayla Secura',
	'Admiral Dodd Rancit',
	'Aurra Sing',
	'BB-8',
	'Bo-Katan Kryze',
	'Breha Antilles-Organa',
	'C-3PO',
	'Captain Quarsh Panaka',
	'Chewbacca',
	'Darth Tyranus',
	'Daultay Dofine',
	'Dexter Jettster',
	'Ebe E. Endocott',
	'Eli Vanto',
	'Ezra Bridger',
	'Faro Argyus',
	'Finis Valorum',
	'FN-2003',
	'Garazeb "Zeb" Orrelios',
	'Grand Inquisitor',
	'Greeata Jendowanian',
	'Hammerhead',
	'Han Solo',
	'Hevy',
	'Hondo Ohnaka',
	'Ima-Gun Di',
	'Inquisitors',
	'Inspector Thanoth',
	'Jabba',
	'Janus Greejatus',
	'Jaxxon',
	'K-2SO',
	'Kanan Jarrus',
	'Kylo Ren',
	'L3-37',
	'Lieutenant Kaydel Ko Connix',
	'Luke Skywalker',
	'Mace Windu',
	'Maximilian Veers',
	'Mother Talzin',
	'Nahdar Vebb',
	'Nahdonnis Praji',
	'Nien Nunb',
	'Obi-Wan Kenobi',
	'Odd Ball',
	'Orrimarko',
	'Petty Officer Thanisson',
	'Pooja Naberrie',
	'PZ-4CO',
	'Quarrie',
	'Quiggold',
	'Quinlan Vos',
	'R2-D2',
	'Raymus Antilles',
	'Ree-Yees',
	'Sana Starros',
	'Shmi Skywalker',
	'Shu Mai',
	'Tallissan Lintra',
	'Tarfful',
	'Thane Kyrell',
	'U9-C4',
	'Unkar Plutt',
	'Val Beckett',
	'Vice Admiral Amilyn Holdo',
	'Vober Dand',
	'WAC-47',
	'Wedge Antilles',
	'Wicket W. Warrick',
	'Xamuel Lennox',
	'Yaddle',
	'Yarael Poof',
	'Yoda',
	'Zam Wesell',
	'Ziro the Hutt',
	'Zuckuss',
];

const PUNCTUATION =
	'\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%\'"~=<>_:;';
const NAME = '\\b[A-Z][^\\s' + PUNCTUATION + ']';

const TRIGGERS = ['@'].join('');

const VALID_CHARS = '[^' + TRIGGERS + PUNCTUATION + '\\s]';

const VALID_JOINS =
	'(?:' +
	'\\.[ |$]|' + // E.g. "r. " in "Mr. Smith"
	' |' + // E.g. " " in "Josh Duck"
	'[' +
	PUNCTUATION +
	']|' + // E.g. "-' in "Salier-Hellendag"
	')';

const LENGTH_LIMIT = 75;

const AtSignMentionsRegex = new RegExp(
	'(^|\\s|\\()(' +
		'[' +
		TRIGGERS +
		']' +
		'((?:' +
		VALID_CHARS +
		VALID_JOINS +
		'){0,' +
		LENGTH_LIMIT +
		'})' +
		')$'
);

// 50 is the longest alias length limit.
const ALIAS_LENGTH_LIMIT = 50;

// Regex used to match alias.
const AtSignMentionsRegexAliasRegex = new RegExp(
	'(^|\\s|\\()(' +
		'[' +
		TRIGGERS +
		']' +
		'((?:' +
		VALID_CHARS +
		'){0,' +
		ALIAS_LENGTH_LIMIT +
		'})' +
		')$'
);

const mentionsCache = new Map();

class OptionItem {
	data;
	ref = { current: null };

	constructor(data) {
		this.data = data;
	}

	get data() {
		return this.data;
	}

	get ref() {
		return this.ref.current;
	}

	set ref(ref) {
		this.ref.current = ref;
	}
}

function checkForAtSignMentions(text) {
	let match = AtSignMentionsRegex.exec(text);

	if (match === null) {
		match = AtSignMentionsRegexAliasRegex.exec(text);
	}
	if (match !== null) {
		// The strategy ignores leading whitespace but we need to know it's
		// length to add it to the leadOffset
		const maybeLeadingWhitespace = match[1];

		const matchingString = match[3];
		if (matchingString.length >= 0) {
			return {
				leadOffset: match.index + maybeLeadingWhitespace.length,
				matchingString,
				replaceableString: match[2],
			};
		}
	}
	return null;
}

function useMentionLookupService(mentionString) {
	const [results, setResults] = useState([]);

	useEffect(() => {
		const cachedResults = mentionsCache.get(mentionString);

		if (mentionString == null) {
			setResults([]);
			return;
		}

		if (cachedResults === null) {
			return;
		} else if (cachedResults !== undefined) {
			setResults(cachedResults);
			return;
		}

		mentionsCache.set(mentionString, null);
		dummyLookupService.search(mentionString, (newResults) => {
			mentionsCache.set(mentionString, newResults);
			setResults(newResults);
		});
	}, [mentionString]);

	return results;
}

const dummyLookupService = {
	search(string, callback) {
		setTimeout(() => {
			const results = dummyMentionsData.filter((mention) =>
				mention.toLowerCase().includes(string.toLowerCase())
			);
			callback(results);
		}, 500);
	},
};

const MentionPlugin = () => {
	const [editor] = useLexicalComposerContext();
	const [queryString, setQueryString] = useState(null);

	const results = useMentionLookupService(queryString);

	const onSelectOption = useCallback(
		(selectedOption, nodeToReplace, closeMenu) => {
			editor.update(() => {
				const mentionNode = $createMentionNode(selectedOption);
				if (nodeToReplace) {
					nodeToReplace.replace(mentionNode);
				}
				closeMenu();
			});
		},
		[editor]
	);

	const options = useMemo(() => {
		return results.map((result) => new OptionItem(result));
	}, [editor, results]);


	return (
		<LexicalTypeaheadMenuPlugin
			onQueryChange={setQueryString}
			onSelectOption={onSelectOption}
			triggerFn={checkForAtSignMentions}
			options={options}
			menuRenderFn={(
				anchorElementRef,
				{ selectedIndex, selectOptionAndCleanUp, setHighlightedIndex }
			) => {
				return (
					anchorElementRef.current && !! options?.length && (
						<ul className="absolute inset-x-0 top-full mt-2.5 mx-0 mb-0 w-full h-auto max-h-48 overflow-y-auto z-10 bg-white border border-solid border-border-strong shadow-lg rounded-md">
							{options.map((option, index) => (
								<li
									ref={option.ref}
									key={index}
									className={cn(
										'px-3 py-2 cursor-pointer m-0',
										index === selectedIndex && 'bg-gray-100'
									)}
									onMouseEnter={() => {
										setHighlightedIndex(index)
                                    }}
									onClick={() =>
										selectOptionAndCleanUp(option)
									}
								>
									{option.data}
								</li>
							))}
						</ul>
					)
				);
			}}
		/>
	);
};

export default MentionPlugin;
