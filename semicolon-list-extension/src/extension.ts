import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('semicolonList.convert', async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }

    const selection = editor.selection;
    const text = editor.document.getText(selection).trim();

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
      .map((part, index) => {
        const clean = part.replace(/\.$/, '');
        return index === parts.length - 1 ? `- ${clean}.` : `- ${clean};`;
      })
      .join('\n');

    await editor.edit(editBuilder => {
      editBuilder.replace(selection, result);
    });
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}