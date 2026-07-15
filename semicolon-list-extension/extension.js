const vscode = require('vscode');

function activate(context) {
  const disposable = vscode.commands.registerCommand('semicolonList.convert', async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }

    const selection = editor.selection;
    const text = editor.document.getText(selection);

    if (!text) {
      return;
    }

    const parts = text
      .split(';')
      .map(s => s.trim())
      .filter(Boolean);

    if (!parts.length) {
      return;
    }

    const result = parts
      .map((part, i) => {
        const isLast = i === parts.length - 1;
        const clean = isLast ? part.replace(/\.$/, '') + '.' : part.replace(/\.$/, '') + ';';
        return `- ${clean}`;
      })
      .join('\n');

    await editor.edit(editBuilder => {
      editBuilder.replace(selection, result);
    });
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};