class OptionItem {
	data;
	by;
	ref = { current: null };

	constructor(data, by = 'name') {
		this.data = data;
		this.by = by;
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

export default OptionItem;