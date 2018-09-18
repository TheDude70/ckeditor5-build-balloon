/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

// The editor creator to use.
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import TextColor from './textcolor/textcolor';

export default class BalloonEditor extends BalloonEditorBase {
}

// Plugins to include in the build.
BalloonEditor.builtinPlugins = [
    Essentials,
    Autoformat,
    Bold,
    Italic,
    Heading,
    List,
    Paragraph,
    FontSize,
    Highlight,
    Strikethrough,
    Underline,
    Alignment,
    TextColor,
];

// Editor configuration.
BalloonEditor.defaultConfig = {
    toolbar: {
        items: [
            'bold',
            'italic',
            'underline',
            'strikethrough',
            '|',
            'fontSize',
            'textColor',
            'highlight',
            '|',
            'bulletedList',
            'numberedList',
            '|',
            'alignment',
            '|',
            'undo',
            'redo'
        ]
    },
    fontSize: {
        options: [
            8, 9, 10, 11, 12, 14, 16, 18, 20, 24, 36
        ]
    },
    // This value must be kept in sync with the language defined in webpack.config.js.
    language: 'en'
};
