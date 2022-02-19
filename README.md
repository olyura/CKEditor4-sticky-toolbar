# CKEditor 4 Sticky Toolbar

This plugin for your CKEditor 4 makes the toolbar act sticky inside of editor window while scrolling! Suitable for long articles and large editors. Multiple editors on one page support. For the best experience use this plugin with [AutoGrow](https://ckeditor.com/cke4/addon/autogrow).

## Installation

- Download the plugin and put it into CKEditor <strong>plugins folder</strong>
- Enable the plugin adding the following code inside your <strong>config.js</strong>.

```sh
config.extraPlugins = 'sticky';
```
If you have any fixed or sticky header in your interface, to avoid layering you should use <strong>config.stikyOffsetTop</strong> in your <strong>config.js</strong>.

```sh
config.stikyOffsetTop = 60;
```
Where 60 is your fixed header height in pixels. This configuration is '0' by default.
