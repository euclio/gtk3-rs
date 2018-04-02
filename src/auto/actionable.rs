// This file was generated by gir (https://github.com/gtk-rs/gir @ 6855214)
// from gir-files (https://github.com/gtk-rs/gir-files @ cf55bdc)
// DO NOT EDIT

use Buildable;
use Widget;
use ffi;
use glib;
use glib::object::Downcast;
use glib::object::IsA;
use glib::signal::SignalHandlerId;
use glib::signal::connect;
use glib::translate::*;
use glib_ffi;
use gobject_ffi;
use std::boxed::Box as Box_;
use std::mem;
use std::mem::transmute;
use std::ptr;

glib_wrapper! {
    pub struct Actionable(Object<ffi::GtkActionable, ffi::GtkActionableInterface>): Widget, Buildable;

    match fn {
        get_type => || ffi::gtk_actionable_get_type(),
    }
}

pub trait ActionableExt {
    fn get_action_name(&self) -> Option<String>;

    fn get_action_target_value(&self) -> Option<glib::Variant>;

    fn set_action_name<'a, P: Into<Option<&'a str>>>(&self, action_name: P);

    //fn set_action_target(&self, format_string: &str, : /*Unknown conversion*//*Unimplemented*/Fundamental: VarArgs);

    fn set_action_target_value(&self, target_value: &glib::Variant);

    fn set_detailed_action_name(&self, detailed_action_name: &str);

    fn connect_property_action_name_notify<F: Fn(&Self) + 'static>(&self, f: F) -> SignalHandlerId;
}

impl<O: IsA<Actionable> + IsA<glib::object::Object>> ActionableExt for O {
    fn get_action_name(&self) -> Option<String> {
        unsafe {
            from_glib_none(ffi::gtk_actionable_get_action_name(self.to_glib_none().0))
        }
    }

    fn get_action_target_value(&self) -> Option<glib::Variant> {
        unsafe {
            from_glib_none(ffi::gtk_actionable_get_action_target_value(self.to_glib_none().0))
        }
    }

    fn set_action_name<'a, P: Into<Option<&'a str>>>(&self, action_name: P) {
        let action_name = action_name.into();
        let action_name = action_name.to_glib_none();
        unsafe {
            ffi::gtk_actionable_set_action_name(self.to_glib_none().0, action_name.0);
        }
    }

    //fn set_action_target(&self, format_string: &str, : /*Unknown conversion*//*Unimplemented*/Fundamental: VarArgs) {
    //    unsafe { TODO: call ffi::gtk_actionable_set_action_target() }
    //}

    fn set_action_target_value(&self, target_value: &glib::Variant) {
        unsafe {
            ffi::gtk_actionable_set_action_target_value(self.to_glib_none().0, target_value.to_glib_none().0);
        }
    }

    fn set_detailed_action_name(&self, detailed_action_name: &str) {
        unsafe {
            ffi::gtk_actionable_set_detailed_action_name(self.to_glib_none().0, detailed_action_name.to_glib_none().0);
        }
    }

    fn connect_property_action_name_notify<F: Fn(&Self) + 'static>(&self, f: F) -> SignalHandlerId {
        unsafe {
            let f: Box_<Box_<Fn(&Self) + 'static>> = Box_::new(Box_::new(f));
            connect(self.to_glib_none().0, "notify::action-name",
                transmute(notify_action_name_trampoline::<Self> as usize), Box_::into_raw(f) as *mut _)
        }
    }
}

unsafe extern "C" fn notify_action_name_trampoline<P>(this: *mut ffi::GtkActionable, _param_spec: glib_ffi::gpointer, f: glib_ffi::gpointer)
where P: IsA<Actionable> {
    callback_guard!();
    let f: &&(Fn(&P) + 'static) = transmute(f);
    f(&Actionable::from_glib_borrow(this).downcast_unchecked())
}
