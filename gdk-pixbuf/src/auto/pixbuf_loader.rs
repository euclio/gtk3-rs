// This file was generated by gir (https://github.com/gtk-rs/gir)
// from gir-files (https://github.com/gtk-rs/gir-files)
// DO NOT EDIT

use crate::Pixbuf;
use crate::PixbufAnimation;
use crate::PixbufFormat;
use glib::object::Cast;
use glib::object::IsA;
use glib::signal::connect_raw;
use glib::signal::SignalHandlerId;
use glib::translate::*;
use std::boxed::Box as Box_;
use std::fmt;
use std::mem::transmute;
use std::ptr;

glib::wrapper! {
    pub struct PixbufLoader(Object<ffi::GdkPixbufLoader, ffi::GdkPixbufLoaderClass>);

    match fn {
        get_type => || ffi::gdk_pixbuf_loader_get_type(),
    }
}

impl PixbufLoader {
    #[doc(alias = "gdk_pixbuf_loader_new")]
    pub fn new() -> PixbufLoader {
        unsafe { from_glib_full(ffi::gdk_pixbuf_loader_new()) }
    }

    #[doc(alias = "gdk_pixbuf_loader_new_with_mime_type")]
    pub fn with_mime_type(mime_type: &str) -> Result<PixbufLoader, glib::Error> {
        unsafe {
            let mut error = ptr::null_mut();
            let ret =
                ffi::gdk_pixbuf_loader_new_with_mime_type(mime_type.to_glib_none().0, &mut error);
            if error.is_null() {
                Ok(from_glib_full(ret))
            } else {
                Err(from_glib_full(error))
            }
        }
    }

    #[doc(alias = "gdk_pixbuf_loader_new_with_type")]
    pub fn with_type(image_type: &str) -> Result<PixbufLoader, glib::Error> {
        unsafe {
            let mut error = ptr::null_mut();
            let ret = ffi::gdk_pixbuf_loader_new_with_type(image_type.to_glib_none().0, &mut error);
            if error.is_null() {
                Ok(from_glib_full(ret))
            } else {
                Err(from_glib_full(error))
            }
        }
    }
}

impl Default for PixbufLoader {
    fn default() -> Self {
        Self::new()
    }
}

pub const NONE_PIXBUF_LOADER: Option<&PixbufLoader> = None;

pub trait PixbufLoaderExt: 'static {
    #[doc(alias = "gdk_pixbuf_loader_close")]
    fn close(&self) -> Result<(), glib::Error>;

    #[doc(alias = "gdk_pixbuf_loader_get_animation")]
    fn get_animation(&self) -> Option<PixbufAnimation>;

    #[doc(alias = "gdk_pixbuf_loader_get_format")]
    fn get_format(&self) -> Option<PixbufFormat>;

    #[doc(alias = "gdk_pixbuf_loader_get_pixbuf")]
    fn get_pixbuf(&self) -> Option<Pixbuf>;

    #[doc(alias = "gdk_pixbuf_loader_set_size")]
    fn set_size(&self, width: i32, height: i32);

    #[doc(alias = "gdk_pixbuf_loader_write")]
    fn write(&self, buf: &[u8]) -> Result<(), glib::Error>;

    #[doc(alias = "gdk_pixbuf_loader_write_bytes")]
    fn write_bytes(&self, buffer: &glib::Bytes) -> Result<(), glib::Error>;

    fn connect_area_prepared<F: Fn(&Self) + 'static>(&self, f: F) -> SignalHandlerId;

    fn connect_area_updated<F: Fn(&Self, i32, i32, i32, i32) + 'static>(
        &self,
        f: F,
    ) -> SignalHandlerId;

    fn connect_closed<F: Fn(&Self) + 'static>(&self, f: F) -> SignalHandlerId;

    fn connect_size_prepared<F: Fn(&Self, i32, i32) + 'static>(&self, f: F) -> SignalHandlerId;
}

impl<O: IsA<PixbufLoader>> PixbufLoaderExt for O {
    fn close(&self) -> Result<(), glib::Error> {
        unsafe {
            let mut error = ptr::null_mut();
            let _ = ffi::gdk_pixbuf_loader_close(self.as_ref().to_glib_none().0, &mut error);
            if error.is_null() {
                Ok(())
            } else {
                Err(from_glib_full(error))
            }
        }
    }

    fn get_animation(&self) -> Option<PixbufAnimation> {
        unsafe {
            from_glib_none(ffi::gdk_pixbuf_loader_get_animation(
                self.as_ref().to_glib_none().0,
            ))
        }
    }

    fn get_format(&self) -> Option<PixbufFormat> {
        unsafe {
            from_glib_none(ffi::gdk_pixbuf_loader_get_format(
                self.as_ref().to_glib_none().0,
            ))
        }
    }

    fn get_pixbuf(&self) -> Option<Pixbuf> {
        unsafe {
            from_glib_none(ffi::gdk_pixbuf_loader_get_pixbuf(
                self.as_ref().to_glib_none().0,
            ))
        }
    }

    fn set_size(&self, width: i32, height: i32) {
        unsafe {
            ffi::gdk_pixbuf_loader_set_size(self.as_ref().to_glib_none().0, width, height);
        }
    }

    fn write(&self, buf: &[u8]) -> Result<(), glib::Error> {
        let count = buf.len() as usize;
        unsafe {
            let mut error = ptr::null_mut();
            let _ = ffi::gdk_pixbuf_loader_write(
                self.as_ref().to_glib_none().0,
                buf.to_glib_none().0,
                count,
                &mut error,
            );
            if error.is_null() {
                Ok(())
            } else {
                Err(from_glib_full(error))
            }
        }
    }

    fn write_bytes(&self, buffer: &glib::Bytes) -> Result<(), glib::Error> {
        unsafe {
            let mut error = ptr::null_mut();
            let _ = ffi::gdk_pixbuf_loader_write_bytes(
                self.as_ref().to_glib_none().0,
                buffer.to_glib_none().0,
                &mut error,
            );
            if error.is_null() {
                Ok(())
            } else {
                Err(from_glib_full(error))
            }
        }
    }

    fn connect_area_prepared<F: Fn(&Self) + 'static>(&self, f: F) -> SignalHandlerId {
        unsafe extern "C" fn area_prepared_trampoline<P, F: Fn(&P) + 'static>(
            this: *mut ffi::GdkPixbufLoader,
            f: glib::ffi::gpointer,
        ) where
            P: IsA<PixbufLoader>,
        {
            let f: &F = &*(f as *const F);
            f(&PixbufLoader::from_glib_borrow(this).unsafe_cast_ref())
        }
        unsafe {
            let f: Box_<F> = Box_::new(f);
            connect_raw(
                self.as_ptr() as *mut _,
                b"area-prepared\0".as_ptr() as *const _,
                Some(transmute::<_, unsafe extern "C" fn()>(
                    area_prepared_trampoline::<Self, F> as *const (),
                )),
                Box_::into_raw(f),
            )
        }
    }

    fn connect_area_updated<F: Fn(&Self, i32, i32, i32, i32) + 'static>(
        &self,
        f: F,
    ) -> SignalHandlerId {
        unsafe extern "C" fn area_updated_trampoline<P, F: Fn(&P, i32, i32, i32, i32) + 'static>(
            this: *mut ffi::GdkPixbufLoader,
            x: libc::c_int,
            y: libc::c_int,
            width: libc::c_int,
            height: libc::c_int,
            f: glib::ffi::gpointer,
        ) where
            P: IsA<PixbufLoader>,
        {
            let f: &F = &*(f as *const F);
            f(
                &PixbufLoader::from_glib_borrow(this).unsafe_cast_ref(),
                x,
                y,
                width,
                height,
            )
        }
        unsafe {
            let f: Box_<F> = Box_::new(f);
            connect_raw(
                self.as_ptr() as *mut _,
                b"area-updated\0".as_ptr() as *const _,
                Some(transmute::<_, unsafe extern "C" fn()>(
                    area_updated_trampoline::<Self, F> as *const (),
                )),
                Box_::into_raw(f),
            )
        }
    }

    fn connect_closed<F: Fn(&Self) + 'static>(&self, f: F) -> SignalHandlerId {
        unsafe extern "C" fn closed_trampoline<P, F: Fn(&P) + 'static>(
            this: *mut ffi::GdkPixbufLoader,
            f: glib::ffi::gpointer,
        ) where
            P: IsA<PixbufLoader>,
        {
            let f: &F = &*(f as *const F);
            f(&PixbufLoader::from_glib_borrow(this).unsafe_cast_ref())
        }
        unsafe {
            let f: Box_<F> = Box_::new(f);
            connect_raw(
                self.as_ptr() as *mut _,
                b"closed\0".as_ptr() as *const _,
                Some(transmute::<_, unsafe extern "C" fn()>(
                    closed_trampoline::<Self, F> as *const (),
                )),
                Box_::into_raw(f),
            )
        }
    }

    fn connect_size_prepared<F: Fn(&Self, i32, i32) + 'static>(&self, f: F) -> SignalHandlerId {
        unsafe extern "C" fn size_prepared_trampoline<P, F: Fn(&P, i32, i32) + 'static>(
            this: *mut ffi::GdkPixbufLoader,
            width: libc::c_int,
            height: libc::c_int,
            f: glib::ffi::gpointer,
        ) where
            P: IsA<PixbufLoader>,
        {
            let f: &F = &*(f as *const F);
            f(
                &PixbufLoader::from_glib_borrow(this).unsafe_cast_ref(),
                width,
                height,
            )
        }
        unsafe {
            let f: Box_<F> = Box_::new(f);
            connect_raw(
                self.as_ptr() as *mut _,
                b"size-prepared\0".as_ptr() as *const _,
                Some(transmute::<_, unsafe extern "C" fn()>(
                    size_prepared_trampoline::<Self, F> as *const (),
                )),
                Box_::into_raw(f),
            )
        }
    }
}

impl fmt::Display for PixbufLoader {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        f.write_str("PixbufLoader")
    }
}