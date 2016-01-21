// This file was generated by gir (baa441b) from gir-files (11e0e6d)
// DO NOT EDIT

use Bin;
use Box;
use Buildable;
use Container;
use Widget;
use Window;
use ffi;
use glib::object::Downcast;
use glib::object::IsA;
use glib::translate::*;

glib_wrapper! {
    pub struct Dialog(Object<ffi::GtkDialog>): Widget, Container, Bin, Window, Buildable;

    match fn {
        get_type => || ffi::gtk_dialog_get_type(),
    }
}

impl Dialog {
    pub fn new() -> Dialog {
        assert_initialized_main_thread!();
        unsafe {
            Widget::from_glib_none(ffi::gtk_dialog_new()).downcast_unchecked()
        }
    }

    //pub fn new_with_buttons<T: IsA<Window>>(title: Option<&str>, parent: Option<&T>, flags: DialogFlags, first_button_text: Option<&str>, : /*Unknown conversion*/Fundamental: VarArgs) -> Dialog {
    //    unsafe { TODO: call ffi::gtk_dialog_new_with_buttons() }
    //}
}

pub trait DialogExt {
    fn add_action_widget<T: IsA<Widget>>(&self, child: &T, response_id: i32);

    fn add_button(&self, button_text: &str, response_id: i32) -> Widget;

    //fn add_buttons(&self, first_button_text: &str, : /*Unknown conversion*/Fundamental: VarArgs);

    fn get_action_area(&self) -> Widget;

    fn get_content_area(&self) -> Box;

    #[cfg(gtk_3_12)]
    fn get_header_bar(&self) -> Option<Widget>;

    fn get_response_for_widget<T: IsA<Widget>>(&self, widget: &T) -> i32;

    fn get_widget_for_response(&self, response_id: i32) -> Option<Widget>;

    fn response(&self, response_id: i32);

    fn run(&self) -> i32;

    //fn set_alternative_button_order(&self, first_response_id: i32, : /*Unknown conversion*/Fundamental: VarArgs);

    //fn set_alternative_button_order_from_array(&self, n_params: i32, new_order: &Unknown rust type: "CArray TypeId { ns_id: 0, id: 14 }");

    fn set_default_response(&self, response_id: i32);

    fn set_response_sensitive(&self, response_id: i32, setting: bool);
}

impl<O: IsA<Dialog>> DialogExt for O {
    fn add_action_widget<T: IsA<Widget>>(&self, child: &T, response_id: i32) {
        unsafe {
            ffi::gtk_dialog_add_action_widget(self.to_glib_none().0, child.to_glib_none().0, response_id);
        }
    }

    fn add_button(&self, button_text: &str, response_id: i32) -> Widget {
        unsafe {
            from_glib_none(ffi::gtk_dialog_add_button(self.to_glib_none().0, button_text.to_glib_none().0, response_id))
        }
    }

    //fn add_buttons(&self, first_button_text: &str, : /*Unknown conversion*/Fundamental: VarArgs) {
    //    unsafe { TODO: call ffi::gtk_dialog_add_buttons() }
    //}

    fn get_action_area(&self) -> Widget {
        unsafe {
            from_glib_none(ffi::gtk_dialog_get_action_area(self.to_glib_none().0))
        }
    }

    fn get_content_area(&self) -> Box {
        unsafe {
            from_glib_none(ffi::gtk_dialog_get_content_area(self.to_glib_none().0))
        }
    }

    #[cfg(gtk_3_12)]
    fn get_header_bar(&self) -> Option<Widget> {
        unsafe {
            from_glib_none(ffi::gtk_dialog_get_header_bar(self.to_glib_none().0))
        }
    }

    fn get_response_for_widget<T: IsA<Widget>>(&self, widget: &T) -> i32 {
        unsafe {
            ffi::gtk_dialog_get_response_for_widget(self.to_glib_none().0, widget.to_glib_none().0)
        }
    }

    fn get_widget_for_response(&self, response_id: i32) -> Option<Widget> {
        unsafe {
            from_glib_none(ffi::gtk_dialog_get_widget_for_response(self.to_glib_none().0, response_id))
        }
    }

    fn response(&self, response_id: i32) {
        unsafe {
            ffi::gtk_dialog_response(self.to_glib_none().0, response_id);
        }
    }

    fn run(&self) -> i32 {
        unsafe {
            ffi::gtk_dialog_run(self.to_glib_none().0)
        }
    }

    //fn set_alternative_button_order(&self, first_response_id: i32, : /*Unknown conversion*/Fundamental: VarArgs) {
    //    unsafe { TODO: call ffi::gtk_dialog_set_alternative_button_order() }
    //}

    //fn set_alternative_button_order_from_array(&self, n_params: i32, new_order: &Unknown rust type: "CArray TypeId { ns_id: 0, id: 14 }") {
    //    unsafe { TODO: call ffi::gtk_dialog_set_alternative_button_order_from_array() }
    //}

    fn set_default_response(&self, response_id: i32) {
        unsafe {
            ffi::gtk_dialog_set_default_response(self.to_glib_none().0, response_id);
        }
    }

    fn set_response_sensitive(&self, response_id: i32, setting: bool) {
        unsafe {
            ffi::gtk_dialog_set_response_sensitive(self.to_glib_none().0, response_id, setting.to_glib());
        }
    }
}
