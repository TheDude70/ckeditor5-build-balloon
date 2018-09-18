import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import TextColorCommand from './textcolorcommand';

const TEXT_COLOR = 'textColor';

export default class TextColorEditing extends Plugin {
    /**
     * @inheritDoc
     */
    constructor(editor) {
        super(editor);

        // Define default configuration using named presets.
        editor.config.define(TEXT_COLOR, {
            options: [
                {
                    title: 'Black',
                    color: '#000000',
                },
                {
                    model: 'AliceBlue',
                    title: 'Alice Blue',
                    color: '#F0F8FF',
                },
                {
                    model: 'AntiqueWhite',
                    title: 'Antique White',
                    color: '#FAEBD7',
                },
                {
                    model: 'AquaMarine',
                    title: 'Aqua Marine',
                    color: '#7FFFD4',
                },
                {
                    model: 'Azure',
                    title: 'Azure',
                    color: '#F0FFFF',
                },
                {
                    model: 'Beige',
                    title: 'Beige',
                    color: '#F5F5DC',
                },
                {
                    model: 'Bisque',
                    title: 'Bisque',
                    color: '#FFE4C4',
                },
                {
                    model: 'BlanchedAlmond',
                    title: 'Blanched Almond',
                    color: '#FFEBCD',
                },
                {
                    model: 'Blue',
                    title: 'Blue',
                    color: '#0000FF',
                },
                {
                    model: 'BlueViolet',
                    title: 'Blue Violet',
                    color: '#8A2BE2',
                },
                {
                    model: 'Brown',
                    title: 'Brown',
                    color: '#A52A2A',
                },
                {
                    model: 'BurlyWood',
                    title: 'Burly Wood',
                    color: '#DEB887',
                },
                {
                    model: 'CadetBlue',
                    title: 'Cadet Blue',
                    color: '#5F9EA0',
                },
                {
                    model: 'Chartreuse',
                    title: 'Chartreuse',
                    color: '#7FFF00',
                },
                {
                    model: 'Chocolate',
                    title: 'Chocolate',
                    color: '#D2691E',
                },
                {
                    model: 'Coral',
                    title: 'Coral',
                    color: '#FF7F50',
                },
                {
                    model: 'CornflowerBlue',
                    title: 'Cornflower Blue',
                    color: '#6495ED',
                },
                {
                    model: 'Cornsilk',
                    title: 'Cornsilk',
                    color: '#FFF8DC',
                },
                {
                    model: 'Crimson',
                    title: 'Crimson',
                    color: '#DC143C',
                },
                {
                    model: 'Cyan',
                    title: 'Cyan',
                    color: '#00FFFF',
                },
                {
                    model: 'DarkBlue',
                    title: 'Dark Blue',
                    color: '#00008B',
                },
                {
                    model: 'DarkCyan',
                    title: 'Dark Cyan',
                    color: '#008B8B',
                },
                {
                    model: 'DarkGoldenRod',
                    title: 'Dark Golden Rod',
                    color: '#B8860B',
                },
                {
                    model: 'DarkGray',
                    title: 'Dark Gray',
                    color: '#A9A9A9',
                },
                {
                    model: 'DarkGreen',
                    title: 'Dark Green',
                    color: '#006400',
                },
                {
                    model: 'DarkKhaki',
                    title: 'DarkKhaki',
                    color: '#BDB76B',
                },
                {
                    model: 'DarkMagenta',
                    title: 'Dark Magenta',
                    color: '#8B008B',
                },
                {
                    model: 'DarkOliveGreen',
                    title: 'Dark Olive Green',
                    color: '#556B2F',
                }
            ]
        });
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