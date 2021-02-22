(function() {var implementors = {};
implementors["cairo"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"cairo/enum.Error.html\" title=\"enum cairo::Error\">Error</a>&gt; for <a class=\"enum\" href=\"cairo/enum.IoError.html\" title=\"enum cairo::IoError\">IoError</a>","synthetic":false,"types":["cairo::error::IoError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"cairo/enum.IoError.html\" title=\"enum cairo::IoError\">IoError</a>","synthetic":false,"types":["cairo::error::IoError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"cairo/enum.Error.html\" title=\"enum cairo::Error\">Error</a>&gt; for <a class=\"enum\" href=\"cairo/enum.BorrowError.html\" title=\"enum cairo::BorrowError\">BorrowError</a>","synthetic":false,"types":["cairo::error::BorrowError"]}];
implementors["cairo_sys"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt; for <a class=\"struct\" href=\"cairo_sys/struct.cairo_bool_t.html\" title=\"struct cairo_sys::cairo_bool_t\">cairo_bool_t</a>","synthetic":false,"types":["cairo_sys::cairo_bool_t"]}];
implementors["gdk"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"gdk/struct.Atom.html\" title=\"struct gdk::Atom\">Atom</a>","synthetic":false,"types":["gdk::atom::Atom"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"gdk/keys/struct.Key.html\" title=\"struct gdk::keys::Key\">Key</a>","synthetic":false,"types":["gdk::keys::Key"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"cairo/rectangle_int/struct.RectangleInt.html\" title=\"struct cairo::rectangle_int::RectangleInt\">RectangleInt</a>&gt; for <a class=\"struct\" href=\"gdk/struct.Rectangle.html\" title=\"struct gdk::Rectangle\">Rectangle</a>","synthetic":false,"types":["gdk::rectangle::Rectangle"]}];
implementors["gio"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/std/net/ip/enum.IpAddr.html\" title=\"enum std::net::ip::IpAddr\">IpAddr</a>&gt; for <a class=\"struct\" href=\"gio/struct.InetAddress.html\" title=\"struct gio::InetAddress\">InetAddress</a>","synthetic":false,"types":["gio::auto::inet_address::InetAddress"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/std/net/addr/enum.SocketAddr.html\" title=\"enum std::net::addr::SocketAddr\">SocketAddr</a>&gt; for <a class=\"struct\" href=\"gio/struct.InetSocketAddress.html\" title=\"struct gio::InetSocketAddress\">InetSocketAddress</a>","synthetic":false,"types":["gio::auto::inet_socket_address::InetSocketAddress"]}];
implementors["glib"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"glib/object/trait.ObjectType.html\" title=\"trait glib::object::ObjectType\">ObjectType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"glib/object/struct.WeakRef.html\" title=\"struct glib::object::WeakRef\">WeakRef</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"glib/object/struct.SendWeakRef.html\" title=\"struct glib::object::SendWeakRef\">SendWeakRef</a>&lt;T&gt;","synthetic":false,"types":["glib::object::SendWeakRef"]},{"text":"impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a </a>T&gt; for <a class=\"struct\" href=\"glib/struct.ByteArray.html\" title=\"struct glib::ByteArray\">ByteArray</a>","synthetic":false,"types":["glib::byte_array::ByteArray"]},{"text":"impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a </a>T&gt; for <a class=\"struct\" href=\"glib/struct.Bytes.html\" title=\"struct glib::Bytes\">Bytes</a>","synthetic":false,"types":["glib::bytes::Bytes"]},{"text":"impl&lt;I:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"enum\" href=\"glib/translate/enum.GlibNoneOrInvalidError.html\" title=\"enum glib::translate::GlibNoneOrInvalidError\">GlibNoneOrInvalidError</a>&lt;I&gt;","synthetic":false,"types":["glib::translate::GlibNoneOrInvalidError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"glib/struct.GString.html\" title=\"struct glib::GString\">GString</a>","synthetic":false,"types":["glib::gstring::GString"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"glib/struct.GString.html\" title=\"struct glib::GString\">GString</a>","synthetic":false,"types":["glib::gstring::GString"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"glib/struct.GString.html\" title=\"struct glib::GString\">GString</a>","synthetic":false,"types":["glib::gstring::GString"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"glib/struct.GString.html\" title=\"struct glib::GString\">GString</a>","synthetic":false,"types":["glib::gstring::GString"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/ffi/c_str/struct.CString.html\" title=\"struct std::ffi::c_str::CString\">CString</a>&gt; for <a class=\"struct\" href=\"glib/struct.GString.html\" title=\"struct glib::GString\">GString</a>","synthetic":false,"types":["glib::gstring::GString"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/ffi/c_str/struct.CStr.html\" title=\"struct std::ffi::c_str::CStr\">CStr</a>&gt; for <a class=\"struct\" href=\"glib/struct.GString.html\" title=\"struct glib::GString\">GString</a>","synthetic":false,"types":["glib::gstring::GString"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>&gt; for <a class=\"struct\" href=\"glib/types/struct.ILong.html\" title=\"struct glib::types::ILong\">ILong</a>","synthetic":false,"types":["glib::types::ILong"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"glib/types/struct.ILong.html\" title=\"struct glib::types::ILong\">ILong</a>&gt; for c_long","synthetic":false,"types":["libc::unix::linux_like::linux::gnu::b64::x86_64::not_x32::c_long"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt; for <a class=\"struct\" href=\"glib/types/struct.ULong.html\" title=\"struct glib::types::ULong\">ULong</a>","synthetic":false,"types":["glib::types::ULong"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"glib/types/struct.ULong.html\" title=\"struct glib::types::ULong\">ULong</a>&gt; for c_ulong","synthetic":false,"types":["libc::unix::linux_like::linux::gnu::b64::x86_64::not_x32::c_ulong"]},{"text":"impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"glib/value/trait.SetValueOptional.html\" title=\"trait glib::value::SetValueOptional\">SetValueOptional</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a </a>T&gt;&gt; for <a class=\"struct\" href=\"glib/value/struct.Value.html\" title=\"struct glib::value::Value\">Value</a>","synthetic":false,"types":["glib::value::Value"]},{"text":"impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"glib/value/trait.SetValue.html\" title=\"trait glib::value::SetValue\">SetValue</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a </a>T&gt; for <a class=\"struct\" href=\"glib/value/struct.Value.html\" title=\"struct glib::value::Value\">Value</a>","synthetic":false,"types":["glib::value::Value"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"glib/value/struct.TypedValue.html\" title=\"struct glib::value::TypedValue\">TypedValue</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"glib/value/struct.Value.html\" title=\"struct glib::value::Value\">Value</a>","synthetic":false,"types":["glib::value::Value"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"glib/value/struct.SendValue.html\" title=\"struct glib::value::SendValue\">SendValue</a>&gt; for <a class=\"struct\" href=\"glib/value/struct.Value.html\" title=\"struct glib::value::Value\">Value</a>","synthetic":false,"types":["glib::value::Value"]},{"text":"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"glib/value/trait.FromValueOptional.html\" title=\"trait glib::value::FromValueOptional\">FromValueOptional</a>&lt;'a&gt; + <a class=\"trait\" href=\"glib/value/trait.SetValueOptional.html\" title=\"trait glib::value::SetValueOptional\">SetValueOptional</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a </a>T&gt;&gt; for <a class=\"struct\" href=\"glib/value/struct.TypedValue.html\" title=\"struct glib::value::TypedValue\">TypedValue</a>&lt;T&gt;","synthetic":false,"types":["glib::value::TypedValue"]},{"text":"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"glib/value/trait.FromValueOptional.html\" title=\"trait glib::value::FromValueOptional\">FromValueOptional</a>&lt;'a&gt; + <a class=\"trait\" href=\"glib/value/trait.SetValue.html\" title=\"trait glib::value::SetValue\">SetValue</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a </a>T&gt; for <a class=\"struct\" href=\"glib/value/struct.TypedValue.html\" title=\"struct glib::value::TypedValue\">TypedValue</a>&lt;T&gt;","synthetic":false,"types":["glib::value::TypedValue"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt; for <a class=\"struct\" href=\"glib/value/struct.TypedValue.html\" title=\"struct glib::value::TypedValue\">TypedValue</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;","synthetic":false,"types":["glib::value::TypedValue"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"glib/value/struct.TypedValue.html\" title=\"struct glib::value::TypedValue\">TypedValue</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;","synthetic":false,"types":["glib::value::TypedValue"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"glib/value/struct.TypedValue.html\" title=\"struct glib::value::TypedValue\">TypedValue</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt; for <a class=\"struct\" href=\"glib/value/struct.TypedValue.html\" title=\"struct glib::value::TypedValue\">TypedValue</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;","synthetic":false,"types":["glib::value::TypedValue"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"glib/value/struct.TypedValue.html\" title=\"struct glib::value::TypedValue\">TypedValue</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;&gt; for <a class=\"struct\" href=\"glib/value/struct.TypedValue.html\" title=\"struct glib::value::TypedValue\">TypedValue</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;","synthetic":false,"types":["glib::value::TypedValue"]},{"text":"impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"glib/value/trait.SetValueOptional.html\" title=\"trait glib::value::SetValueOptional\">SetValueOptional</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a </a>T&gt;&gt; for <a class=\"struct\" href=\"glib/value/struct.SendValue.html\" title=\"struct glib::value::SendValue\">SendValue</a>","synthetic":false,"types":["glib::value::SendValue"]},{"text":"impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"glib/value/trait.SetValue.html\" title=\"trait glib::value::SetValue\">SetValue</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a </a>T&gt; for <a class=\"struct\" href=\"glib/value/struct.SendValue.html\" title=\"struct glib::value::SendValue\">SendValue</a>","synthetic":false,"types":["glib::value::SendValue"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"glib/value/struct.TypedValue.html\" title=\"struct glib::value::TypedValue\">TypedValue</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"glib/value/struct.SendValue.html\" title=\"struct glib::value::SendValue\">SendValue</a>","synthetic":false,"types":["glib::value::SendValue"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"glib/variant/struct.Variant.html\" title=\"struct glib::variant::Variant\">Variant</a>&gt; for <a class=\"struct\" href=\"glib/struct.VariantDict.html\" title=\"struct glib::VariantDict\">VariantDict</a>","synthetic":false,"types":["glib::variant_dict::VariantDict"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"glib/types/enum.Type.html\" title=\"enum glib::types::Type\">Type</a>&gt; for <a class=\"struct\" href=\"glib/subclass/signal/struct.SignalType.html\" title=\"struct glib::subclass::signal::SignalType\">SignalType</a>","synthetic":false,"types":["glib::subclass::signal::SignalType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"glib/subclass/signal/struct.SignalType.html\" title=\"struct glib::subclass::signal::SignalType\">SignalType</a>&gt; for <a class=\"enum\" href=\"glib/types/enum.Type.html\" title=\"enum glib::types::Type\">Type</a>","synthetic":false,"types":["glib::types::Type"]}];
implementors["gtk"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>&gt; for <a class=\"enum\" href=\"gtk/enum.IconSize.html\" title=\"enum gtk::IconSize\">IconSize</a>","synthetic":false,"types":["gtk::auto::enums::IconSize"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>&gt; for <a class=\"enum\" href=\"gtk/enum.ResponseType.html\" title=\"enum gtk::ResponseType\">ResponseType</a>","synthetic":false,"types":["gtk::response_type::ResponseType"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()