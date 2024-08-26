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

export default OptionItem;