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

        // Allow textColor attribute on text nodes.
        editor.model.schema.extend('$text', {allowAttributes: TEXT_COLOR});

        // Define view to model conversion.
        const options = editor.config.get('textColor.options');
        const definition = _buildDefinition(options);

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
            classes: option.title.replace(/\s/g, '-').toLowerCase(),
            priority: 5
        }
    }

    return definition;
}

function toRGB(color) {
    let hex = color.substring(1);

    let r = parseInt(hex.substr(0, 2), 16);
    let g = parseInt(hex.substr(2, 2), 16);
    let b = parseInt(hex.substr(4, 2), 16);

    return 'rgb(' + r + ',' + g + ',' + b + ')';
}