export function parseMarkdown(raw) {
	const parts = raw.split('---');

	let metadata = {};
	let content = raw;

	if (parts.length >= 3) {
		const frontmatter = parts[1].trim();
		content = parts.slice(2).join('---').trim();

		frontmatter.split('\n').forEach((line) => {
			const separator = line.indexOf(':');

			if (separator === -1) return;

			const key = line.slice(0, separator).trim();
			const value = line.slice(separator + 1).trim();

			metadata[key] = value;
		});
	}

	return {
		metadata,
		content
	};
}