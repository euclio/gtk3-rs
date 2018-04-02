// This file was generated by gir (https://github.com/gtk-rs/gir @ 6855214)
// from gir-files (https://github.com/gtk-rs/gir-files @ cf55bdc)
// DO NOT EDIT

use IMContext;
use MenuShell;
use ffi;
use glib::object::Downcast;
use glib::object::IsA;
use glib::translate::*;
use glib_ffi;
use gobject_ffi;
use std::mem;
use std::ptr;

glib_wrapper! {
    pub struct IMMulticontext(Object<ffi::GtkIMMulticontext, ffi::GtkIMMulticontextClass>): IMContext;

    match fn {
        get_type => || ffi::gtk_im_multicontext_get_type(),
    }
}

impl IMMulticontext {
    pub fn new() -> IMMulticontext {
        assert_initialized_main_thread!();
        unsafe {
            IMContext::from_glib_full(ffi::gtk_im_multicontext_new()).downcast_unchecked()
        }
    }
}

impl Default for IMMulticontext {
    fn default() -> Self {
        Self::new()
    }
}

pub trait IMMulticontextExt {
    #[cfg_attr(feature = "v3_10", deprecated)]
    fn append_menuitems<P: IsA<MenuShell>>(&self, menushell: &P);

    fn get_context_id(&self) -> Option<String>;

    fn set_context_id(&self, context_id: &str);
}

impl<O: IsA<IMMulticontext>> IMMulticontextExt for O {
    fn append_menuitems<P: IsA<MenuShell>>(&self, menushell: &P) {
        unsafe {
            ffi::gtk_im_multicontext_append_menuitems(self.to_glib_none().0, menushell.to_glib_none().0);
        }
    }

    fn get_context_id(&self) -> Option<String> {
        unsafe {
            from_glib_none(ffi::gtk_im_multicontext_get_context_id(self.to_glib_none().0))
        }
    }

    fn set_context_id(&self, context_id: &str) {
        unsafe {
            ffi::gtk_im_multicontext_set_context_id(self.to_glib_none().0, context_id.to_glib_none().0);
        }
    }
}
