import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import TextColorCommand from './textcolorcommand';
import Colors from '../colors.js';
const TEXT_COLOR = 'textColor';

export default class TextColorEditing extends Plugin {
    /**
     * @inheritDoc
     */
    constructor(editor) {
        super(editor);

        // Define default configuration using named presets.
        editor.config.define(TEXT_COLOR, Colors);
    }

    /**
     * @inheritDoc
     */
    init() {
        const editor = this.editor;

        // Define view to model conversion.
        const options = editor.config.get('textColor.options');
        const definition = _buildDefinition(options);

        // Allow textColor attribute on text nodes.
        editor.model.schema.extend('$text', {allowAttributes: TEXT_COLOR});

        // Set-up the two-way conversion.
        editor.conversion.attributeToElement(definition);

        // Add TextColor command.
        editor.commands.add(TEXT_COLOR, new TextColorCommand(editor));
    }
}

function _buildDefinition(options) {
    const definition = {
        model: {
            key: TEXT_COLOR,
            values: []
        },
        view: {}
    };

    for (const option of options) {
        definition.model.values.push(option.model);
        definition.view[option.model] = {
            name: 'span',
            styles: {
                'color': option.color,
            }
        };
    }

    return definition;
}