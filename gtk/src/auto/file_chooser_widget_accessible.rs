// This file was generated by gir (https://github.com/gtk-rs/gir)
// from gir-files (https://github.com/gtk-rs/gir-files)
// DO NOT EDIT

use std::fmt;

glib::wrapper! {
    #[doc(alias = "GtkFileChooserWidgetAccessible")]
    pub struct FileChooserWidgetAccessible(Object<ffi::GtkFileChooserWidgetAccessible, ffi::GtkFileChooserWidgetAccessibleClass>) @extends atk::Object;

    match fn {
        type_ => || ffi::gtk_file_chooser_widget_accessible_get_type(),
    }
}

impl FileChooserWidgetAccessible {}

impl FileChooserWidgetAccessible {
    pub const NONE: Option<&'static FileChooserWidgetAccessible> = None;
}

impl fmt::Display for FileChooserWidgetAccessible {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        f.write_str("FileChooserWidgetAccessible")
    }
}
