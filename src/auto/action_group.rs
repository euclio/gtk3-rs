// This file was generated by gir (a3f05e3) from gir-files (11e0e6d)
// DO NOT EDIT

use Object;
use ffi;
use ffi::GActionGroup;
use glib;
use glib::object::Downcast;
use glib::object::IsA;
use glib::signal::connect;
use glib::translate::*;
use glib_ffi;
use glib_ffi::gboolean;
use glib_ffi::gpointer;
use libc::c_char;
use std::boxed::Box as Box_;
use std::mem::transmute;

glib_wrapper! {
    pub struct ActionGroup(Object<ffi::GActionGroup>);

    match fn {
        get_type => || ffi::g_action_group_get_type(),
    }
}

pub trait ActionGroupExt {
    fn action_added(&self, action_name: &str);

    fn action_enabled_changed(&self, action_name: &str, enabled: bool);

    fn action_removed(&self, action_name: &str);

    fn action_state_changed(&self, action_name: &str, state: &glib::Variant);

    fn activate_action(&self, action_name: &str, parameter: Option<&glib::Variant>);

    fn change_action_state(&self, action_name: &str, value: &glib::Variant);

    fn get_action_enabled(&self, action_name: &str) -> bool;

    fn get_action_parameter_type(&self, action_name: &str) -> Option<glib::VariantType>;

    fn get_action_state(&self, action_name: &str) -> Option<glib::Variant>;

    fn get_action_state_hint(&self, action_name: &str) -> Option<glib::Variant>;

    fn get_action_state_type(&self, action_name: &str) -> Option<glib::VariantType>;

    fn has_action(&self, action_name: &str) -> bool;

    fn list_actions(&self) -> Vec<String>;

    fn connect_action_added<F: Fn(&Self, &str) + 'static>(&self, f: F) -> u64;

    fn connect_action_enabled_changed<F: Fn(&Self, &str, bool) + 'static>(&self, f: F) -> u64;

    fn connect_action_removed<F: Fn(&Self, &str) + 'static>(&self, f: F) -> u64;

    fn connect_action_state_changed<F: Fn(&Self, &str, &glib::Variant) + 'static>(&self, f: F) -> u64;
}

impl<O: IsA<ActionGroup> + IsA<Object>> ActionGroupExt for O {
    fn action_added(&self, action_name: &str) {
        unsafe {
            ffi::g_action_group_action_added(self.to_glib_none().0, action_name.to_glib_none().0);
        }
    }

    fn action_enabled_changed(&self, action_name: &str, enabled: bool) {
        unsafe {
            ffi::g_action_group_action_enabled_changed(self.to_glib_none().0, action_name.to_glib_none().0, enabled.to_glib());
        }
    }

    fn action_removed(&self, action_name: &str) {
        unsafe {
            ffi::g_action_group_action_removed(self.to_glib_none().0, action_name.to_glib_none().0);
        }
    }

    fn action_state_changed(&self, action_name: &str, state: &glib::Variant) {
        unsafe {
            ffi::g_action_group_action_state_changed(self.to_glib_none().0, action_name.to_glib_none().0, state.to_glib_none().0);
        }
    }

    fn activate_action(&self, action_name: &str, parameter: Option<&glib::Variant>) {
        unsafe {
            ffi::g_action_group_activate_action(self.to_glib_none().0, action_name.to_glib_none().0, parameter.to_glib_none().0);
        }
    }

    fn change_action_state(&self, action_name: &str, value: &glib::Variant) {
        unsafe {
            ffi::g_action_group_change_action_state(self.to_glib_none().0, action_name.to_glib_none().0, value.to_glib_none().0);
        }
    }

    fn get_action_enabled(&self, action_name: &str) -> bool {
        unsafe {
            from_glib(ffi::g_action_group_get_action_enabled(self.to_glib_none().0, action_name.to_glib_none().0))
        }
    }

    fn get_action_parameter_type(&self, action_name: &str) -> Option<glib::VariantType> {
        unsafe {
            from_glib_none(ffi::g_action_group_get_action_parameter_type(self.to_glib_none().0, action_name.to_glib_none().0))
        }
    }

    fn get_action_state(&self, action_name: &str) -> Option<glib::Variant> {
        unsafe {
            from_glib_full(ffi::g_action_group_get_action_state(self.to_glib_none().0, action_name.to_glib_none().0))
        }
    }

    fn get_action_state_hint(&self, action_name: &str) -> Option<glib::Variant> {
        unsafe {
            from_glib_full(ffi::g_action_group_get_action_state_hint(self.to_glib_none().0, action_name.to_glib_none().0))
        }
    }

    fn get_action_state_type(&self, action_name: &str) -> Option<glib::VariantType> {
        unsafe {
            from_glib_full(ffi::g_action_group_get_action_state_type(self.to_glib_none().0, action_name.to_glib_none().0))
        }
    }

    fn has_action(&self, action_name: &str) -> bool {
        unsafe {
            from_glib(ffi::g_action_group_has_action(self.to_glib_none().0, action_name.to_glib_none().0))
        }
    }

    fn list_actions(&self) -> Vec<String> {
        unsafe {
            FromGlibPtrContainer::from_glib_full(ffi::g_action_group_list_actions(self.to_glib_none().0))
        }
    }
}
