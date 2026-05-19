//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/disclose-version.js
if (typeof window !== "undefined") {
	var _window$__svelte, _window;
	((_window$__svelte = (_window = window).__svelte ?? (_window.__svelte = {})).v ?? (_window$__svelte.v = /* @__PURE__ */ new Set())).add("5");
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/constants.js
var HYDRATION_ERROR = {};
var UNINITIALIZED = Symbol();
var FILENAME = Symbol("filename");
//#endregion
//#region ../../node_modules/.pnpm/esm-env@1.2.2/node_modules/esm-env/dev-fallback.js
var node_env = globalThis.process?.env?.NODE_ENV;
var dev_fallback_default = node_env && !node_env.toLowerCase().startsWith("prod");
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/shared/utils.js
var is_array = Array.isArray;
var index_of = Array.prototype.indexOf;
var includes = Array.prototype.includes;
var array_from = Array.from;
var object_keys = Object.keys;
var define_property = Object.defineProperty;
var get_descriptor = Object.getOwnPropertyDescriptor;
var get_descriptors = Object.getOwnPropertyDescriptors;
var object_prototype = Object.prototype;
var array_prototype = Array.prototype;
var get_prototype_of = Object.getPrototypeOf;
var is_extensible = Object.isExtensible;
var noop = () => {};
/** @param {Array<() => void>} arr */
function run_all(arr) {
	for (var i = 0; i < arr.length; i++) arr[i]();
}
/**
* TODO replace with Promise.withResolvers once supported widely enough
* @template [T=void]
*/
function deferred() {
	/** @type {(value: T) => void} */
	var resolve;
	/** @type {(reason: any) => void} */
	var reject;
	return {
		promise: new Promise((res, rej) => {
			resolve = res;
			reject = rej;
		}),
		resolve,
		reject
	};
}
//#endregion
//#region \0@oxc-project+runtime@0.130.0/helpers/typeof.js
function _typeof(o) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
		return typeof o;
	} : function(o) {
		return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	}, _typeof(o);
}
//#endregion
//#region \0@oxc-project+runtime@0.130.0/helpers/toPrimitive.js
function toPrimitive(t, r) {
	if ("object" != _typeof(t) || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != _typeof(i)) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
//#endregion
//#region \0@oxc-project+runtime@0.130.0/helpers/toPropertyKey.js
function toPropertyKey(t) {
	var i = toPrimitive(t, "string");
	return "symbol" == _typeof(i) ? i : i + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.130.0/helpers/defineProperty.js
function _defineProperty(e, r, t) {
	return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
var CLEAN = 1024;
var DIRTY = 2048;
var MAYBE_DIRTY = 4096;
var INERT = 8192;
var DESTROYED = 16384;
/** Set once a reaction has run for the first time */
var REACTION_RAN = 32768;
/** Effect is in the process of getting destroyed. Can be observed in child teardown functions */
var DESTROYING = 1 << 25;
/**
* 'Transparent' effects do not create a transition boundary.
* This is on a block effect 99% of the time but may also be on a branch effect if its parent block effect was pruned
*/
var EFFECT_TRANSPARENT = 65536;
var EFFECT_PRESERVED = 1 << 19;
var USER_EFFECT = 1 << 20;
var EFFECT_OFFSCREEN = 1 << 25;
/**
* Tells that we marked this derived and its reactions as visited during the "mark as (maybe) dirty"-phase.
* Will be lifted during execution of the derived and during checking its dirty state (both are necessary
* because a derived might be checked but not executed). This is a pure performance optimization flag and
* should not be used for any other purpose!
*/
var WAS_MARKED = 65536;
var REACTION_IS_UPDATING = 1 << 21;
var ASYNC = 1 << 22;
var ERROR_VALUE = 1 << 23;
var STATE_SYMBOL = Symbol("$state");
var LEGACY_PROPS = Symbol("legacy props");
var LOADING_ATTR_SYMBOL = Symbol("");
var PROXY_PATH_SYMBOL = Symbol("proxy path");
var ATTRIBUTES_CACHE = Symbol("attributes");
var CLASS_CACHE = Symbol("class");
var STYLE_CACHE = Symbol("style");
var TEXT_CACHE = Symbol("text");
var FORM_RESET_HANDLER = Symbol("form reset");
/** An anchor might change, via this symbol on the original anchor we can tell HMR about the updated anchor */
var HMR_ANCHOR = Symbol("hmr anchor");
/** allow users to ignore aborted signal errors if `reason.name === 'StaleReactionError` */
var STALE_REACTION = new class StaleReactionError extends Error {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "name", "StaleReactionError");
		_defineProperty(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
	}
}();
var IS_XHTML = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/shared/errors.js
/**
* An invariant violation occurred, meaning Svelte's internal assumptions were flawed. This is a bug in Svelte, not your app — please open an issue at https://github.com/sveltejs/svelte, citing the following message: "%message%"
* @param {string} message
* @returns {never}
*/
function invariant_violation(message) {
	if (dev_fallback_default) {
		const error = /* @__PURE__ */ new Error(`invariant_violation\nAn invariant violation occurred, meaning Svelte's internal assumptions were flawed. This is a bug in Svelte, not your app — please open an issue at https://github.com/sveltejs/svelte, citing the following message: "${message}"\nhttps://svelte.dev/e/invariant_violation`);
		error.name = "Svelte error";
		throw error;
	} else throw new Error(`https://svelte.dev/e/invariant_violation`);
}
/**
* `%name%(...)` can only be used during component initialisation
* @param {string} name
* @returns {never}
*/
function lifecycle_outside_component(name) {
	if (dev_fallback_default) {
		const error = /* @__PURE__ */ new Error(`lifecycle_outside_component\n\`${name}(...)\` can only be used during component initialisation\nhttps://svelte.dev/e/lifecycle_outside_component`);
		error.name = "Svelte error";
		throw error;
	} else throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/errors.js
/**
* Cannot create a `$derived(...)` with an `await` expression outside of an effect tree
* @returns {never}
*/
function async_derived_orphan() {
	if (dev_fallback_default) {
		const error = /* @__PURE__ */ new Error(`async_derived_orphan\nCannot create a \`$derived(...)\` with an \`await\` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan`);
		error.name = "Svelte error";
		throw error;
	} else throw new Error(`https://svelte.dev/e/async_derived_orphan`);
}
/**
* Using `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead
* @returns {never}
*/
function bind_invalid_checkbox_value() {
	if (dev_fallback_default) {
		const error = /* @__PURE__ */ new Error(`bind_invalid_checkbox_value\nUsing \`bind:value\` together with a checkbox input is not allowed. Use \`bind:checked\` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value`);
		error.name = "Svelte error";
		throw error;
	} else throw new Error(`https://svelte.dev/e/bind_invalid_checkbox_value`);
}
/**
* A derived value cannot reference itself recursively
* @returns {never}
*/
function derived_references_self() {
	if (dev_fallback_default) {
		const error = /* @__PURE__ */ new Error(`derived_references_self\nA derived value cannot reference itself recursively\nhttps://svelte.dev/e/derived_references_self`);
		error.name = "Svelte error";
		throw error;
	} else throw new Error(`https://svelte.dev/e/derived_references_self`);
}
/**
* Keyed each block has duplicate key `%value%` at indexes %a% and %b%
* @param {string} a
* @param {string} b
* @param {string | undefined | null} [value]
* @returns {never}
*/
function each_key_duplicate(a, b, value) {
	if (dev_fallback_default) {
		const error = /* @__PURE__ */ new Error(`each_key_duplicate\n${value ? `Keyed each block has duplicate key \`${value}\` at indexes ${a} and ${b}` : `Keyed each block has duplicate key at indexes ${a} and ${b}`}\nhttps://svelte.dev/e/each_key_duplicate`);
		error.name = "Svelte error";
		throw error;
	} else throw new Error(`https://svelte.dev/e/each_key_duplicate`);
}
/**
* Keyed each block has key that is not idempotent — the key for item at index %index% was `%a%` but is now `%b%`. Keys must be the same each time for a given item
* @param {string} index
* @param {string} a
* @param {string} b
* @returns {never}
*/
function each_key_volatile(index, a, b) {
	if (dev_fallback_default) {
		const error = /* @__PURE__ */ new Error(`each_key_volatile\nKeyed each block has key that is not idempotent — the key for item at index ${index} was \`${a}\` but is now \`${b}\`. Keys must be the same each time for a given item\nhttps://svelte.dev/e/each_key_volatile`);
		error.name = "Svelte error";
		throw error;
	} else throw new Error(`https://svelte.dev/e/each_key_volatile`);
}
/**
* `%rune%` cannot be used inside an effect cleanup function
* @param {string} rune
* @returns {never}
*/
function effect_in_teardown(rune) {
	if (dev_fallback_default) {
		const error = /* @__PURE__ */ new Error(`effect_in_teardown\n\`${rune}\` cannot be used inside an effect cleanup function\nhttps://svelte.dev/e/effect_in_teardown`);
		error.name = "Svelte error";
		throw error;
	} else throw new Error(`https://svelte.dev/e/effect_in_teardown`);
}
/**
* Effect cannot be created inside a `$derived` value that was not itself created inside an effect
* @returns {never}
*/
function effect_in_unowned_derived() {
	if (dev_fallback_default) {
		const error = /* @__PURE__ */ new Error(`effect_in_unowned_derived\nEffect cannot be created inside a \`$derived\` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived`);
		error.name = "Svelte error";
		throw error;
	} else throw new Error(`https://svelte.dev/e/effect_in_unowned_derived`);
}
/**
* `%rune%` can only be used inside an effect (e.g. during component initialisation)
* @param {string} rune
* @returns {never}
*/
function effect_orphan(rune) {
	if (dev_fallback_default) {
		const error = /* @__PURE__ */ new Error(`effect_orphan\n\`${rune}\` can only be used inside an effect (e.g. during component initialisation)\nhttps://svelte.dev/e/effect_orphan`);
		error.name = "Svelte error";
		throw error;
	} else throw new Error(`https://svelte.dev/e/effect_orphan`);
}
/**
* Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
* @returns {never}
*/
function effect_update_depth_exceeded() {
	if (dev_fallback_default) {
		const error = /* @__PURE__ */ new Error(`effect_update_depth_exceeded\nMaximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state\nhttps://svelte.dev/e/effect_update_depth_exceeded`);
		error.name = "Svelte error";
		throw error;
	} else throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
}
/**
* Failed to hydrate the application
* @returns {never}
*/
function hydration_failed() {
	if (dev_fallback_default) {
		const error = /* @__PURE__ */ new Error(`hydration_failed\nFailed to hydrate the application\nhttps://svelte.dev/e/hydration_failed`);
		error.name = "Svelte error";
		throw error;
	} else throw new Error(`https://svelte.dev/e/hydration_failed`);
}
/**
* Cannot do `bind:%key%={undefined}` when `%key%` has a fallback value
* @param {string} key
* @returns {never}
*/
function props_invalid_value(key) {
	if (dev_fallback_default) {
		const error = /* @__PURE__ */ new Error(`props_invalid_value\nCannot do \`bind:${key}={undefined}\` when \`${key}\` has a fallback value\nhttps://svelte.dev/e/props_invalid_value`);
		error.name = "Svelte error";
		throw error;
	} else throw new Error(`https://svelte.dev/e/props_invalid_value`);
}
/**
* The `%rune%` rune is only available inside `.svelte` and `.svelte.js/ts` files
* @param {string} rune
* @returns {never}
*/
function rune_outside_svelte(rune) {
	if (dev_fallback_default) {
		const error = /* @__PURE__ */ new Error(`rune_outside_svelte\nThe \`${rune}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files\nhttps://svelte.dev/e/rune_outside_svelte`);
		error.name = "Svelte error";
		throw error;
	} else throw new Error(`https://svelte.dev/e/rune_outside_svelte`);
}
/**
* Property descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.
* @returns {never}
*/
function state_descriptors_fixed() {
	if (dev_fallback_default) {
		const error = /* @__PURE__ */ new Error(`state_descriptors_fixed\nProperty descriptors defined on \`$state\` objects must contain \`value\` and always be \`enumerable\`, \`configurable\` and \`writable\`.\nhttps://svelte.dev/e/state_descriptors_fixed`);
		error.name = "Svelte error";
		throw error;
	} else throw new Error(`https://svelte.dev/e/state_descriptors_fixed`);
}
/**
* Cannot set prototype of `$state` object
* @returns {never}
*/
function state_prototype_fixed() {
	if (dev_fallback_default) {
		const error = /* @__PURE__ */ new Error(`state_prototype_fixed\nCannot set prototype of \`$state\` object\nhttps://svelte.dev/e/state_prototype_fixed`);
		error.name = "Svelte error";
		throw error;
	} else throw new Error(`https://svelte.dev/e/state_prototype_fixed`);
}
/**
* Updating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`
* @returns {never}
*/
function state_unsafe_mutation() {
	if (dev_fallback_default) {
		const error = /* @__PURE__ */ new Error(`state_unsafe_mutation\nUpdating state inside \`$derived(...)\`, \`$inspect(...)\` or a template expression is forbidden. If the value should not be reactive, declare it without \`$state\`\nhttps://svelte.dev/e/state_unsafe_mutation`);
		error.name = "Svelte error";
		throw error;
	} else throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
}
/**
* A `<svelte:boundary>` `reset` function cannot be called while an error is still being handled
* @returns {never}
*/
function svelte_boundary_reset_onerror() {
	if (dev_fallback_default) {
		const error = /* @__PURE__ */ new Error(`svelte_boundary_reset_onerror\nA \`<svelte:boundary>\` \`reset\` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror`);
		error.name = "Svelte error";
		throw error;
	} else throw new Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`);
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/warnings.js
var bold = "font-weight: bold";
var normal = "font-weight: normal";
/**
* Detected reactivity loss when reading `%name%`. This happens when state is read in an async function after an earlier `await`
* @param {string} name
*/
function await_reactivity_loss(name) {
	if (dev_fallback_default) console.warn(`%c[svelte] await_reactivity_loss\n%cDetected reactivity loss when reading \`${name}\`. This happens when state is read in an async function after an earlier \`await\`\nhttps://svelte.dev/e/await_reactivity_loss`, bold, normal);
	else console.warn(`https://svelte.dev/e/await_reactivity_loss`);
}
/**
* An async derived, `%name%` (%location%) was not read immediately after it resolved. This often indicates an unnecessary waterfall, which can slow down your app
* @param {string} name
* @param {string} location
*/
function await_waterfall(name, location) {
	if (dev_fallback_default) console.warn(`%c[svelte] await_waterfall\n%cAn async derived, \`${name}\` (${location}) was not read immediately after it resolved. This often indicates an unnecessary waterfall, which can slow down your app\nhttps://svelte.dev/e/await_waterfall`, bold, normal);
	else console.warn(`https://svelte.dev/e/await_waterfall`);
}
/**
* Reading a derived belonging to a now-destroyed effect may result in stale values
*/
function derived_inert() {
	if (dev_fallback_default) console.warn(`%c[svelte] derived_inert\n%cReading a derived belonging to a now-destroyed effect may result in stale values\nhttps://svelte.dev/e/derived_inert`, bold, normal);
	else console.warn(`https://svelte.dev/e/derived_inert`);
}
/**
* The `%attribute%` attribute on `%html%` changed its value between server and client renders. The client value, `%value%`, will be ignored in favour of the server value
* @param {string} attribute
* @param {string} html
* @param {string} value
*/
function hydration_attribute_changed(attribute, html, value) {
	if (dev_fallback_default) console.warn(`%c[svelte] hydration_attribute_changed\n%cThe \`${attribute}\` attribute on \`${html}\` changed its value between server and client renders. The client value, \`${value}\`, will be ignored in favour of the server value\nhttps://svelte.dev/e/hydration_attribute_changed`, bold, normal);
	else console.warn(`https://svelte.dev/e/hydration_attribute_changed`);
}
/**
* Hydration failed because the initial UI does not match what was rendered on the server. The error occurred near %location%
* @param {string | undefined | null} [location]
*/
function hydration_mismatch(location) {
	if (dev_fallback_default) console.warn(`%c[svelte] hydration_mismatch\n%c${location ? `Hydration failed because the initial UI does not match what was rendered on the server. The error occurred near ${location}` : "Hydration failed because the initial UI does not match what was rendered on the server"}\nhttps://svelte.dev/e/hydration_mismatch`, bold, normal);
	else console.warn(`https://svelte.dev/e/hydration_mismatch`);
}
/**
* Tried to unmount a component that was not mounted
*/
function lifecycle_double_unmount() {
	if (dev_fallback_default) console.warn(`%c[svelte] lifecycle_double_unmount\n%cTried to unmount a component that was not mounted\nhttps://svelte.dev/e/lifecycle_double_unmount`, bold, normal);
	else console.warn(`https://svelte.dev/e/lifecycle_double_unmount`);
}
/**
* Reactive `$state(...)` proxies and the values they proxy have different identities. Because of this, comparisons with `%operator%` will produce unexpected results
* @param {string} operator
*/
function state_proxy_equality_mismatch(operator) {
	if (dev_fallback_default) console.warn(`%c[svelte] state_proxy_equality_mismatch\n%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${operator}\` will produce unexpected results\nhttps://svelte.dev/e/state_proxy_equality_mismatch`, bold, normal);
	else console.warn(`https://svelte.dev/e/state_proxy_equality_mismatch`);
}
/**
* Tried to unmount a state proxy, rather than a component
*/
function state_proxy_unmount() {
	if (dev_fallback_default) console.warn(`%c[svelte] state_proxy_unmount\n%cTried to unmount a state proxy, rather than a component\nhttps://svelte.dev/e/state_proxy_unmount`, bold, normal);
	else console.warn(`https://svelte.dev/e/state_proxy_unmount`);
}
/**
* A `<svelte:boundary>` `reset` function only resets the boundary the first time it is called
*/
function svelte_boundary_reset_noop() {
	if (dev_fallback_default) console.warn(`%c[svelte] svelte_boundary_reset_noop\n%cA \`<svelte:boundary>\` \`reset\` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop`, bold, normal);
	else console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`);
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/dom/hydration.js
/** @import { TemplateNode } from '#client' */
/**
* Use this variable to guard everything related to hydration code so it can be treeshaken out
* if the user doesn't use the `hydrate` method and these code paths are therefore not needed.
*/
var hydrating = false;
/** @param {boolean} value */
function set_hydrating(value) {
	hydrating = value;
}
/**
* The node that is currently being hydrated. This starts out as the first node inside the opening
* <!--[--> comment, and updates each time a component calls `$.child(...)` or `$.sibling(...)`.
* When entering a block (e.g. `{#if ...}`), `hydrate_node` is the block opening comment; by the
* time we leave the block it is the closing comment, which serves as the block's anchor.
* @type {TemplateNode}
*/
var hydrate_node;
/** @param {TemplateNode | null} node */
function set_hydrate_node(node) {
	if (node === null) {
		hydration_mismatch();
		throw HYDRATION_ERROR;
	}
	return hydrate_node = node;
}
function hydrate_next() {
	return set_hydrate_node(/* @__PURE__ */ get_next_sibling(hydrate_node));
}
/** @param {TemplateNode} node */
function reset(node) {
	if (!hydrating) return;
	if (/* @__PURE__ */ get_next_sibling(hydrate_node) !== null) {
		hydration_mismatch();
		throw HYDRATION_ERROR;
	}
	hydrate_node = node;
}
function next(count = 1) {
	if (hydrating) {
		var i = count;
		var node = hydrate_node;
		while (i--) node = /* @__PURE__ */ get_next_sibling(node);
		hydrate_node = node;
	}
}
/**
* Skips or removes (depending on {@link remove}) all nodes starting at `hydrate_node` up until the next hydration end comment
* @param {boolean} remove
*/
function skip_nodes(remove = true) {
	var depth = 0;
	var node = hydrate_node;
	while (true) {
		if (node.nodeType === 8) {
			var data = node.data;
			if (data === "]") {
				if (depth === 0) return node;
				depth -= 1;
			} else if (data === "[" || data === "[!" || data[0] === "[" && !isNaN(Number(data.slice(1)))) depth += 1;
		}
		var next = /* @__PURE__ */ get_next_sibling(node);
		if (remove) node.remove();
		node = next;
	}
}
/**
*
* @param {TemplateNode} node
*/
function read_hydration_instruction(node) {
	if (!node || node.nodeType !== 8) {
		hydration_mismatch();
		throw HYDRATION_ERROR;
	}
	return node.data;
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/reactivity/equality.js
/** @import { Equals } from '#client' */
/** @type {Equals} */
function equals$2(value) {
	return value === this.v;
}
/**
* @param {unknown} a
* @param {unknown} b
* @returns {boolean}
*/
function safe_not_equal(a, b) {
	return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
}
/** @type {Equals} */
function safe_equals(value) {
	return !safe_not_equal(value, this.v);
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/flags/index.js
/** True if experimental.async=true */
var async_mode_flag = false;
/** True if we're not certain that we only have Svelte 5 code in the compilation */
var legacy_mode_flag = false;
/** True if $inspect.trace is used */
var tracing_mode_flag = false;
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/dev/tracing.js
/**
* @typedef {{
*   traces: Error[];
* }} TraceEntry
*/
/** @type {{ reaction: Reaction | null, entries: Map<Value, TraceEntry> } | null} */
var tracing_expressions = null;
/**
* @param {Value} source
* @param {string} label
*/
function tag(source, label) {
	source.label = label;
	tag_proxy(source.v, label);
	return source;
}
/**
* @param {unknown} value
* @param {string} label
*/
function tag_proxy(value, label) {
	value?.[PROXY_PATH_SYMBOL]?.(label);
	return value;
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/shared/dev.js
/**
* @param {string} label
* @returns {Error & { stack: string } | null}
*/
function get_error(label) {
	const error = /* @__PURE__ */ new Error();
	const stack = get_stack();
	if (stack.length === 0) return null;
	stack.unshift("\n");
	define_property(error, "stack", { value: stack.join("\n") });
	define_property(error, "name", { value: label });
	return error;
}
/**
* @returns {string[]}
*/
function get_stack() {
	const limit = Error.stackTraceLimit;
	Error.stackTraceLimit = Infinity;
	const stack = (/* @__PURE__ */ new Error()).stack;
	Error.stackTraceLimit = limit;
	if (!stack) return [];
	const lines = stack.split("\n");
	const new_lines = [];
	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		const posixified = line.replaceAll("\\", "/");
		if (line.trim() === "Error") continue;
		if (line.includes("validate_each_keys")) return [];
		if (posixified.includes("svelte/src/internal") || posixified.includes("node_modules/.vite")) continue;
		new_lines.push(line);
	}
	return new_lines;
}
/**
* @param {boolean} condition
* @param {string} message
*/
function invariant(condition, message) {
	if (!dev_fallback_default) throw new Error("invariant(...) was not guarded by if (DEV)");
	if (!condition) invariant_violation(message);
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/context.js
/** @import { ComponentContext, DevStackEntry, Effect } from '#client' */
/** @type {ComponentContext | null} */
var component_context = null;
/** @param {ComponentContext | null} context */
function set_component_context(context) {
	component_context = context;
}
/** @type {DevStackEntry | null} */
var dev_stack = null;
/** @param {DevStackEntry | null} stack */
function set_dev_stack(stack) {
	dev_stack = stack;
}
/**
* The current component function. Different from current component context:
* ```html
* <!-- App.svelte -->
* <Foo>
*   <Bar /> <!-- context == Foo.svelte, function == App.svelte -->
* </Foo>
* ```
* @type {ComponentContext['function']}
*/
var dev_current_component_function = null;
/** @param {ComponentContext['function']} fn */
function set_dev_current_component_function(fn) {
	dev_current_component_function = fn;
}
/**
* @param {Record<string, unknown>} props
* @param {any} runes
* @param {Function} [fn]
* @returns {void}
*/
function push(props, runes = false, fn) {
	component_context = {
		p: component_context,
		i: false,
		c: null,
		e: null,
		s: props,
		x: null,
		r: active_effect,
		l: legacy_mode_flag && !runes ? {
			s: null,
			u: null,
			$: []
		} : null
	};
	if (dev_fallback_default) {
		component_context.function = fn;
		dev_current_component_function = fn;
	}
}
/**
* @template {Record<string, any>} T
* @param {T} [component]
* @returns {T}
*/
function pop(component) {
	var context = component_context;
	var effects = context.e;
	if (effects !== null) {
		context.e = null;
		for (var fn of effects) create_user_effect(fn);
	}
	if (component !== void 0) context.x = component;
	context.i = true;
	component_context = context.p;
	if (dev_fallback_default) dev_current_component_function = component_context?.function ?? null;
	return component ?? {};
}
/** @returns {boolean} */
function is_runes() {
	return !legacy_mode_flag || component_context !== null && component_context.l === null;
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/dom/task.js
/** @type {Array<() => void>} */
var micro_tasks = [];
function run_micro_tasks() {
	var tasks = micro_tasks;
	micro_tasks = [];
	run_all(tasks);
}
/**
* @param {() => void} fn
*/
function queue_micro_task(fn) {
	if (micro_tasks.length === 0 && !is_flushing_sync) {
		var tasks = micro_tasks;
		queueMicrotask(() => {
			if (tasks === micro_tasks) run_micro_tasks();
		});
	}
	micro_tasks.push(fn);
}
/**
* Synchronously run any queued tasks.
*/
function flush_tasks() {
	while (micro_tasks.length > 0) run_micro_tasks();
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/error-handling.js
/** @import { Derived, Effect } from '#client' */
/** @import { Boundary } from './dom/blocks/boundary.js' */
var adjustments = /* @__PURE__ */ new WeakMap();
/**
* @param {unknown} error
*/
function handle_error(error) {
	var effect = active_effect;
	if (effect === null) {
		/** @type {Derived} */ active_reaction.f |= ERROR_VALUE;
		return error;
	}
	if (dev_fallback_default && error instanceof Error && !adjustments.has(error)) adjustments.set(error, get_adjustments(error, effect));
	if ((effect.f & 32768) === 0 && (effect.f & 4) === 0) {
		if (dev_fallback_default && !effect.parent && error instanceof Error) apply_adjustments(error);
		throw error;
	}
	invoke_error_boundary(error, effect);
}
/**
* @param {unknown} error
* @param {Effect | null} effect
*/
function invoke_error_boundary(error, effect) {
	while (effect !== null) {
		if ((effect.f & 128) !== 0) {
			if ((effect.f & 32768) === 0) throw error;
			try {
				/** @type {Boundary} */ effect.b.error(error);
				return;
			} catch (e) {
				error = e;
			}
		}
		effect = effect.parent;
	}
	if (dev_fallback_default && error instanceof Error) apply_adjustments(error);
	throw error;
}
/**
* Add useful information to the error message/stack in development
* @param {Error} error
* @param {Effect} effect
*/
function get_adjustments(error, effect) {
	const message_descriptor = get_descriptor(error, "message");
	if (message_descriptor && !message_descriptor.configurable) return;
	var indent = is_firefox ? "  " : "	";
	var component_stack = `\n${indent}in ${effect.fn?.name || "<unknown>"}`;
	var context = effect.ctx;
	while (context !== null) {
		component_stack += `\n${indent}in ${context.function?.[FILENAME].split("/").pop()}`;
		context = context.p;
	}
	return {
		message: error.message + `\n${component_stack}\n`,
		stack: error.stack?.split("\n").filter((line) => !line.includes("svelte/src/internal")).join("\n")
	};
}
/**
* @param {Error} error
*/
function apply_adjustments(error) {
	const adjusted = adjustments.get(error);
	if (adjusted) {
		define_property(error, "message", { value: adjusted.message });
		define_property(error, "stack", { value: adjusted.stack });
	}
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/reactivity/status.js
/** @import { Derived, Signal } from '#client' */
var STATUS_MASK = ~(DIRTY | MAYBE_DIRTY | CLEAN);
/**
* @param {Signal} signal
* @param {number} status
*/
function set_signal_status(signal, status) {
	signal.f = signal.f & STATUS_MASK | status;
}
/**
* Set a derived's status to CLEAN or MAYBE_DIRTY based on its connection state.
* @param {Derived} derived
*/
function update_derived_status(derived) {
	if ((derived.f & 512) !== 0 || derived.deps === null) set_signal_status(derived, CLEAN);
	else set_signal_status(derived, MAYBE_DIRTY);
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/reactivity/utils.js
/** @import { Derived, Effect, Value } from '#client' */
/**
* @param {Value[] | null} deps
*/
function clear_marked(deps) {
	if (deps === null) return;
	for (const dep of deps) {
		if ((dep.f & 2) === 0 || (dep.f & 65536) === 0) continue;
		dep.f ^= WAS_MARKED;
		clear_marked(
			/** @type {Derived} */
			dep.deps
		);
	}
}
/**
* @param {Effect} effect
* @param {Set<Effect>} dirty_effects
* @param {Set<Effect>} maybe_dirty_effects
*/
function defer_effect(effect, dirty_effects, maybe_dirty_effects) {
	if ((effect.f & 2048) !== 0) dirty_effects.add(effect);
	else if ((effect.f & 4096) !== 0) maybe_dirty_effects.add(effect);
	clear_marked(effect.deps);
	set_signal_status(effect, CLEAN);
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/reactivity/store.js
/**
* We set this to `true` when updating a store so that we correctly
* schedule effects if the update takes place inside a `$:` effect
*/
var legacy_is_updating_store = false;
/**
* Whether or not the prop currently being read is a store binding, as in
* `<Child bind:x={$y} />`. If it is, we treat the prop as mutable even in
* runes mode, and skip `binding_property_non_reactive` validation
*/
var is_store_binding = false;
/**
* Returns a tuple that indicates whether `fn()` reads a prop that is a store binding.
* Used to prevent `binding_property_non_reactive` validation false positives and
* ensure that these props are treated as mutable even in runes mode
* @template T
* @param {() => T} fn
* @returns {[T, boolean]}
*/
function capture_store_binding(fn) {
	var previous_is_store_binding = is_store_binding;
	try {
		is_store_binding = false;
		return [fn(), is_store_binding];
	} finally {
		is_store_binding = previous_is_store_binding;
	}
}
//#endregion
//#region \0@oxc-project+runtime@0.130.0/helpers/checkPrivateRedeclaration.js
function _checkPrivateRedeclaration(e, t) {
	if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
//#endregion
//#region \0@oxc-project+runtime@0.130.0/helpers/classPrivateMethodInitSpec.js
function _classPrivateMethodInitSpec(e, a) {
	_checkPrivateRedeclaration(e, a), a.add(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.130.0/helpers/classPrivateFieldInitSpec.js
function _classPrivateFieldInitSpec(e, t, a) {
	_checkPrivateRedeclaration(e, t), t.set(e, a);
}
//#endregion
//#region \0@oxc-project+runtime@0.130.0/helpers/assertClassBrand.js
function _assertClassBrand(e, t, n) {
	if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
	throw new TypeError("Private element is not present on this object");
}
//#endregion
//#region \0@oxc-project+runtime@0.130.0/helpers/classPrivateFieldGet2.js
function _classPrivateFieldGet2(s, a) {
	return s.get(_assertClassBrand(s, a));
}
//#endregion
//#region \0@oxc-project+runtime@0.130.0/helpers/classPrivateFieldSet2.js
function _classPrivateFieldSet2(s, a, r) {
	return s.set(_assertClassBrand(s, a), r), r;
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/reactivity/batch.js
/** @import { Fork } from 'svelte' */
/** @import { Derived, Effect, Reaction, Source, Value } from '#client' */
var _Batch;
/** @type {Batch | null} */
var first_batch = null;
/** @type {Batch | null} */
var last_batch = null;
/** @type {Batch | null} */
var current_batch = null;
/**
* This is needed to avoid overwriting inputs
* @type {Batch | null}
*/
var previous_batch = null;
/**
* When time travelling (i.e. working in one batch, while other batches
* still have ongoing work), we ignore the real values of affected
* signals in favour of their values within the batch
* @type {Map<Value, any> | null}
*/
var batch_values = null;
/** @type {Effect | null} */
var last_scheduled_effect = null;
var is_flushing_sync = false;
var is_processing = false;
/**
* During traversal, this is an array. Newly created effects are (if not immediately
* executed) pushed to this array, rather than going through the scheduling
* rigamarole that would cause another turn of the flush loop.
* @type {Effect[] | null}
*/
var collected_effects = null;
/**
* An array of effects that are marked during traversal as a result of a `set`
* (not `internal_set`) call. These will be added to the next batch and
* trigger another `batch.process()`
* @type {Effect[] | null}
* @deprecated when we get rid of legacy mode and stores, we can get rid of this
*/
var legacy_updates = null;
var flush_count = 0;
/** @type {Set<Value>} */
var source_stacks = /* @__PURE__ */ new Set();
var uid = 1;
var _started = /* @__PURE__ */ new WeakMap();
var _prev = /* @__PURE__ */ new WeakMap();
var _next = /* @__PURE__ */ new WeakMap();
var _commit_callbacks = /* @__PURE__ */ new WeakMap();
var _discard_callbacks = /* @__PURE__ */ new WeakMap();
var _fork_commit_callbacks = /* @__PURE__ */ new WeakMap();
var _pending = /* @__PURE__ */ new WeakMap();
var _blocking_pending = /* @__PURE__ */ new WeakMap();
var _deferred = /* @__PURE__ */ new WeakMap();
var _roots = /* @__PURE__ */ new WeakMap();
var _new_effects = /* @__PURE__ */ new WeakMap();
var _dirty_effects$1 = /* @__PURE__ */ new WeakMap();
var _maybe_dirty_effects$1 = /* @__PURE__ */ new WeakMap();
var _skipped_branches = /* @__PURE__ */ new WeakMap();
var _unskipped_branches = /* @__PURE__ */ new WeakMap();
var _decrement_queued = /* @__PURE__ */ new WeakMap();
var _Batch_brand = /* @__PURE__ */ new WeakSet();
var Batch = class Batch {
	constructor() {
		_classPrivateMethodInitSpec(this, _Batch_brand);
		_defineProperty(this, "id", uid++);
		_classPrivateFieldInitSpec(this, _started, false);
		_defineProperty(this, "linked", true);
		_classPrivateFieldInitSpec(this, _prev, null);
		_classPrivateFieldInitSpec(this, _next, null);
		_defineProperty(
			this,
			/** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
			"async_deriveds",
			/* @__PURE__ */ new Map()
		);
		_defineProperty(
			this,
			/**
			* The current values of any signals that are updated in this batch.
			* Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
			* They keys of this map are identical to `this.#previous`
			* @type {Map<Value, [any, boolean]>}
			*/
			"current",
			/* @__PURE__ */ new Map()
		);
		_defineProperty(
			this,
			/**
			* The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
			* They keys of this map are identical to `this.#current`
			* @type {Map<Value, any>}
			*/
			"previous",
			/* @__PURE__ */ new Map()
		);
		_defineProperty(
			this,
			/**
			* Async effects which this batch doesn't take into account anymore when calculating blockers,
			* as it has a value for it already.
			* @type {Set<Effect>}
			*/
			"unblocked",
			/* @__PURE__ */ new Set()
		);
		_classPrivateFieldInitSpec(this, _commit_callbacks, /* @__PURE__ */ new Set());
		_classPrivateFieldInitSpec(this, _discard_callbacks, /* @__PURE__ */ new Set());
		_classPrivateFieldInitSpec(this, _fork_commit_callbacks, /* @__PURE__ */ new Set());
		_classPrivateFieldInitSpec(this, _pending, 0);
		_classPrivateFieldInitSpec(this, _blocking_pending, /* @__PURE__ */ new Map());
		_classPrivateFieldInitSpec(this, _deferred, null);
		_classPrivateFieldInitSpec(this, _roots, []);
		_classPrivateFieldInitSpec(this, _new_effects, []);
		_classPrivateFieldInitSpec(this, _dirty_effects$1, /* @__PURE__ */ new Set());
		_classPrivateFieldInitSpec(this, _maybe_dirty_effects$1, /* @__PURE__ */ new Set());
		_classPrivateFieldInitSpec(this, _skipped_branches, /* @__PURE__ */ new Map());
		_classPrivateFieldInitSpec(this, _unskipped_branches, /* @__PURE__ */ new Set());
		_defineProperty(this, "is_fork", false);
		_classPrivateFieldInitSpec(this, _decrement_queued, false);
	}
	/**
	* Add an effect to the #skipped_branches map and reset its children
	* @param {Effect} effect
	*/
	skip_effect(effect) {
		if (!_classPrivateFieldGet2(_skipped_branches, this).has(effect)) _classPrivateFieldGet2(_skipped_branches, this).set(effect, {
			d: [],
			m: []
		});
		_classPrivateFieldGet2(_unskipped_branches, this).delete(effect);
	}
	/**
	* Remove an effect from the #skipped_branches map and reschedule
	* any tracked dirty/maybe_dirty child effects
	* @param {Effect} effect
	* @param {(e: Effect) => void} callback
	*/
	unskip_effect(effect, callback = (e) => this.schedule(e)) {
		var tracked = _classPrivateFieldGet2(_skipped_branches, this).get(effect);
		if (tracked) {
			_classPrivateFieldGet2(_skipped_branches, this).delete(effect);
			for (var e of tracked.d) {
				set_signal_status(e, DIRTY);
				callback(e);
			}
			for (e of tracked.m) {
				set_signal_status(e, MAYBE_DIRTY);
				callback(e);
			}
		}
		_classPrivateFieldGet2(_unskipped_branches, this).add(effect);
	}
	/**
	* Associate a change to a given source with the current
	* batch, noting its previous and current values
	* @param {Value} source
	* @param {any} value
	* @param {boolean} [is_derived]
	*/
	capture(source, value, is_derived = false) {
		if (source.v !== UNINITIALIZED && !this.previous.has(source)) this.previous.set(source, source.v);
		if ((source.f & 8388608) === 0) {
			this.current.set(source, [value, is_derived]);
			batch_values?.set(source, value);
		}
		if (!this.is_fork) source.v = value;
	}
	activate() {
		current_batch = this;
	}
	deactivate() {
		current_batch = null;
		batch_values = null;
	}
	flush() {
		try {
			if (dev_fallback_default) source_stacks.clear();
			is_processing = true;
			current_batch = this;
			_assertClassBrand(_Batch_brand, this, _process).call(this);
		} finally {
			flush_count = 0;
			last_scheduled_effect = null;
			collected_effects = null;
			legacy_updates = null;
			is_processing = false;
			current_batch = null;
			batch_values = null;
			old_values.clear();
			if (dev_fallback_default) for (const source of source_stacks) source.updated = null;
		}
	}
	discard() {
		for (const fn of _classPrivateFieldGet2(_discard_callbacks, this)) fn(this);
		_classPrivateFieldGet2(_discard_callbacks, this).clear();
		_classPrivateFieldGet2(_fork_commit_callbacks, this).clear();
		_assertClassBrand(_Batch_brand, this, _unlink).call(this);
	}
	/**
	* @param {Effect} effect
	*/
	register_created_effect(effect) {
		_classPrivateFieldGet2(_new_effects, this).push(effect);
	}
	/**
	* @param {boolean} blocking
	* @param {Effect} effect
	*/
	increment(blocking, effect) {
		_classPrivateFieldSet2(_pending, this, _classPrivateFieldGet2(_pending, this) + 1);
		if (blocking) {
			let blocking_pending_count = _classPrivateFieldGet2(_blocking_pending, this).get(effect) ?? 0;
			_classPrivateFieldGet2(_blocking_pending, this).set(effect, blocking_pending_count + 1);
		}
	}
	/**
	* @param {boolean} blocking
	* @param {Effect} effect
	*/
	decrement(blocking, effect) {
		_classPrivateFieldSet2(_pending, this, _classPrivateFieldGet2(_pending, this) - 1);
		if (blocking) {
			let blocking_pending_count = _classPrivateFieldGet2(_blocking_pending, this).get(effect) ?? 0;
			if (blocking_pending_count === 1) _classPrivateFieldGet2(_blocking_pending, this).delete(effect);
			else _classPrivateFieldGet2(_blocking_pending, this).set(effect, blocking_pending_count - 1);
		}
		if (_classPrivateFieldGet2(_decrement_queued, this)) return;
		_classPrivateFieldSet2(_decrement_queued, this, true);
		queue_micro_task(() => {
			_classPrivateFieldSet2(_decrement_queued, this, false);
			if (this.linked) this.flush();
		});
	}
	/**
	* @param {Set<Effect>} dirty_effects
	* @param {Set<Effect>} maybe_dirty_effects
	*/
	transfer_effects(dirty_effects, maybe_dirty_effects) {
		for (const e of dirty_effects) _classPrivateFieldGet2(_dirty_effects$1, this).add(e);
		for (const e of maybe_dirty_effects) _classPrivateFieldGet2(_maybe_dirty_effects$1, this).add(e);
		dirty_effects.clear();
		maybe_dirty_effects.clear();
	}
	/** @param {(batch: Batch) => void} fn */
	oncommit(fn) {
		_classPrivateFieldGet2(_commit_callbacks, this).add(fn);
	}
	/** @param {(batch: Batch) => void} fn */
	ondiscard(fn) {
		_classPrivateFieldGet2(_discard_callbacks, this).add(fn);
	}
	/** @param {(batch: Batch) => void} fn */
	on_fork_commit(fn) {
		_classPrivateFieldGet2(_fork_commit_callbacks, this).add(fn);
	}
	run_fork_commit_callbacks() {
		for (const fn of _classPrivateFieldGet2(_fork_commit_callbacks, this)) fn(this);
		_classPrivateFieldGet2(_fork_commit_callbacks, this).clear();
	}
	settled() {
		return (_classPrivateFieldGet2(_deferred, this) ?? _classPrivateFieldSet2(_deferred, this, deferred())).promise;
	}
	static ensure() {
		if (current_batch === null) {
			const batch = current_batch = new Batch();
			_assertClassBrand(_Batch_brand, batch, _link).call(batch);
			if (!is_processing && !is_flushing_sync) queue_micro_task(() => {
				if (!_classPrivateFieldGet2(_started, batch)) batch.flush();
			});
		}
		return current_batch;
	}
	apply() {
		if (!async_mode_flag || !this.is_fork && _classPrivateFieldGet2(_prev, this) === null && _classPrivateFieldGet2(_next, this) === null) {
			batch_values = null;
			return;
		}
		batch_values = /* @__PURE__ */ new Map();
		for (const [source, [value]] of this.current) batch_values.set(source, value);
		for (let batch = first_batch; batch !== null; batch = _classPrivateFieldGet2(_next, batch)) {
			if (batch === this || batch.is_fork) continue;
			var intersects = false;
			if (batch.id < this.id) for (const [source, [, is_derived]] of batch.current) {
				if (is_derived) continue;
				if (this.current.has(source)) {
					intersects = true;
					break;
				}
			}
			if (!intersects) {
				for (const [source, previous] of batch.previous) if (!batch_values.has(source)) batch_values.set(source, previous);
			}
		}
	}
	/**
	*
	* @param {Effect} effect
	*/
	schedule(effect) {
		last_scheduled_effect = effect;
		if (effect.b?.is_pending && (effect.f & 16777228) !== 0 && (effect.f & 32768) === 0) {
			effect.b.defer_effect(effect);
			return;
		}
		var e = effect;
		while (e.parent !== null) {
			e = e.parent;
			var flags = e.f;
			if (collected_effects !== null && e === active_effect) {
				if (async_mode_flag) return;
				if ((active_reaction === null || (active_reaction.f & 2) === 0) && !legacy_is_updating_store) return;
			}
			if ((flags & 96) !== 0) {
				if ((flags & 1024) === 0) return;
				e.f ^= CLEAN;
			}
		}
		_classPrivateFieldGet2(_roots, this).push(e);
	}
};
_Batch = Batch;
function _is_deferred() {
	if (this.is_fork) return true;
	for (const effect of _classPrivateFieldGet2(_blocking_pending, this).keys()) {
		var e = effect;
		var skipped = false;
		while (e.parent !== null) {
			if (_classPrivateFieldGet2(_skipped_branches, this).has(e)) {
				skipped = true;
				break;
			}
			e = e.parent;
		}
		if (!skipped) return true;
	}
	return false;
}
function _process() {
	_classPrivateFieldSet2(_started, this, true);
	if (flush_count++ > 1e3) {
		_assertClassBrand(_Batch_brand, this, _unlink).call(this);
		infinite_loop_guard();
	}
	if (dev_fallback_default) for (const value of this.current.keys()) source_stacks.add(value);
	if (!_assertClassBrand(_Batch_brand, this, _is_deferred).call(this)) {
		for (const e of _classPrivateFieldGet2(_dirty_effects$1, this)) {
			_classPrivateFieldGet2(_maybe_dirty_effects$1, this).delete(e);
			set_signal_status(e, DIRTY);
			this.schedule(e);
		}
		for (const e of _classPrivateFieldGet2(_maybe_dirty_effects$1, this)) {
			set_signal_status(e, MAYBE_DIRTY);
			this.schedule(e);
		}
	}
	const roots = _classPrivateFieldGet2(_roots, this);
	_classPrivateFieldSet2(_roots, this, []);
	this.apply();
	/** @type {Effect[]} */
	var effects = collected_effects = [];
	/** @type {Effect[]} */
	var render_effects = [];
	/**
	* @type {Effect[]}
	* @deprecated when we get rid of legacy mode and stores, we can get rid of this
	*/
	var updates = legacy_updates = [];
	for (const root of roots) try {
		_assertClassBrand(_Batch_brand, this, _traverse).call(this, root, effects, render_effects);
	} catch (e) {
		reset_all(root);
		throw e;
	}
	current_batch = null;
	if (updates.length > 0) {
		var batch = _Batch.ensure();
		for (const e of updates) batch.schedule(e);
	}
	collected_effects = null;
	legacy_updates = null;
	if (_assertClassBrand(_Batch_brand, this, _is_deferred).call(this)) {
		_assertClassBrand(_Batch_brand, this, _defer_effects).call(this, render_effects);
		_assertClassBrand(_Batch_brand, this, _defer_effects).call(this, effects);
		for (const [e, t] of _classPrivateFieldGet2(_skipped_branches, this)) reset_branch(e, t);
		if (updates.length > 0)
 /** @type {Batch} */ _assertClassBrand(_Batch_brand, current_batch, _process).call(current_batch);
		return;
	}
	const earlier_batch = _assertClassBrand(_Batch_brand, this, _find_earlier_batch).call(this);
	if (earlier_batch) {
		_assertClassBrand(_Batch_brand, earlier_batch, _merge).call(earlier_batch, this);
		return;
	}
	_classPrivateFieldGet2(_dirty_effects$1, this).clear();
	_classPrivateFieldGet2(_maybe_dirty_effects$1, this).clear();
	for (const fn of _classPrivateFieldGet2(_commit_callbacks, this)) fn(this);
	_classPrivateFieldGet2(_commit_callbacks, this).clear();
	previous_batch = this;
	flush_queued_effects(render_effects);
	flush_queued_effects(effects);
	previous_batch = null;
	_classPrivateFieldGet2(_deferred, this)?.resolve();
	var next_batch = current_batch;
	if (this.linked && _classPrivateFieldGet2(_pending, this) === 0) _assertClassBrand(_Batch_brand, this, _unlink).call(this);
	if (async_mode_flag && !this.linked) {
		_assertClassBrand(_Batch_brand, this, _commit$1).call(this);
		current_batch = next_batch;
	}
	if (_classPrivateFieldGet2(_roots, this).length > 0) {
		if (next_batch === null) {
			next_batch = this;
			_assertClassBrand(_Batch_brand, this, _link).call(this);
		}
		const batch = next_batch;
		_classPrivateFieldGet2(_roots, batch).push(..._classPrivateFieldGet2(_roots, this).filter((r) => !_classPrivateFieldGet2(_roots, batch).includes(r)));
	}
	if (next_batch !== null) _assertClassBrand(_Batch_brand, next_batch, _process).call(next_batch);
}
/**
* Traverse the effect tree, executing effects or stashing
* them for later execution as appropriate
* @param {Effect} root
* @param {Effect[]} effects
* @param {Effect[]} render_effects
*/
function _traverse(root, effects, render_effects) {
	root.f ^= CLEAN;
	var effect = root.first;
	while (effect !== null) {
		var flags = effect.f;
		var is_branch = (flags & 96) !== 0;
		if (!(is_branch && (flags & 1024) !== 0 || (flags & 8192) !== 0 || _classPrivateFieldGet2(_skipped_branches, this).has(effect)) && effect.fn !== null) {
			if (is_branch) effect.f ^= CLEAN;
			else if ((flags & 4) !== 0) effects.push(effect);
			else if (async_mode_flag && (flags & 16777224) !== 0) render_effects.push(effect);
			else if (is_dirty(effect)) {
				if ((flags & 16) !== 0) _classPrivateFieldGet2(_maybe_dirty_effects$1, this).add(effect);
				update_effect(effect);
			}
			var child = effect.first;
			if (child !== null) {
				effect = child;
				continue;
			}
		}
		while (effect !== null) {
			var next = effect.next;
			if (next !== null) {
				effect = next;
				break;
			}
			effect = effect.parent;
		}
	}
}
function _find_earlier_batch() {
	var batch = _classPrivateFieldGet2(_prev, this);
	while (batch !== null) {
		if (!batch.is_fork) {
			for (const [value, [, is_derived]] of this.current) if (batch.current.has(value) && !is_derived) return batch;
		}
		batch = _classPrivateFieldGet2(_prev, batch);
	}
	return null;
}
/**
* @param {Batch} batch
*/
function _merge(batch) {
	for (const [source, value] of batch.current) {
		if (!this.previous.has(source) && batch.previous.has(source)) this.previous.set(source, batch.previous.get(source));
		this.current.set(source, value);
	}
	for (const [effect, deferred] of batch.async_deriveds) {
		const d = this.async_deriveds.get(effect);
		if (d) deferred.promise.then(d.resolve);
	}
	/**
	* mark all effects that depend on `batch.current`, except the
	* async effects that we just resolved (TODO unless they depend
	* on values in this batch that are NOT in the later batch?).
	* Through this we also will populate the correct #skipped_branches,
	* oncommit callbacks etc, so we don't need to merge them separately.
	* @param {Value} value
	*/
	const mark = (value) => {
		var reactions = value.reactions;
		if (reactions === null) return;
		for (const reaction of reactions) {
			var flags = reaction.f;
			if ((flags & 2) !== 0) mark(reaction);
			else {
				var effect = reaction;
				if (flags & 4194320 && !this.async_deriveds.has(effect)) {
					_classPrivateFieldGet2(_maybe_dirty_effects$1, this).delete(effect);
					set_signal_status(effect, DIRTY);
					this.schedule(effect);
				}
			}
		}
	};
	for (const source of this.current.keys()) mark(source);
	this.oncommit(() => batch.discard());
	_assertClassBrand(_Batch_brand, batch, _unlink).call(batch);
	current_batch = this;
	_assertClassBrand(_Batch_brand, this, _process).call(this);
}
/**
* @param {Effect[]} effects
*/
function _defer_effects(effects) {
	for (var i = 0; i < effects.length; i += 1) defer_effect(effects[i], _classPrivateFieldGet2(_dirty_effects$1, this), _classPrivateFieldGet2(_maybe_dirty_effects$1, this));
}
function _commit$1() {
	_assertClassBrand(_Batch_brand, this, _unlink).call(this);
	for (let batch = first_batch; batch !== null; batch = _classPrivateFieldGet2(_next, batch)) {
		var is_earlier = batch.id < this.id;
		/** @type {Source[]} */
		var sources = [];
		for (const [source, [value, is_derived]] of this.current) {
			if (batch.current.has(source)) {
				var batch_value = batch.current.get(source)[0];
				if (is_earlier && value !== batch_value) batch.current.set(source, [value, is_derived]);
				else continue;
			}
			sources.push(source);
		}
		if (is_earlier) for (const [effect, deferred] of this.async_deriveds) {
			const d = batch.async_deriveds.get(effect);
			if (d) deferred.promise.then(d.resolve);
		}
		if (!_classPrivateFieldGet2(_started, batch)) continue;
		var others = [...batch.current.keys()].filter((s) => !this.current.has(s));
		if (others.length === 0) {
			if (is_earlier) batch.discard();
		} else if (sources.length > 0) {
			if (dev_fallback_default) invariant(_classPrivateFieldGet2(_roots, batch).length === 0, "Batch has scheduled roots");
			if (is_earlier) for (const unskipped of _classPrivateFieldGet2(_unskipped_branches, this)) batch.unskip_effect(unskipped, (e) => {
				if ((e.f & 4194320) !== 0) batch.schedule(e);
				else _assertClassBrand(_Batch_brand, batch, _defer_effects).call(batch, [e]);
			});
			batch.activate();
			/** @type {Set<Value>} */
			var marked = /* @__PURE__ */ new Set();
			/** @type {Map<Reaction, boolean>} */
			var checked = /* @__PURE__ */ new Map();
			for (var source of sources) mark_effects(source, others, marked, checked);
			checked = /* @__PURE__ */ new Map();
			var current_unequal = [...batch.current.keys()].filter((c) => this.current.has(c) ? this.current.get(c)[0] !== c.v : true);
			if (current_unequal.length > 0) {
				for (const effect of _classPrivateFieldGet2(_new_effects, this)) if ((effect.f & 155648) === 0 && depends_on(effect, current_unequal, checked)) if ((effect.f & 4194320) !== 0) {
					set_signal_status(effect, DIRTY);
					batch.schedule(effect);
				} else _classPrivateFieldGet2(_dirty_effects$1, batch).add(effect);
			}
			if (_classPrivateFieldGet2(_roots, batch).length > 0) {
				batch.apply();
				for (var root of _classPrivateFieldGet2(_roots, batch)) _assertClassBrand(_Batch_brand, batch, _traverse).call(batch, root, [], []);
				_classPrivateFieldSet2(_roots, batch, []);
			}
			batch.deactivate();
		}
	}
}
function _link() {
	if (last_batch === null) first_batch = last_batch = this;
	else {
		_classPrivateFieldSet2(_next, last_batch, this);
		_classPrivateFieldSet2(_prev, this, last_batch);
	}
	last_batch = this;
}
function _unlink() {
	var prev = _classPrivateFieldGet2(_prev, this);
	var next = _classPrivateFieldGet2(_next, this);
	if (prev === null) first_batch = next;
	else _classPrivateFieldSet2(_next, prev, next);
	if (next === null) last_batch = prev;
	else _classPrivateFieldSet2(_prev, next, prev);
	this.linked = false;
}
/**
* Synchronously flush any pending updates.
* Returns void if no callback is provided, otherwise returns the result of calling the callback.
* @template [T=void]
* @param {(() => T) | undefined} [fn]
* @returns {T}
*/
function flushSync(fn) {
	var was_flushing_sync = is_flushing_sync;
	is_flushing_sync = true;
	try {
		var result;
		if (fn) {
			if (current_batch !== null && !current_batch.is_fork) current_batch.flush();
			result = fn();
		}
		while (true) {
			flush_tasks();
			if (current_batch === null) return result;
			current_batch.flush();
		}
	} finally {
		is_flushing_sync = was_flushing_sync;
	}
}
function infinite_loop_guard() {
	if (dev_fallback_default) {
		var updates = /* @__PURE__ */ new Map();
		for (const source of current_batch.current.keys()) for (const [stack, update] of source.updated ?? []) {
			var entry = updates.get(stack);
			if (!entry) {
				entry = {
					error: update.error,
					count: 0
				};
				updates.set(stack, entry);
			}
			entry.count += update.count;
		}
		for (const update of updates.values()) if (update.error) console.error(update.error);
	}
	try {
		effect_update_depth_exceeded();
	} catch (error) {
		if (dev_fallback_default) define_property(error, "stack", { value: "" });
		invoke_error_boundary(error, last_scheduled_effect);
	}
}
/** @type {Set<Effect> | null} */
var eager_block_effects = null;
/**
* @param {Array<Effect>} effects
* @returns {void}
*/
function flush_queued_effects(effects) {
	var length = effects.length;
	if (length === 0) return;
	var i = 0;
	while (i < length) {
		var effect = effects[i++];
		if ((effect.f & 24576) === 0 && is_dirty(effect)) {
			eager_block_effects = /* @__PURE__ */ new Set();
			update_effect(effect);
			if (effect.deps === null && effect.first === null && effect.nodes === null && effect.teardown === null && effect.ac === null) unlink_effect(effect);
			if (eager_block_effects?.size > 0) {
				old_values.clear();
				for (const e of eager_block_effects) {
					if ((e.f & 24576) !== 0) continue;
					/** @type {Effect[]} */
					const ordered_effects = [e];
					let ancestor = e.parent;
					while (ancestor !== null) {
						if (eager_block_effects.has(ancestor)) {
							eager_block_effects.delete(ancestor);
							ordered_effects.push(ancestor);
						}
						ancestor = ancestor.parent;
					}
					for (let j = ordered_effects.length - 1; j >= 0; j--) {
						const e = ordered_effects[j];
						if ((e.f & 24576) !== 0) continue;
						update_effect(e);
					}
				}
				eager_block_effects.clear();
			}
		}
	}
	eager_block_effects = null;
}
/**
* This is similar to `mark_reactions`, but it only marks async/block effects
* depending on `value` and at least one of the other `sources`, so that
* these effects can re-run after another batch has been committed
* @param {Value} value
* @param {Source[]} sources
* @param {Set<Value>} marked
* @param {Map<Reaction, boolean>} checked
*/
function mark_effects(value, sources, marked, checked) {
	if (marked.has(value)) return;
	marked.add(value);
	if (value.reactions !== null) for (const reaction of value.reactions) {
		const flags = reaction.f;
		if ((flags & 2) !== 0) mark_effects(reaction, sources, marked, checked);
		else if ((flags & 4194320) !== 0 && (flags & 2048) === 0 && depends_on(reaction, sources, checked)) {
			set_signal_status(reaction, DIRTY);
			schedule_effect(reaction);
		}
	}
}
/**
* @param {Reaction} reaction
* @param {Source[]} sources
* @param {Map<Reaction, boolean>} checked
*/
function depends_on(reaction, sources, checked) {
	const depends = checked.get(reaction);
	if (depends !== void 0) return depends;
	if (reaction.deps !== null) for (const dep of reaction.deps) {
		if (includes.call(sources, dep)) return true;
		if ((dep.f & 2) !== 0 && depends_on(dep, sources, checked)) {
			checked.set(dep, true);
			return true;
		}
	}
	checked.set(reaction, false);
	return false;
}
/**
* @param {Effect} effect
* @returns {void}
*/
function schedule_effect(effect) {
	/** @type {Batch} */ current_batch.schedule(effect);
}
/**
* Mark all the effects inside a skipped branch CLEAN, so that
* they can be correctly rescheduled later. Tracks dirty and maybe_dirty
* effects so they can be rescheduled if the branch survives.
* @param {Effect} effect
* @param {{ d: Effect[], m: Effect[] }} tracked
*/
function reset_branch(effect, tracked) {
	if ((effect.f & 32) !== 0 && (effect.f & 1024) !== 0) return;
	if ((effect.f & 2048) !== 0) tracked.d.push(effect);
	else if ((effect.f & 4096) !== 0) tracked.m.push(effect);
	set_signal_status(effect, CLEAN);
	var e = effect.first;
	while (e !== null) {
		reset_branch(e, tracked);
		e = e.next;
	}
}
/**
* Mark an entire effect tree clean following an error
* @param {Effect} effect
*/
function reset_all(effect) {
	set_signal_status(effect, CLEAN);
	var e = effect.first;
	while (e !== null) {
		reset_all(e);
		e = e.next;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/reactivity/create-subscriber.js
/**
* Returns a `subscribe` function that integrates external event-based systems with Svelte's reactivity.
* It's particularly useful for integrating with web APIs like `MediaQuery`, `IntersectionObserver`, or `WebSocket`.
*
* If `subscribe` is called inside an effect (including indirectly, for example inside a getter),
* the `start` callback will be called with an `update` function. Whenever `update` is called, the effect re-runs.
*
* If `start` returns a cleanup function, it will be called when the effect is destroyed.
*
* If `subscribe` is called in multiple effects, `start` will only be called once as long as the effects
* are active, and the returned teardown function will only be called when all effects are destroyed.
*
* It's best understood with an example. Here's an implementation of [`MediaQuery`](https://svelte.dev/docs/svelte/svelte-reactivity#MediaQuery):
*
* ```js
* import { createSubscriber } from 'svelte/reactivity';
* import { on } from 'svelte/events';
*
* export class MediaQuery {
* 	#query;
* 	#subscribe;
*
* 	constructor(query) {
* 		this.#query = window.matchMedia(`(${query})`);
*
* 		this.#subscribe = createSubscriber((update) => {
* 			// when the `change` event occurs, re-run any effects that read `this.current`
* 			const off = on(this.#query, 'change', update);
*
* 			// stop listening when all the effects are destroyed
* 			return () => off();
* 		});
* 	}
*
* 	get current() {
* 		// This makes the getter reactive, if read in an effect
* 		this.#subscribe();
*
* 		// Return the current state of the query, whether or not we're in an effect
* 		return this.#query.matches;
* 	}
* }
* ```
* @param {(update: () => void) => (() => void) | void} start
* @since 5.7.0
*/
function createSubscriber(start) {
	let subscribers = 0;
	let version = source(0);
	/** @type {(() => void) | void} */
	let stop;
	if (dev_fallback_default) tag(version, "createSubscriber version");
	return () => {
		if (effect_tracking()) {
			get$8(version);
			render_effect(() => {
				if (subscribers === 0) stop = untrack(() => start(() => increment(version)));
				subscribers += 1;
				return () => {
					queue_micro_task(() => {
						subscribers -= 1;
						if (subscribers === 0) {
							stop?.();
							stop = void 0;
							increment(version);
						}
					});
				};
			});
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/dom/blocks/boundary.js
/** @import { Effect, Source, TemplateNode, } from '#client' */
/**
* @typedef {{
* 	 onerror?: ((error: unknown, reset: () => void) => void) | null;
*   failed?: ((anchor: Node, error: () => unknown, reset: () => () => void) => void) | null;
*   pending?: ((anchor: Node) => void) | null;
* }} BoundaryProps
*/
var flags = EFFECT_TRANSPARENT | EFFECT_PRESERVED;
/**
* @param {TemplateNode} node
* @param {BoundaryProps} props
* @param {((anchor: Node) => void)} children
* @param {((error: unknown) => unknown) | undefined} [transform_error]
* @returns {void}
*/
function boundary(node, props, children, transform_error) {
	new Boundary(node, props, children, transform_error);
}
var _anchor = /* @__PURE__ */ new WeakMap();
var _hydrate_open = /* @__PURE__ */ new WeakMap();
var _props = /* @__PURE__ */ new WeakMap();
var _children = /* @__PURE__ */ new WeakMap();
var _effect = /* @__PURE__ */ new WeakMap();
var _main_effect = /* @__PURE__ */ new WeakMap();
var _pending_effect = /* @__PURE__ */ new WeakMap();
var _failed_effect = /* @__PURE__ */ new WeakMap();
var _offscreen_fragment = /* @__PURE__ */ new WeakMap();
var _local_pending_count = /* @__PURE__ */ new WeakMap();
var _pending_count = /* @__PURE__ */ new WeakMap();
var _pending_count_update_queued = /* @__PURE__ */ new WeakMap();
var _dirty_effects = /* @__PURE__ */ new WeakMap();
var _maybe_dirty_effects = /* @__PURE__ */ new WeakMap();
var _effect_pending = /* @__PURE__ */ new WeakMap();
var _effect_pending_subscriber = /* @__PURE__ */ new WeakMap();
var _Boundary_brand = /* @__PURE__ */ new WeakSet();
var Boundary = class {
	/**
	* @param {TemplateNode} node
	* @param {BoundaryProps} props
	* @param {((anchor: Node) => void)} children
	* @param {((error: unknown) => unknown) | undefined} [transform_error]
	*/
	constructor(node, props, children, transform_error) {
		_classPrivateMethodInitSpec(this, _Boundary_brand);
		_defineProperty(
			this,
			/** @type {Boundary | null} */
			"parent",
			void 0
		);
		_defineProperty(this, "is_pending", false);
		_defineProperty(
			this,
			/**
			* API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
			* Inherited from parent boundary, or defaults to identity.
			* @type {(error: unknown) => unknown}
			*/
			"transform_error",
			void 0
		);
		_classPrivateFieldInitSpec(this, _anchor, void 0);
		_classPrivateFieldInitSpec(this, _hydrate_open, hydrating ? hydrate_node : null);
		_classPrivateFieldInitSpec(this, _props, void 0);
		_classPrivateFieldInitSpec(this, _children, void 0);
		_classPrivateFieldInitSpec(this, _effect, void 0);
		_classPrivateFieldInitSpec(this, _main_effect, null);
		_classPrivateFieldInitSpec(this, _pending_effect, null);
		_classPrivateFieldInitSpec(this, _failed_effect, null);
		_classPrivateFieldInitSpec(this, _offscreen_fragment, null);
		_classPrivateFieldInitSpec(this, _local_pending_count, 0);
		_classPrivateFieldInitSpec(this, _pending_count, 0);
		_classPrivateFieldInitSpec(this, _pending_count_update_queued, false);
		_classPrivateFieldInitSpec(this, _dirty_effects, /* @__PURE__ */ new Set());
		_classPrivateFieldInitSpec(this, _maybe_dirty_effects, /* @__PURE__ */ new Set());
		_classPrivateFieldInitSpec(this, _effect_pending, null);
		_classPrivateFieldInitSpec(this, _effect_pending_subscriber, createSubscriber(() => {
			_classPrivateFieldSet2(_effect_pending, this, source(_classPrivateFieldGet2(_local_pending_count, this)));
			if (dev_fallback_default) tag(_classPrivateFieldGet2(_effect_pending, this), "$effect.pending()");
			return () => {
				_classPrivateFieldSet2(_effect_pending, this, null);
			};
		}));
		_classPrivateFieldSet2(_anchor, this, node);
		_classPrivateFieldSet2(_props, this, props);
		_classPrivateFieldSet2(_children, this, (anchor) => {
			var effect = active_effect;
			effect.b = this;
			effect.f |= 128;
			children(anchor);
		});
		this.parent = active_effect.b;
		this.transform_error = transform_error ?? this.parent?.transform_error ?? ((e) => e);
		_classPrivateFieldSet2(_effect, this, block(() => {
			if (hydrating) {
				const comment = _classPrivateFieldGet2(_hydrate_open, this);
				hydrate_next();
				const server_rendered_pending = comment.data === "[!";
				if (comment.data.startsWith("[?")) {
					const serialized_error = JSON.parse(comment.data.slice(2));
					_assertClassBrand(_Boundary_brand, this, _hydrate_failed_content).call(this, serialized_error);
				} else if (server_rendered_pending) _assertClassBrand(_Boundary_brand, this, _hydrate_pending_content).call(this);
				else _assertClassBrand(_Boundary_brand, this, _hydrate_resolved_content).call(this);
			} else _assertClassBrand(_Boundary_brand, this, _render).call(this);
		}, flags));
		if (hydrating) _classPrivateFieldSet2(_anchor, this, hydrate_node);
	}
	/**
	* Defer an effect inside a pending boundary until the boundary resolves
	* @param {Effect} effect
	*/
	defer_effect(effect) {
		defer_effect(effect, _classPrivateFieldGet2(_dirty_effects, this), _classPrivateFieldGet2(_maybe_dirty_effects, this));
	}
	/**
	* Returns `false` if the effect exists inside a boundary whose pending snippet is shown
	* @returns {boolean}
	*/
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!_classPrivateFieldGet2(_props, this).pending;
	}
	/**
	* Update the source that powers `$effect.pending()` inside this boundary,
	* and controls when the current `pending` snippet (if any) is removed.
	* Do not call from inside the class
	* @param {1 | -1} d
	* @param {Batch} batch
	*/
	update_pending_count(d, batch) {
		_assertClassBrand(_Boundary_brand, this, _update_pending_count).call(this, d, batch);
		_classPrivateFieldSet2(_local_pending_count, this, _classPrivateFieldGet2(_local_pending_count, this) + d);
		if (!_classPrivateFieldGet2(_effect_pending, this) || _classPrivateFieldGet2(_pending_count_update_queued, this)) return;
		_classPrivateFieldSet2(_pending_count_update_queued, this, true);
		queue_micro_task(() => {
			_classPrivateFieldSet2(_pending_count_update_queued, this, false);
			if (_classPrivateFieldGet2(_effect_pending, this)) internal_set(_classPrivateFieldGet2(_effect_pending, this), _classPrivateFieldGet2(_local_pending_count, this));
		});
	}
	get_effect_pending() {
		_classPrivateFieldGet2(_effect_pending_subscriber, this).call(this);
		return get$8(_classPrivateFieldGet2(_effect_pending, this));
	}
	/** @param {unknown} error */
	error(error) {
		if (!_classPrivateFieldGet2(_props, this).onerror && !_classPrivateFieldGet2(_props, this).failed) throw error;
		if (current_batch?.is_fork) {
			if (_classPrivateFieldGet2(_main_effect, this)) current_batch.skip_effect(_classPrivateFieldGet2(_main_effect, this));
			if (_classPrivateFieldGet2(_pending_effect, this)) current_batch.skip_effect(_classPrivateFieldGet2(_pending_effect, this));
			if (_classPrivateFieldGet2(_failed_effect, this)) current_batch.skip_effect(_classPrivateFieldGet2(_failed_effect, this));
			current_batch.on_fork_commit(() => {
				_assertClassBrand(_Boundary_brand, this, _handle_error).call(this, error);
			});
		} else _assertClassBrand(_Boundary_brand, this, _handle_error).call(this, error);
	}
};
function _hydrate_resolved_content() {
	try {
		_classPrivateFieldSet2(_main_effect, this, branch(() => _classPrivateFieldGet2(_children, this).call(this, _classPrivateFieldGet2(_anchor, this))));
	} catch (error) {
		this.error(error);
	}
}
/**
* @param {unknown} error The deserialized error from the server's hydration comment
*/
function _hydrate_failed_content(error) {
	const failed = _classPrivateFieldGet2(_props, this).failed;
	if (!failed) return;
	_classPrivateFieldSet2(_failed_effect, this, branch(() => {
		failed(_classPrivateFieldGet2(_anchor, this), () => error, () => () => {});
	}));
}
function _hydrate_pending_content() {
	const pending = _classPrivateFieldGet2(_props, this).pending;
	if (!pending) return;
	this.is_pending = true;
	_classPrivateFieldSet2(_pending_effect, this, branch(() => pending(_classPrivateFieldGet2(_anchor, this))));
	queue_micro_task(() => {
		var fragment = _classPrivateFieldSet2(_offscreen_fragment, this, document.createDocumentFragment());
		var anchor = create_text();
		fragment.append(anchor);
		_classPrivateFieldSet2(_main_effect, this, _assertClassBrand(_Boundary_brand, this, _run).call(this, () => {
			return branch(() => _classPrivateFieldGet2(_children, this).call(this, anchor));
		}));
		if (_classPrivateFieldGet2(_pending_count, this) === 0) {
			_classPrivateFieldGet2(_anchor, this).before(fragment);
			_classPrivateFieldSet2(_offscreen_fragment, this, null);
			pause_effect(_classPrivateFieldGet2(_pending_effect, this), () => {
				_classPrivateFieldSet2(_pending_effect, this, null);
			});
			_assertClassBrand(_Boundary_brand, this, _resolve).call(this, current_batch);
		}
	});
}
function _render() {
	try {
		this.is_pending = this.has_pending_snippet();
		_classPrivateFieldSet2(_pending_count, this, 0);
		_classPrivateFieldSet2(_local_pending_count, this, 0);
		_classPrivateFieldSet2(_main_effect, this, branch(() => {
			_classPrivateFieldGet2(_children, this).call(this, _classPrivateFieldGet2(_anchor, this));
		}));
		if (_classPrivateFieldGet2(_pending_count, this) > 0) {
			var fragment = _classPrivateFieldSet2(_offscreen_fragment, this, document.createDocumentFragment());
			move_effect(_classPrivateFieldGet2(_main_effect, this), fragment);
			const pending = _classPrivateFieldGet2(_props, this).pending;
			_classPrivateFieldSet2(_pending_effect, this, branch(() => pending(_classPrivateFieldGet2(_anchor, this))));
		} else _assertClassBrand(_Boundary_brand, this, _resolve).call(this, current_batch);
	} catch (error) {
		this.error(error);
	}
}
/**
* @param {Batch} batch
*/
function _resolve(batch) {
	this.is_pending = false;
	batch.transfer_effects(_classPrivateFieldGet2(_dirty_effects, this), _classPrivateFieldGet2(_maybe_dirty_effects, this));
}
/**
* @template T
* @param {() => T} fn
*/
function _run(fn) {
	var previous_effect = active_effect;
	var previous_reaction = active_reaction;
	var previous_ctx = component_context;
	set_active_effect(_classPrivateFieldGet2(_effect, this));
	set_active_reaction(_classPrivateFieldGet2(_effect, this));
	set_component_context(_classPrivateFieldGet2(_effect, this).ctx);
	try {
		Batch.ensure();
		return fn();
	} catch (e) {
		handle_error(e);
		return null;
	} finally {
		set_active_effect(previous_effect);
		set_active_reaction(previous_reaction);
		set_component_context(previous_ctx);
	}
}
/**
* Updates the pending count associated with the currently visible pending snippet,
* if any, such that we can replace the snippet with content once work is done
* @param {1 | -1} d
* @param {Batch} batch
*/
function _update_pending_count(d, batch) {
	if (!this.has_pending_snippet()) {
		if (this.parent) {
			var _this$parent;
			_assertClassBrand(_Boundary_brand, _this$parent = this.parent, _update_pending_count).call(_this$parent, d, batch);
		}
		return;
	}
	_classPrivateFieldSet2(_pending_count, this, _classPrivateFieldGet2(_pending_count, this) + d);
	if (_classPrivateFieldGet2(_pending_count, this) === 0) {
		_assertClassBrand(_Boundary_brand, this, _resolve).call(this, batch);
		if (_classPrivateFieldGet2(_pending_effect, this)) pause_effect(_classPrivateFieldGet2(_pending_effect, this), () => {
			_classPrivateFieldSet2(_pending_effect, this, null);
		});
		if (_classPrivateFieldGet2(_offscreen_fragment, this)) {
			_classPrivateFieldGet2(_anchor, this).before(_classPrivateFieldGet2(_offscreen_fragment, this));
			_classPrivateFieldSet2(_offscreen_fragment, this, null);
		}
	}
}
/**
* @param {unknown} error
*/
function _handle_error(error) {
	if (_classPrivateFieldGet2(_main_effect, this)) {
		destroy_effect(_classPrivateFieldGet2(_main_effect, this));
		_classPrivateFieldSet2(_main_effect, this, null);
	}
	if (_classPrivateFieldGet2(_pending_effect, this)) {
		destroy_effect(_classPrivateFieldGet2(_pending_effect, this));
		_classPrivateFieldSet2(_pending_effect, this, null);
	}
	if (_classPrivateFieldGet2(_failed_effect, this)) {
		destroy_effect(_classPrivateFieldGet2(_failed_effect, this));
		_classPrivateFieldSet2(_failed_effect, this, null);
	}
	if (hydrating) {
		set_hydrate_node(_classPrivateFieldGet2(_hydrate_open, this));
		next();
		set_hydrate_node(skip_nodes());
	}
	var onerror = _classPrivateFieldGet2(_props, this).onerror;
	let failed = _classPrivateFieldGet2(_props, this).failed;
	var did_reset = false;
	var calling_on_error = false;
	const reset = () => {
		if (did_reset) {
			svelte_boundary_reset_noop();
			return;
		}
		did_reset = true;
		if (calling_on_error) svelte_boundary_reset_onerror();
		if (_classPrivateFieldGet2(_failed_effect, this) !== null) pause_effect(_classPrivateFieldGet2(_failed_effect, this), () => {
			_classPrivateFieldSet2(_failed_effect, this, null);
		});
		_assertClassBrand(_Boundary_brand, this, _run).call(this, () => {
			_assertClassBrand(_Boundary_brand, this, _render).call(this);
		});
	};
	/** @param {unknown} transformed_error */
	const handle_error_result = (transformed_error) => {
		try {
			calling_on_error = true;
			onerror?.(transformed_error, reset);
			calling_on_error = false;
		} catch (error) {
			invoke_error_boundary(error, _classPrivateFieldGet2(_effect, this) && _classPrivateFieldGet2(_effect, this).parent);
		}
		if (failed) _classPrivateFieldSet2(_failed_effect, this, _assertClassBrand(_Boundary_brand, this, _run).call(this, () => {
			try {
				return branch(() => {
					var effect = active_effect;
					effect.b = this;
					effect.f |= 128;
					failed(_classPrivateFieldGet2(_anchor, this), () => transformed_error, () => reset);
				});
			} catch (error) {
				invoke_error_boundary(error, _classPrivateFieldGet2(_effect, this).parent);
				return null;
			}
		}));
	};
	queue_micro_task(() => {
		/** @type {unknown} */
		var result;
		try {
			result = this.transform_error(error);
		} catch (e) {
			invoke_error_boundary(e, _classPrivateFieldGet2(_effect, this) && _classPrivateFieldGet2(_effect, this).parent);
			return;
		}
		if (result !== null && typeof result === "object" && typeof result.then === "function")
 /** @type {any} */ result.then(
			handle_error_result,
			/** @param {unknown} e */
			(e) => invoke_error_boundary(e, _classPrivateFieldGet2(_effect, this) && _classPrivateFieldGet2(_effect, this).parent)
		);
		else handle_error_result(result);
	});
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/reactivity/async.js
/** @import { Blocker, Effect, Value } from '#client' */
/**
* @param {Blocker[]} blockers
* @param {Array<() => any>} sync
* @param {Array<() => Promise<any>>} async
* @param {(values: Value[]) => any} fn
*/
function flatten$3(blockers, sync, async, fn) {
	const d = is_runes() ? derived : derived_safe_equal;
	var pending = blockers.filter((b) => !b.settled);
	if (async.length === 0 && pending.length === 0) {
		fn(sync.map(d));
		return;
	}
	var parent = active_effect;
	var restore = capture$1();
	var blocker_promise = pending.length === 1 ? pending[0].promise : pending.length > 1 ? Promise.all(pending.map((b) => b.promise)) : null;
	/** @param {Value[]} values */
	function finish(values) {
		if ((parent.f & 16384) !== 0) return;
		restore();
		try {
			fn(values);
		} catch (error) {
			invoke_error_boundary(error, parent);
		}
		unset_context();
	}
	var decrement_pending = increment_pending();
	if (async.length === 0) {
		/** @type {Promise<any>} */ blocker_promise.then(() => finish(sync.map(d))).finally(decrement_pending);
		return;
	}
	function run() {
		Promise.all(async.map((expression) => /* @__PURE__ */ async_derived(expression))).then((result) => finish([...sync.map(d), ...result])).catch((error) => invoke_error_boundary(error, parent)).finally(decrement_pending);
	}
	if (blocker_promise) blocker_promise.then(() => {
		restore();
		run();
		unset_context();
	});
	else run();
}
/**
* Captures the current effect context so that we can restore it after
* some asynchronous work has happened (so that e.g. `await a + b`
* causes `b` to be registered as a dependency).
*/
function capture$1() {
	var previous_effect = active_effect;
	var previous_reaction = active_reaction;
	var previous_component_context = component_context;
	var previous_batch = current_batch;
	if (dev_fallback_default) var previous_dev_stack = dev_stack;
	return function restore(activate_batch = true) {
		set_active_effect(previous_effect);
		set_active_reaction(previous_reaction);
		set_component_context(previous_component_context);
		if (activate_batch && (previous_effect.f & 16384) === 0) {
			previous_batch?.activate();
			previous_batch?.apply();
		}
		if (dev_fallback_default) {
			set_reactivity_loss_tracker(null);
			set_dev_stack(previous_dev_stack);
		}
	};
}
function unset_context(deactivate_batch = true) {
	set_active_effect(null);
	set_active_reaction(null);
	set_component_context(null);
	if (deactivate_batch) current_batch?.deactivate();
	if (dev_fallback_default) {
		set_reactivity_loss_tracker(null);
		set_dev_stack(null);
	}
}
/**
* @returns {(skip?: boolean) => void}
*/
function increment_pending() {
	var effect = active_effect;
	var boundary = effect.b;
	var batch = current_batch;
	var blocking = boundary.is_rendered();
	boundary.update_pending_count(1, batch);
	batch.increment(blocking, effect);
	return () => {
		boundary.update_pending_count(-1, batch);
		batch.decrement(blocking, effect);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/reactivity/deriveds.js
/** @import { Derived, Effect, Reaction, Source, Value } from '#client' */
/** @import { Batch } from './batch.js'; */
/** @import { Boundary } from '../dom/blocks/boundary.js'; */
/**
* This allows us to track 'reactivity loss' that occurs when signals
* are read after a non-context-restoring `await`. Dev-only
* @type {{ effect: Effect, effect_deps: Set<Value>, warned: boolean } | null}
*/
var reactivity_loss_tracker = null;
/** @param {{ effect: Effect, effect_deps: Set<Value>, warned: boolean } | null} v */
function set_reactivity_loss_tracker(v) {
	reactivity_loss_tracker = v;
}
var recent_async_deriveds = /* @__PURE__ */ new Set();
/**
* @template V
* @param {() => V} fn
* @returns {Derived<V>}
*/
/* @__NO_SIDE_EFFECTS__ */
function derived(fn) {
	var flags = 2 | DIRTY;
	if (active_effect !== null) active_effect.f |= EFFECT_PRESERVED;
	/** @type {Derived<V>} */
	const signal = {
		ctx: component_context,
		deps: null,
		effects: null,
		equals: equals$2,
		f: flags,
		fn,
		reactions: null,
		rv: 0,
		v: UNINITIALIZED,
		wv: 0,
		parent: active_effect,
		ac: null
	};
	if (dev_fallback_default && tracing_mode_flag) signal.created = get_error("created at");
	return signal;
}
var OBSOLETE = Symbol("obsolete");
/**
* @template V
* @param {() => V | Promise<V>} fn
* @param {string} [label]
* @param {string} [location] If provided, print a warning if the value is not read immediately after update
* @returns {Promise<Source<V>>}
*/
/* @__NO_SIDE_EFFECTS__ */
function async_derived(fn, label, location) {
	let parent = active_effect;
	if (parent === null) async_derived_orphan();
	var promise = void 0;
	var signal = source(UNINITIALIZED);
	if (dev_fallback_default) signal.label = label ?? fn.toString();
	var should_suspend = !active_reaction;
	/** @type {Set<ReturnType<typeof deferred<V>>>} */
	var deferreds = /* @__PURE__ */ new Set();
	async_effect(() => {
		var effect = active_effect;
		if (dev_fallback_default) reactivity_loss_tracker = {
			effect,
			effect_deps: /* @__PURE__ */ new Set(),
			warned: false
		};
		/** @type {ReturnType<typeof deferred<V>>} */
		var d = deferred();
		promise = d.promise;
		try {
			Promise.resolve(fn()).then(d.resolve, (e) => {
				if (e !== STALE_REACTION) d.reject(e);
			}).finally(unset_context);
		} catch (error) {
			d.reject(error);
			unset_context();
		}
		if (dev_fallback_default) {
			if (reactivity_loss_tracker) {
				if (effect.deps !== null) for (let i = 0; i < skipped_deps; i += 1) reactivity_loss_tracker.effect_deps.add(effect.deps[i]);
				if (new_deps !== null) for (let i = 0; i < new_deps.length; i += 1) reactivity_loss_tracker.effect_deps.add(new_deps[i]);
			}
			reactivity_loss_tracker = null;
		}
		var batch = current_batch;
		if (should_suspend) {
			if ((effect.f & 32768) !== 0) var decrement_pending = increment_pending();
			if (parent.b.is_rendered()) batch.async_deriveds.get(effect)?.reject(OBSOLETE);
			else for (const d of deferreds.values()) d.reject(OBSOLETE);
			deferreds.add(d);
			batch.async_deriveds.set(effect, d);
		}
		/**
		* @param {any} value
		* @param {unknown} error
		*/
		const handler = (value, error = void 0) => {
			if (dev_fallback_default) reactivity_loss_tracker = null;
			decrement_pending?.();
			deferreds.delete(d);
			if (error === OBSOLETE) return;
			batch.activate();
			if (error) {
				signal.f |= ERROR_VALUE;
				internal_set(signal, error);
			} else {
				if ((signal.f & 8388608) !== 0) signal.f ^= ERROR_VALUE;
				internal_set(signal, value);
				if (dev_fallback_default && location !== void 0) {
					recent_async_deriveds.add(signal);
					setTimeout(() => {
						if (recent_async_deriveds.has(signal) && (effect.f & 16384) === 0) {
							await_waterfall(signal.label, location);
							recent_async_deriveds.delete(signal);
						}
					});
				}
			}
			batch.deactivate();
		};
		d.promise.then(handler, (e) => handler(null, e || "unknown"));
	});
	teardown(() => {
		for (const d of deferreds) d.reject(OBSOLETE);
	});
	if (dev_fallback_default) signal.f |= ASYNC;
	return new Promise((fulfil) => {
		/** @param {Promise<V>} p */
		function next(p) {
			function go() {
				if (p === promise) fulfil(signal);
				else next(promise);
			}
			p.then(go, go);
		}
		next(promise);
	});
}
/**
* @template V
* @param {() => V} fn
* @returns {Derived<V>}
*/
/* @__NO_SIDE_EFFECTS__ */
function user_derived(fn) {
	const d = /* @__PURE__ */ derived(fn);
	if (!async_mode_flag) push_reaction_value(d);
	return d;
}
/**
* @template V
* @param {() => V} fn
* @returns {Derived<V>}
*/
/* @__NO_SIDE_EFFECTS__ */
function derived_safe_equal(fn) {
	const signal = /* @__PURE__ */ derived(fn);
	signal.equals = safe_equals;
	return signal;
}
/**
* @param {Derived} derived
* @returns {void}
*/
function destroy_derived_effects(derived) {
	var effects = derived.effects;
	if (effects !== null) {
		derived.effects = null;
		for (var i = 0; i < effects.length; i += 1) destroy_effect(effects[i]);
	}
}
/**
* The currently updating deriveds, used to detect infinite recursion
* in dev mode and provide a nicer error than 'too much recursion'
* @type {Derived[]}
*/
var stack = [];
/**
* @template T
* @param {Derived} derived
* @returns {T}
*/
function execute_derived(derived) {
	var value;
	var prev_active_effect = active_effect;
	var parent = derived.parent;
	if (!is_destroying_effect && parent !== null && (parent.f & 24576) !== 0) {
		derived_inert();
		return derived.v;
	}
	set_active_effect(parent);
	if (dev_fallback_default) {
		let prev_eager_effects = eager_effects;
		set_eager_effects(/* @__PURE__ */ new Set());
		try {
			if (includes.call(stack, derived)) derived_references_self();
			stack.push(derived);
			derived.f &= ~WAS_MARKED;
			destroy_derived_effects(derived);
			value = update_reaction(derived);
		} finally {
			set_active_effect(prev_active_effect);
			set_eager_effects(prev_eager_effects);
			stack.pop();
		}
	} else try {
		derived.f &= ~WAS_MARKED;
		destroy_derived_effects(derived);
		value = update_reaction(derived);
	} finally {
		set_active_effect(prev_active_effect);
	}
	return value;
}
/**
* @param {Derived} derived
* @returns {void}
*/
function update_derived(derived) {
	var value = execute_derived(derived);
	if (!derived.equals(value)) {
		derived.wv = increment_write_version();
		if (!current_batch?.is_fork || derived.deps === null) {
			if (current_batch !== null) {
				current_batch.capture(derived, value, true);
				previous_batch?.capture(derived, value, true);
			} else derived.v = value;
			if (derived.deps === null) {
				set_signal_status(derived, CLEAN);
				return;
			}
		}
	}
	if (is_destroying_effect) return;
	if (batch_values !== null) {
		if (effect_tracking() || current_batch?.is_fork) batch_values.set(derived, value);
	} else update_derived_status(derived);
}
/**
* @param {Derived} derived
*/
function freeze_derived_effects(derived) {
	if (derived.effects === null) return;
	for (const e of derived.effects) if (e.teardown || e.ac) {
		e.teardown?.();
		e.ac?.abort(STALE_REACTION);
		e.teardown = noop;
		e.ac = null;
		remove_reactions(e, 0);
		destroy_effect_children(e);
	}
}
/**
* @param {Derived} derived
*/
function unfreeze_derived_effects(derived) {
	if (derived.effects === null) return;
	for (const e of derived.effects) if (e.teardown) update_effect(e);
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/reactivity/sources.js
/** @import { Derived, Effect, Source, Value } from '#client' */
/** @type {Set<Effect>} */
var eager_effects = /* @__PURE__ */ new Set();
/** @type {Map<Source, any>} */
var old_values = /* @__PURE__ */ new Map();
/**
* @param {Set<any>} v
*/
function set_eager_effects(v) {
	eager_effects = v;
}
var eager_effects_deferred = false;
function set_eager_effects_deferred() {
	eager_effects_deferred = true;
}
/**
* @template V
* @param {V} v
* @param {Error | null} [stack]
* @returns {Source<V>}
*/
function source(v, stack) {
	/** @type {Value} */
	var signal = {
		f: 0,
		v,
		reactions: null,
		equals: equals$2,
		rv: 0,
		wv: 0
	};
	if (dev_fallback_default && tracing_mode_flag) {
		signal.created = stack ?? get_error("created at");
		signal.updated = null;
		signal.set_during_effect = false;
		signal.trace = null;
	}
	return signal;
}
/**
* @template V
* @param {V} v
* @param {Error | null} [stack]
*/
/* @__NO_SIDE_EFFECTS__ */
function state(v, stack) {
	const s = source(v, stack);
	push_reaction_value(s);
	return s;
}
/**
* @template V
* @param {V} initial_value
* @param {boolean} [immutable]
* @returns {Source<V>}
*/
/* @__NO_SIDE_EFFECTS__ */
function mutable_source(initial_value, immutable = false, trackable = true) {
	const s = source(initial_value);
	if (!immutable) s.equals = safe_equals;
	if (legacy_mode_flag && trackable && component_context !== null && component_context.l !== null) {
		var _component_context$l;
		((_component_context$l = component_context.l).s ?? (_component_context$l.s = [])).push(s);
	}
	return s;
}
/**
* @template V
* @param {Source<V>} source
* @param {V} value
* @param {boolean} [should_proxy]
* @returns {V}
*/
function set$4(source, value, should_proxy = false) {
	if (active_reaction !== null && (!untracking || (active_reaction.f & 131072) !== 0) && is_runes() && (active_reaction.f & 4325394) !== 0 && (current_sources === null || !includes.call(current_sources, source))) state_unsafe_mutation();
	let new_value = should_proxy ? proxy(value) : value;
	if (dev_fallback_default) tag_proxy(new_value, source.label);
	return internal_set(source, new_value, legacy_updates);
}
/**
* @template V
* @param {Source<V>} source
* @param {V} value
* @param {Effect[] | null} [updated_during_traversal]
* @returns {V}
*/
function internal_set(source, value, updated_during_traversal = null) {
	if (!source.equals(value)) {
		old_values.set(source, is_destroying_effect ? value : source.v);
		var batch = Batch.ensure();
		batch.capture(source, value);
		if (dev_fallback_default) {
			if (tracing_mode_flag || active_effect !== null) {
				source.updated ?? (source.updated = /* @__PURE__ */ new Map());
				const count = (source.updated.get("")?.count ?? 0) + 1;
				source.updated.set("", {
					error: null,
					count
				});
				if (tracing_mode_flag || count > 5) {
					const error = get_error("updated at");
					if (error !== null) {
						let entry = source.updated.get(error.stack);
						if (!entry) {
							entry = {
								error,
								count: 0
							};
							source.updated.set(error.stack, entry);
						}
						entry.count++;
					}
				}
			}
			if (active_effect !== null) source.set_during_effect = true;
		}
		if ((source.f & 2) !== 0) {
			const derived = source;
			if ((source.f & 2048) !== 0) execute_derived(derived);
			if (batch_values === null) update_derived_status(derived);
		}
		source.wv = increment_write_version();
		mark_reactions(source, DIRTY, updated_during_traversal);
		if (is_runes() && active_effect !== null && (active_effect.f & 1024) !== 0 && (active_effect.f & 96) === 0) if (untracked_writes === null) set_untracked_writes([source]);
		else untracked_writes.push(source);
		if (!batch.is_fork && eager_effects.size > 0 && !eager_effects_deferred) flush_eager_effects();
	}
	return value;
}
function flush_eager_effects() {
	eager_effects_deferred = false;
	for (const effect of eager_effects) {
		if ((effect.f & 1024) !== 0) set_signal_status(effect, MAYBE_DIRTY);
		let dirty;
		try {
			dirty = is_dirty(effect);
		} catch {
			dirty = true;
		}
		if (dirty) update_effect(effect);
	}
	eager_effects.clear();
}
/**
* Silently (without using `get`) increment a source
* @param {Source<number>} source
*/
function increment(source) {
	set$4(source, source.v + 1);
}
/**
* @param {Value} signal
* @param {number} status should be DIRTY or MAYBE_DIRTY
* @param {Effect[] | null} updated_during_traversal
* @returns {void}
*/
function mark_reactions(signal, status, updated_during_traversal) {
	var reactions = signal.reactions;
	if (reactions === null) return;
	var runes = is_runes();
	var length = reactions.length;
	for (var i = 0; i < length; i++) {
		var reaction = reactions[i];
		var flags = reaction.f;
		if (!runes && reaction === active_effect) continue;
		var not_dirty = (flags & DIRTY) === 0;
		if (not_dirty) set_signal_status(reaction, status);
		if ((flags & 131072) !== 0) eager_effects.add(reaction);
		else if ((flags & 2) !== 0) {
			var derived = reaction;
			batch_values?.delete(derived);
			if ((flags & 65536) === 0) {
				if (flags & 512 && (active_effect === null || (active_effect.f & 2097152) === 0)) reaction.f |= WAS_MARKED;
				mark_reactions(derived, MAYBE_DIRTY, updated_during_traversal);
			}
		} else if (not_dirty) {
			var effect = reaction;
			if ((flags & 16) !== 0 && eager_block_effects !== null) eager_block_effects.add(effect);
			if (updated_during_traversal !== null) updated_during_traversal.push(effect);
			else schedule_effect(effect);
		}
	}
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/proxy.js
/** @import { Source } from '#client' */
var regex_is_valid_identifier = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
/**
* @template T
* @param {T} value
* @returns {T}
*/
function proxy(value) {
	if (typeof value !== "object" || value === null || STATE_SYMBOL in value) return value;
	const prototype = get_prototype_of(value);
	if (prototype !== object_prototype && prototype !== array_prototype) return value;
	/** @type {Map<any, Source<any>>} */
	var sources = /* @__PURE__ */ new Map();
	var is_proxied_array = is_array(value);
	var version = /* @__PURE__ */ state(0);
	var stack = dev_fallback_default && tracing_mode_flag ? get_error("created at") : null;
	var parent_version = update_version;
	/**
	* Executes the proxy in the context of the reaction it was originally created in, if any
	* @template T
	* @param {() => T} fn
	*/
	var with_parent = (fn) => {
		if (update_version === parent_version) return fn();
		var reaction = active_reaction;
		var version = update_version;
		set_active_reaction(null);
		set_update_version(parent_version);
		var result = fn();
		set_active_reaction(reaction);
		set_update_version(version);
		return result;
	};
	if (is_proxied_array) {
		sources.set("length", /* @__PURE__ */ state(
			/** @type {any[]} */
			value.length,
			stack
		));
		if (dev_fallback_default) value = inspectable_array(value);
	}
	/** Used in dev for $inspect.trace() */
	var path = "";
	let updating = false;
	/** @param {string} new_path */
	function update_path(new_path) {
		if (updating) return;
		updating = true;
		path = new_path;
		tag(version, `${path} version`);
		for (const [prop, source] of sources) tag(source, get_label(path, prop));
		updating = false;
	}
	return new Proxy(value, {
		defineProperty(_, prop, descriptor) {
			if (!("value" in descriptor) || descriptor.configurable === false || descriptor.enumerable === false || descriptor.writable === false) state_descriptors_fixed();
			var s = sources.get(prop);
			if (s === void 0) with_parent(() => {
				var s = /* @__PURE__ */ state(descriptor.value, stack);
				sources.set(prop, s);
				if (dev_fallback_default && typeof prop === "string") tag(s, get_label(path, prop));
				return s;
			});
			else set$4(s, descriptor.value, true);
			return true;
		},
		deleteProperty(target, prop) {
			var s = sources.get(prop);
			if (s === void 0) {
				if (prop in target) {
					const s = with_parent(() => /* @__PURE__ */ state(UNINITIALIZED, stack));
					sources.set(prop, s);
					increment(version);
					if (dev_fallback_default) tag(s, get_label(path, prop));
				}
			} else {
				set$4(s, UNINITIALIZED);
				increment(version);
			}
			return true;
		},
		get(target, prop, receiver) {
			if (prop === STATE_SYMBOL) return value;
			if (dev_fallback_default && prop === PROXY_PATH_SYMBOL) return update_path;
			var s = sources.get(prop);
			var exists = prop in target;
			if (s === void 0 && (!exists || get_descriptor(target, prop)?.writable)) {
				s = with_parent(() => {
					var s = /* @__PURE__ */ state(proxy(exists ? target[prop] : UNINITIALIZED), stack);
					if (dev_fallback_default) tag(s, get_label(path, prop));
					return s;
				});
				sources.set(prop, s);
			}
			if (s !== void 0) {
				var v = get$8(s);
				return v === UNINITIALIZED ? void 0 : v;
			}
			return Reflect.get(target, prop, receiver);
		},
		getOwnPropertyDescriptor(target, prop) {
			var descriptor = Reflect.getOwnPropertyDescriptor(target, prop);
			if (descriptor && "value" in descriptor) {
				var s = sources.get(prop);
				if (s) descriptor.value = get$8(s);
			} else if (descriptor === void 0) {
				var source = sources.get(prop);
				var value = source?.v;
				if (source !== void 0 && value !== UNINITIALIZED) return {
					enumerable: true,
					configurable: true,
					value,
					writable: true
				};
			}
			return descriptor;
		},
		has(target, prop) {
			if (prop === STATE_SYMBOL) return true;
			var s = sources.get(prop);
			var has = s !== void 0 && s.v !== UNINITIALIZED || Reflect.has(target, prop);
			if (s !== void 0 || active_effect !== null && (!has || get_descriptor(target, prop)?.writable)) {
				if (s === void 0) {
					s = with_parent(() => {
						var s = /* @__PURE__ */ state(has ? proxy(target[prop]) : UNINITIALIZED, stack);
						if (dev_fallback_default) tag(s, get_label(path, prop));
						return s;
					});
					sources.set(prop, s);
				}
				if (get$8(s) === UNINITIALIZED) return false;
			}
			return has;
		},
		set(target, prop, value, receiver) {
			var s = sources.get(prop);
			var has = prop in target;
			if (is_proxied_array && prop === "length") for (var i = value; i < s.v; i += 1) {
				var other_s = sources.get(i + "");
				if (other_s !== void 0) set$4(other_s, UNINITIALIZED);
				else if (i in target) {
					other_s = with_parent(() => /* @__PURE__ */ state(UNINITIALIZED, stack));
					sources.set(i + "", other_s);
					if (dev_fallback_default) tag(other_s, get_label(path, i));
				}
			}
			if (s === void 0) {
				if (!has || get_descriptor(target, prop)?.writable) {
					s = with_parent(() => /* @__PURE__ */ state(void 0, stack));
					if (dev_fallback_default) tag(s, get_label(path, prop));
					set$4(s, proxy(value));
					sources.set(prop, s);
				}
			} else {
				has = s.v !== UNINITIALIZED;
				var p = with_parent(() => proxy(value));
				set$4(s, p);
			}
			var descriptor = Reflect.getOwnPropertyDescriptor(target, prop);
			if (descriptor?.set) descriptor.set.call(receiver, value);
			if (!has) {
				if (is_proxied_array && typeof prop === "string") {
					var ls = sources.get("length");
					var n = Number(prop);
					if (Number.isInteger(n) && n >= ls.v) set$4(ls, n + 1);
				}
				increment(version);
			}
			return true;
		},
		ownKeys(target) {
			get$8(version);
			var own_keys = Reflect.ownKeys(target).filter((key) => {
				var source = sources.get(key);
				return source === void 0 || source.v !== UNINITIALIZED;
			});
			for (var [key, source] of sources) if (source.v !== UNINITIALIZED && !(key in target)) own_keys.push(key);
			return own_keys;
		},
		setPrototypeOf() {
			state_prototype_fixed();
		}
	});
}
/**
* @param {string} path
* @param {string | symbol} prop
*/
function get_label(path, prop) {
	if (typeof prop === "symbol") return `${path}[Symbol(${prop.description ?? ""})]`;
	if (regex_is_valid_identifier.test(prop)) return `${path}.${prop}`;
	return /^\d+$/.test(prop) ? `${path}[${prop}]` : `${path}['${prop}']`;
}
/**
* @param {any} value
*/
function get_proxied_value(value) {
	try {
		if (value !== null && typeof value === "object" && STATE_SYMBOL in value) return value[STATE_SYMBOL];
	} catch {}
	return value;
}
var ARRAY_MUTATING_METHODS = new Set([
	"copyWithin",
	"fill",
	"pop",
	"push",
	"reverse",
	"shift",
	"sort",
	"splice",
	"unshift"
]);
/**
* Wrap array mutating methods so $inspect is triggered only once and
* to prevent logging an array in intermediate state (e.g. with an empty slot)
* @param {any[]} array
*/
function inspectable_array(array) {
	return new Proxy(array, { get(target, prop, receiver) {
		var value = Reflect.get(target, prop, receiver);
		if (!ARRAY_MUTATING_METHODS.has(prop)) return value;
		/**
		* @this {any[]}
		* @param {any[]} args
		*/
		return function(...args) {
			set_eager_effects_deferred();
			var result = value.apply(this, args);
			flush_eager_effects();
			return result;
		};
	} });
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/dev/equality.js
function init_array_prototype_warnings() {
	const array_prototype = Array.prototype;
	const cleanup = Array.__svelte_cleanup;
	if (cleanup) cleanup();
	const { indexOf, lastIndexOf, includes } = array_prototype;
	array_prototype.indexOf = function(item, from_index) {
		const index = indexOf.call(this, item, from_index);
		if (index === -1) {
			for (let i = from_index ?? 0; i < this.length; i += 1) if (get_proxied_value(this[i]) === item) {
				state_proxy_equality_mismatch("array.indexOf(...)");
				break;
			}
		}
		return index;
	};
	array_prototype.lastIndexOf = function(item, from_index) {
		const index = lastIndexOf.call(this, item, from_index ?? this.length - 1);
		if (index === -1) {
			for (let i = 0; i <= (from_index ?? this.length - 1); i += 1) if (get_proxied_value(this[i]) === item) {
				state_proxy_equality_mismatch("array.lastIndexOf(...)");
				break;
			}
		}
		return index;
	};
	array_prototype.includes = function(item, from_index) {
		const has = includes.call(this, item, from_index);
		if (!has) {
			for (let i = 0; i < this.length; i += 1) if (get_proxied_value(this[i]) === item) {
				state_proxy_equality_mismatch("array.includes(...)");
				break;
			}
		}
		return has;
	};
	Array.__svelte_cleanup = () => {
		array_prototype.indexOf = indexOf;
		array_prototype.lastIndexOf = lastIndexOf;
		array_prototype.includes = includes;
	};
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/dom/operations.js
/** @import { Effect, TemplateNode } from '#client' */
/** @type {Window} */
var $window;
/** @type {boolean} */
var is_firefox;
/** @type {() => Node | null} */
var first_child_getter;
/** @type {() => Node | null} */
var next_sibling_getter;
/**
* Initialize these lazily to avoid issues when using the runtime in a server context
* where these globals are not available while avoiding a separate server entry point
*/
function init_operations() {
	if ($window !== void 0) return;
	$window = window;
	is_firefox = /Firefox/.test(navigator.userAgent);
	var element_prototype = Element.prototype;
	var node_prototype = Node.prototype;
	var text_prototype = Text.prototype;
	first_child_getter = get_descriptor(node_prototype, "firstChild").get;
	next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
	if (is_extensible(element_prototype)) {
		/** @type {any} */ element_prototype[CLASS_CACHE] = void 0;
		/** @type {any} */ element_prototype[ATTRIBUTES_CACHE] = null;
		/** @type {any} */ element_prototype[STYLE_CACHE] = void 0;
		element_prototype.__e = void 0;
	}
	if (is_extensible(text_prototype))
 /** @type {any} */ text_prototype[TEXT_CACHE] = void 0;
	if (dev_fallback_default) {
		element_prototype.__svelte_meta = null;
		init_array_prototype_warnings();
	}
}
/**
* @param {string} value
* @returns {Text}
*/
function create_text(value = "") {
	return document.createTextNode(value);
}
/**
* @template {Node} N
* @param {N} node
*/
/* @__NO_SIDE_EFFECTS__ */
function get_first_child(node) {
	return first_child_getter.call(node);
}
/**
* @template {Node} N
* @param {N} node
*/
/* @__NO_SIDE_EFFECTS__ */
function get_next_sibling(node) {
	return next_sibling_getter.call(node);
}
/**
* Don't mark this as side-effect-free, hydration needs to walk all nodes
* @template {Node} N
* @param {N} node
* @param {boolean} is_text
* @returns {TemplateNode | null}
*/
function child(node, is_text) {
	if (!hydrating) return /* @__PURE__ */ get_first_child(node);
	var child = /* @__PURE__ */ get_first_child(hydrate_node);
	if (child === null) child = hydrate_node.appendChild(create_text());
	else if (is_text && child.nodeType !== 3) {
		var text = create_text();
		child?.before(text);
		set_hydrate_node(text);
		return text;
	}
	if (is_text) merge_text_nodes(child);
	set_hydrate_node(child);
	return child;
}
/**
* Don't mark this as side-effect-free, hydration needs to walk all nodes
* @param {TemplateNode} node
* @param {number} count
* @param {boolean} is_text
* @returns {TemplateNode | null}
*/
function sibling(node, count = 1, is_text = false) {
	let next_sibling = hydrating ? hydrate_node : node;
	var last_sibling;
	while (count--) {
		last_sibling = next_sibling;
		next_sibling = /* @__PURE__ */ get_next_sibling(next_sibling);
	}
	if (!hydrating) return next_sibling;
	if (is_text) {
		if (next_sibling?.nodeType !== 3) {
			var text = create_text();
			if (next_sibling === null) last_sibling?.after(text);
			else next_sibling.before(text);
			set_hydrate_node(text);
			return text;
		}
		merge_text_nodes(next_sibling);
	}
	set_hydrate_node(next_sibling);
	return next_sibling;
}
/**
* @template {Node} N
* @param {N} node
* @returns {void}
*/
function clear_text_content(node) {
	node.textContent = "";
}
/**
* Returns `true` if we're updating the current block, for example `condition` in
* an `{#if condition}` block just changed. In this case, the branch should be
* appended (or removed) at the same time as other updates within the
* current `<svelte:boundary>`
*/
function should_defer_append() {
	if (!async_mode_flag) return false;
	if (eager_block_effects !== null) return false;
	return (active_effect.f & REACTION_RAN) !== 0;
}
/**
* @template {keyof HTMLElementTagNameMap | string} T
* @param {T} tag
* @param {string} [namespace]
* @param {string} [is]
* @returns {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element}
*/
function create_element(tag, namespace, is) {
	let options = is ? { is } : void 0;
	return document.createElementNS(namespace ?? "http://www.w3.org/1999/xhtml", tag, options);
}
/**
* Browsers split text nodes larger than 65536 bytes when parsing.
* For hydration to succeed, we need to stitch them back together
* @param {Text} text
*/
function merge_text_nodes(text) {
	if (text.nodeValue.length < 65536) return;
	let next = text.nextSibling;
	while (next !== null && next.nodeType === 3) {
		next.remove();
		/** @type {string} */ text.nodeValue += next.nodeValue;
		next = text.nextSibling;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/dom/elements/misc.js
var listening_to_form_reset = false;
function add_form_reset_listener() {
	if (!listening_to_form_reset) {
		listening_to_form_reset = true;
		document.addEventListener("reset", (evt) => {
			Promise.resolve().then(() => {
				if (!evt.defaultPrevented) for (const e of evt.target.elements)
 /** @type {any} */ e[FORM_RESET_HANDLER]?.();
			});
		}, { capture: true });
	}
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
/**
* @template T
* @param {() => T} fn
*/
function without_reactive_context(fn) {
	var previous_reaction = active_reaction;
	var previous_effect = active_effect;
	set_active_reaction(null);
	set_active_effect(null);
	try {
		return fn();
	} finally {
		set_active_reaction(previous_reaction);
		set_active_effect(previous_effect);
	}
}
/**
* Listen to the given event, and then instantiate a global form reset listener if not already done,
* to notify all bindings when the form is reset
* @param {HTMLElement} element
* @param {string} event
* @param {(is_reset?: true) => void} handler
* @param {(is_reset?: true) => void} [on_reset]
*/
function listen_to_event_and_reset_event(element, event, handler, on_reset = handler) {
	element.addEventListener(event, () => without_reactive_context(handler));
	const prev = element[FORM_RESET_HANDLER];
	if (prev)
 /** @type {any} */ element[FORM_RESET_HANDLER] = () => {
		prev();
		on_reset(true);
	};
	else
 /** @type {any} */ element[FORM_RESET_HANDLER] = () => on_reset(true);
	add_form_reset_listener();
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/reactivity/effects.js
/** @import { Blocker, ComponentContext, ComponentContextLegacy, Derived, Effect, TemplateNode, TransitionManager } from '#client' */
/**
* @param {'$effect' | '$effect.pre' | '$inspect'} rune
*/
function validate_effect(rune) {
	if (active_effect === null) {
		if (active_reaction === null) effect_orphan(rune);
		effect_in_unowned_derived();
	}
	if (is_destroying_effect) effect_in_teardown(rune);
}
/**
* @param {Effect} effect
* @param {Effect} parent_effect
*/
function push_effect(effect, parent_effect) {
	var parent_last = parent_effect.last;
	if (parent_last === null) parent_effect.last = parent_effect.first = effect;
	else {
		parent_last.next = effect;
		effect.prev = parent_last;
		parent_effect.last = effect;
	}
}
/**
* @param {number} type
* @param {null | (() => void | (() => void))} fn
* @returns {Effect}
*/
function create_effect(type, fn) {
	var parent = active_effect;
	if (dev_fallback_default) while (parent !== null && (parent.f & 131072) !== 0) parent = parent.parent;
	if (parent !== null && (parent.f & 8192) !== 0) type |= INERT;
	/** @type {Effect} */
	var effect = {
		ctx: component_context,
		deps: null,
		nodes: null,
		f: type | DIRTY | 512,
		first: null,
		fn,
		last: null,
		next: null,
		parent,
		b: parent && parent.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	if (dev_fallback_default) effect.component_function = dev_current_component_function;
	current_batch?.register_created_effect(effect);
	/** @type {Effect | null} */
	var e = effect;
	if ((type & 4) !== 0) if (collected_effects !== null) collected_effects.push(effect);
	else Batch.ensure().schedule(effect);
	else if (fn !== null) {
		try {
			update_effect(effect);
		} catch (e) {
			destroy_effect(effect);
			throw e;
		}
		if (e.deps === null && e.teardown === null && e.nodes === null && e.first === e.last && (e.f & 524288) === 0) {
			e = e.first;
			if ((type & 16) !== 0 && (type & 65536) !== 0 && e !== null) e.f |= EFFECT_TRANSPARENT;
		}
	}
	if (e !== null) {
		e.parent = parent;
		if (parent !== null) push_effect(e, parent);
		if (active_reaction !== null && (active_reaction.f & 2) !== 0 && (type & 64) === 0) {
			var derived = active_reaction;
			(derived.effects ?? (derived.effects = [])).push(e);
		}
	}
	return effect;
}
/**
* Internal representation of `$effect.tracking()`
* @returns {boolean}
*/
function effect_tracking() {
	return active_reaction !== null && !untracking;
}
/**
* @param {() => void} fn
*/
function teardown(fn) {
	const effect = create_effect(8, null);
	set_signal_status(effect, CLEAN);
	effect.teardown = fn;
	return effect;
}
/**
* Internal representation of `$effect(...)`
* @param {() => void | (() => void)} fn
*/
function user_effect(fn) {
	validate_effect("$effect");
	if (dev_fallback_default) define_property(fn, "name", { value: "$effect" });
	var flags = active_effect.f;
	if (!active_reaction && (flags & 32) !== 0 && (flags & 32768) === 0) {
		var context = component_context;
		(context.e ?? (context.e = [])).push(fn);
	} else return create_user_effect(fn);
}
/**
* @param {() => void | (() => void)} fn
*/
function create_user_effect(fn) {
	return create_effect(4 | USER_EFFECT, fn);
}
/**
* Internal representation of `$effect.root(...)`
* @param {() => void | (() => void)} fn
* @returns {() => void}
*/
function effect_root(fn) {
	Batch.ensure();
	const effect = create_effect(64 | EFFECT_PRESERVED, fn);
	return () => {
		destroy_effect(effect);
	};
}
/**
* An effect root whose children can transition out
* @param {() => void} fn
* @returns {(options?: { outro?: boolean }) => Promise<void>}
*/
function component_root(fn) {
	Batch.ensure();
	const effect = create_effect(64 | EFFECT_PRESERVED, fn);
	return (options = {}) => {
		return new Promise((fulfil) => {
			if (options.outro) pause_effect(effect, () => {
				destroy_effect(effect);
				fulfil(void 0);
			});
			else {
				destroy_effect(effect);
				fulfil(void 0);
			}
		});
	};
}
/**
* @param {() => void | (() => void)} fn
* @returns {Effect}
*/
function effect(fn) {
	return create_effect(4, fn);
}
/**
* @param {() => void | (() => void)} fn
* @returns {Effect}
*/
function async_effect(fn) {
	return create_effect(ASYNC | EFFECT_PRESERVED, fn);
}
/**
* @param {() => void | (() => void)} fn
* @returns {Effect}
*/
function render_effect(fn, flags = 0) {
	return create_effect(8 | flags, fn);
}
/**
* @param {(...expressions: any) => void | (() => void)} fn
* @param {Array<() => any>} sync
* @param {Array<() => Promise<any>>} async
* @param {Blocker[]} blockers
*/
function template_effect(fn, sync = [], async = [], blockers = []) {
	flatten$3(blockers, sync, async, (values) => {
		create_effect(8, () => fn(...values.map(get$8)));
	});
}
/**
* @param {(() => void)} fn
* @param {number} flags
*/
function block(fn, flags = 0) {
	var effect = create_effect(16 | flags, fn);
	if (dev_fallback_default) effect.dev_stack = dev_stack;
	return effect;
}
/**
* @param {(() => void)} fn
*/
function branch(fn) {
	return create_effect(32 | EFFECT_PRESERVED, fn);
}
/**
* @param {Effect} effect
*/
function execute_effect_teardown(effect) {
	var teardown = effect.teardown;
	if (teardown !== null) {
		const previously_destroying_effect = is_destroying_effect;
		const previous_reaction = active_reaction;
		set_is_destroying_effect(true);
		set_active_reaction(null);
		try {
			teardown.call(null);
		} finally {
			set_is_destroying_effect(previously_destroying_effect);
			set_active_reaction(previous_reaction);
		}
	}
}
/**
* @param {Effect} signal
* @param {boolean} remove_dom
* @returns {void}
*/
function destroy_effect_children(signal, remove_dom = false) {
	var effect = signal.first;
	signal.first = signal.last = null;
	while (effect !== null) {
		const controller = effect.ac;
		if (controller !== null) without_reactive_context(() => {
			controller.abort(STALE_REACTION);
		});
		var next = effect.next;
		if ((effect.f & 64) !== 0) effect.parent = null;
		else destroy_effect(effect, remove_dom);
		effect = next;
	}
}
/**
* @param {Effect} signal
* @returns {void}
*/
function destroy_block_effect_children(signal) {
	var effect = signal.first;
	while (effect !== null) {
		var next = effect.next;
		if ((effect.f & 32) === 0) destroy_effect(effect);
		effect = next;
	}
}
/**
* @param {Effect} effect
* @param {boolean} [remove_dom]
* @returns {void}
*/
function destroy_effect(effect, remove_dom = true) {
	var removed = false;
	if ((remove_dom || (effect.f & 262144) !== 0) && effect.nodes !== null && effect.nodes.end !== null) {
		remove_effect_dom(effect.nodes.start, effect.nodes.end);
		removed = true;
	}
	set_signal_status(effect, DESTROYING);
	destroy_effect_children(effect, remove_dom && !removed);
	remove_reactions(effect, 0);
	var transitions = effect.nodes && effect.nodes.t;
	if (transitions !== null) for (const transition of transitions) transition.stop();
	execute_effect_teardown(effect);
	effect.f ^= DESTROYING;
	effect.f |= DESTROYED;
	var parent = effect.parent;
	if (parent !== null && parent.first !== null) unlink_effect(effect);
	if (dev_fallback_default) effect.component_function = null;
	effect.next = effect.prev = effect.teardown = effect.ctx = effect.deps = effect.fn = effect.nodes = effect.ac = effect.b = null;
}
/**
*
* @param {TemplateNode | null} node
* @param {TemplateNode} end
*/
function remove_effect_dom(node, end) {
	while (node !== null) {
		/** @type {TemplateNode | null} */
		var next = node === end ? null : /* @__PURE__ */ get_next_sibling(node);
		node.remove();
		node = next;
	}
}
/**
* Detach an effect from the effect tree, freeing up memory and
* reducing the amount of work that happens on subsequent traversals
* @param {Effect} effect
*/
function unlink_effect(effect) {
	var parent = effect.parent;
	var prev = effect.prev;
	var next = effect.next;
	if (prev !== null) prev.next = next;
	if (next !== null) next.prev = prev;
	if (parent !== null) {
		if (parent.first === effect) parent.first = next;
		if (parent.last === effect) parent.last = prev;
	}
}
/**
* When a block effect is removed, we don't immediately destroy it or yank it
* out of the DOM, because it might have transitions. Instead, we 'pause' it.
* It stays around (in memory, and in the DOM) until outro transitions have
* completed, and if the state change is reversed then we _resume_ it.
* A paused effect does not update, and the DOM subtree becomes inert.
* @param {Effect} effect
* @param {() => void} [callback]
* @param {boolean} [destroy]
*/
function pause_effect(effect, callback, destroy = true) {
	/** @type {TransitionManager[]} */
	var transitions = [];
	pause_children(effect, transitions, true);
	var fn = () => {
		if (destroy) destroy_effect(effect);
		if (callback) callback();
	};
	var remaining = transitions.length;
	if (remaining > 0) {
		var check = () => --remaining || fn();
		for (var transition of transitions) transition.out(check);
	} else fn();
}
/**
* @param {Effect} effect
* @param {TransitionManager[]} transitions
* @param {boolean} local
*/
function pause_children(effect, transitions, local) {
	if ((effect.f & 8192) !== 0) return;
	effect.f ^= INERT;
	var t = effect.nodes && effect.nodes.t;
	if (t !== null) {
		for (const transition of t) if (transition.is_global || local) transitions.push(transition);
	}
	var child = effect.first;
	while (child !== null) {
		var sibling = child.next;
		if ((child.f & 64) === 0) {
			var transparent = (child.f & 65536) !== 0 || (child.f & 32) !== 0 && (effect.f & 16) !== 0;
			pause_children(child, transitions, transparent ? local : false);
		}
		child = sibling;
	}
}
/**
* The opposite of `pause_effect`. We call this if (for example)
* `x` becomes falsy then truthy: `{#if x}...{/if}`
* @param {Effect} effect
*/
function resume_effect(effect) {
	resume_children(effect, true);
}
/**
* @param {Effect} effect
* @param {boolean} local
*/
function resume_children(effect, local) {
	if ((effect.f & 8192) === 0) return;
	effect.f ^= INERT;
	if ((effect.f & 1024) === 0) {
		set_signal_status(effect, DIRTY);
		Batch.ensure().schedule(effect);
	}
	var child = effect.first;
	while (child !== null) {
		var sibling = child.next;
		var transparent = (child.f & 65536) !== 0 || (child.f & 32) !== 0;
		resume_children(child, transparent ? local : false);
		child = sibling;
	}
	var t = effect.nodes && effect.nodes.t;
	if (t !== null) {
		for (const transition of t) if (transition.is_global || local) transition.in();
	}
}
/**
* @param {Effect} effect
* @param {DocumentFragment} fragment
*/
function move_effect(effect, fragment) {
	if (!effect.nodes) return;
	/** @type {TemplateNode | null} */
	var node = effect.nodes.start;
	var end = effect.nodes.end;
	while (node !== null) {
		/** @type {TemplateNode | null} */
		var next = node === end ? null : /* @__PURE__ */ get_next_sibling(node);
		fragment.append(node);
		node = next;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/legacy.js
/**
* @type {Set<Value> | null}
* @deprecated
*/
var captured_signals = null;
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/runtime.js
/** @import { Derived, Effect, Reaction, Source, Value } from '#client' */
var is_updating_effect = false;
var is_destroying_effect = false;
/** @param {boolean} value */
function set_is_destroying_effect(value) {
	is_destroying_effect = value;
}
/** @type {null | Reaction} */
var active_reaction = null;
var untracking = false;
/** @param {null | Reaction} reaction */
function set_active_reaction(reaction) {
	active_reaction = reaction;
}
/** @type {null | Effect} */
var active_effect = null;
/** @param {null | Effect} effect */
function set_active_effect(effect) {
	active_effect = effect;
}
/**
* When sources are created within a reaction, reading and writing
* them within that reaction should not cause a re-run
* @type {null | Source[]}
*/
var current_sources = null;
/** @param {Value} value */
function push_reaction_value(value) {
	if (active_reaction !== null && (!async_mode_flag || (active_reaction.f & 2) !== 0)) if (current_sources === null) current_sources = [value];
	else current_sources.push(value);
}
/**
* The dependencies of the reaction that is currently being executed. In many cases,
* the dependencies are unchanged between runs, and so this will be `null` unless
* and until a new dependency is accessed — we track this via `skipped_deps`
* @type {null | Value[]}
*/
var new_deps = null;
var skipped_deps = 0;
/**
* Tracks writes that the effect it's executed in doesn't listen to yet,
* so that the dependency can be added to the effect later on if it then reads it
* @type {null | Source[]}
*/
var untracked_writes = null;
/** @param {null | Source[]} value */
function set_untracked_writes(value) {
	untracked_writes = value;
}
/**
* @type {number} Used by sources and deriveds for handling updates.
* Version starts from 1 so that unowned deriveds differentiate between a created effect and a run one for tracing
**/
var write_version = 1;
/** @type {number} Used to version each read of a source of derived to avoid duplicating depedencies inside a reaction */
var read_version = 0;
var update_version = read_version;
/** @param {number} value */
function set_update_version(value) {
	update_version = value;
}
function increment_write_version() {
	return ++write_version;
}
/**
* Determines whether a derived or effect is dirty.
* If it is MAYBE_DIRTY, will set the status to CLEAN
* @param {Reaction} reaction
* @returns {boolean}
*/
function is_dirty(reaction) {
	var flags = reaction.f;
	if ((flags & 2048) !== 0) return true;
	if (flags & 2) reaction.f &= ~WAS_MARKED;
	if ((flags & 4096) !== 0) {
		var dependencies = reaction.deps;
		var length = dependencies.length;
		for (var i = 0; i < length; i++) {
			var dependency = dependencies[i];
			if (is_dirty(dependency)) update_derived(dependency);
			if (dependency.wv > reaction.wv) return true;
		}
		if ((flags & 512) !== 0 && batch_values === null) set_signal_status(reaction, CLEAN);
	}
	return false;
}
/**
* @param {Value} signal
* @param {Effect} effect
* @param {boolean} [root]
*/
function schedule_possible_effect_self_invalidation(signal, effect, root = true) {
	var reactions = signal.reactions;
	if (reactions === null) return;
	if (!async_mode_flag && current_sources !== null && includes.call(current_sources, signal)) return;
	for (var i = 0; i < reactions.length; i++) {
		var reaction = reactions[i];
		if ((reaction.f & 2) !== 0) schedule_possible_effect_self_invalidation(reaction, effect, false);
		else if (effect === reaction) {
			if (root) set_signal_status(reaction, DIRTY);
			else if ((reaction.f & 1024) !== 0) set_signal_status(reaction, MAYBE_DIRTY);
			schedule_effect(reaction);
		}
	}
}
/** @param {Reaction} reaction */
function update_reaction(reaction) {
	var previous_deps = new_deps;
	var previous_skipped_deps = skipped_deps;
	var previous_untracked_writes = untracked_writes;
	var previous_reaction = active_reaction;
	var previous_sources = current_sources;
	var previous_component_context = component_context;
	var previous_untracking = untracking;
	var previous_update_version = update_version;
	var flags = reaction.f;
	new_deps = null;
	skipped_deps = 0;
	untracked_writes = null;
	active_reaction = (flags & 96) === 0 ? reaction : null;
	current_sources = null;
	set_component_context(reaction.ctx);
	untracking = false;
	update_version = ++read_version;
	if (reaction.ac !== null) {
		without_reactive_context(() => {
			/** @type {AbortController} */ reaction.ac.abort(STALE_REACTION);
		});
		reaction.ac = null;
	}
	try {
		reaction.f |= REACTION_IS_UPDATING;
		var fn = reaction.fn;
		var result = fn();
		reaction.f |= REACTION_RAN;
		var deps = reaction.deps;
		var is_fork = current_batch?.is_fork;
		if (new_deps !== null) {
			var i;
			if (!is_fork) remove_reactions(reaction, skipped_deps);
			if (deps !== null && skipped_deps > 0) {
				deps.length = skipped_deps + new_deps.length;
				for (i = 0; i < new_deps.length; i++) deps[skipped_deps + i] = new_deps[i];
			} else reaction.deps = deps = new_deps;
			if (effect_tracking() && (reaction.f & 512) !== 0) for (i = skipped_deps; i < deps.length; i++) {
				var _deps$i;
				((_deps$i = deps[i]).reactions ?? (_deps$i.reactions = [])).push(reaction);
			}
		} else if (!is_fork && deps !== null && skipped_deps < deps.length) {
			remove_reactions(reaction, skipped_deps);
			deps.length = skipped_deps;
		}
		if (is_runes() && untracked_writes !== null && !untracking && deps !== null && (reaction.f & 6146) === 0) for (i = 0; i < untracked_writes.length; i++) schedule_possible_effect_self_invalidation(untracked_writes[i], reaction);
		if (previous_reaction !== null && previous_reaction !== reaction) {
			read_version++;
			if (previous_reaction.deps !== null) for (let i = 0; i < previous_skipped_deps; i += 1) previous_reaction.deps[i].rv = read_version;
			if (previous_deps !== null) for (const dep of previous_deps) dep.rv = read_version;
			if (untracked_writes !== null) if (previous_untracked_writes === null) previous_untracked_writes = untracked_writes;
			else previous_untracked_writes.push(...untracked_writes);
		}
		if ((reaction.f & 8388608) !== 0) reaction.f ^= ERROR_VALUE;
		return result;
	} catch (error) {
		return handle_error(error);
	} finally {
		reaction.f ^= REACTION_IS_UPDATING;
		new_deps = previous_deps;
		skipped_deps = previous_skipped_deps;
		untracked_writes = previous_untracked_writes;
		active_reaction = previous_reaction;
		current_sources = previous_sources;
		set_component_context(previous_component_context);
		untracking = previous_untracking;
		update_version = previous_update_version;
	}
}
/**
* @template V
* @param {Reaction} signal
* @param {Value<V>} dependency
* @returns {void}
*/
function remove_reaction(signal, dependency) {
	let reactions = dependency.reactions;
	if (reactions !== null) {
		var index = index_of.call(reactions, signal);
		if (index !== -1) {
			var new_length = reactions.length - 1;
			if (new_length === 0) reactions = dependency.reactions = null;
			else {
				reactions[index] = reactions[new_length];
				reactions.pop();
			}
		}
	}
	if (reactions === null && (dependency.f & 2) !== 0 && (new_deps === null || !includes.call(new_deps, dependency))) {
		var derived = dependency;
		if ((derived.f & 512) !== 0) {
			derived.f ^= 512;
			derived.f &= ~WAS_MARKED;
		}
		if (derived.v !== UNINITIALIZED) update_derived_status(derived);
		freeze_derived_effects(derived);
		remove_reactions(derived, 0);
	}
}
/**
* @param {Reaction} signal
* @param {number} start_index
* @returns {void}
*/
function remove_reactions(signal, start_index) {
	var dependencies = signal.deps;
	if (dependencies === null) return;
	for (var i = start_index; i < dependencies.length; i++) remove_reaction(signal, dependencies[i]);
}
/**
* @param {Effect} effect
* @returns {void}
*/
function update_effect(effect) {
	var flags = effect.f;
	if ((flags & 16384) !== 0) return;
	set_signal_status(effect, CLEAN);
	var previous_effect = active_effect;
	var was_updating_effect = is_updating_effect;
	active_effect = effect;
	is_updating_effect = true;
	if (dev_fallback_default) {
		var previous_component_fn = dev_current_component_function;
		set_dev_current_component_function(effect.component_function);
		var previous_stack = dev_stack;
		set_dev_stack(effect.dev_stack ?? dev_stack);
	}
	try {
		if ((flags & 16777232) !== 0) destroy_block_effect_children(effect);
		else destroy_effect_children(effect);
		execute_effect_teardown(effect);
		var teardown = update_reaction(effect);
		effect.teardown = typeof teardown === "function" ? teardown : null;
		effect.wv = write_version;
		if (dev_fallback_default && tracing_mode_flag && (effect.f & 2048) !== 0 && effect.deps !== null) {
			for (var dep of effect.deps) if (dep.set_during_effect) {
				dep.wv = increment_write_version();
				dep.set_during_effect = false;
			}
		}
	} finally {
		is_updating_effect = was_updating_effect;
		active_effect = previous_effect;
		if (dev_fallback_default) {
			set_dev_current_component_function(previous_component_fn);
			set_dev_stack(previous_stack);
		}
	}
}
/**
* Returns a promise that resolves once any pending state changes have been applied.
* @returns {Promise<void>}
*/
async function tick() {
	if (async_mode_flag) return new Promise((f) => {
		requestAnimationFrame(() => f());
		setTimeout(() => f());
	});
	await Promise.resolve();
	flushSync();
}
/**
* @template V
* @param {Value<V>} signal
* @returns {V}
*/
function get$8(signal) {
	var is_derived = (signal.f & 2) !== 0;
	captured_signals?.add(signal);
	if (active_reaction !== null && !untracking) {
		if (!(active_effect !== null && (active_effect.f & 16384) !== 0) && (current_sources === null || !includes.call(current_sources, signal))) {
			var deps = active_reaction.deps;
			if ((active_reaction.f & 2097152) !== 0) {
				if (signal.rv < read_version) {
					signal.rv = read_version;
					if (new_deps === null && deps !== null && deps[skipped_deps] === signal) skipped_deps++;
					else if (new_deps === null) new_deps = [signal];
					else new_deps.push(signal);
				}
			} else {
				var _active_reaction;
				((_active_reaction = active_reaction).deps ?? (_active_reaction.deps = [])).push(signal);
				var reactions = signal.reactions;
				if (reactions === null) signal.reactions = [active_reaction];
				else if (!includes.call(reactions, active_reaction)) reactions.push(active_reaction);
			}
		}
	}
	if (dev_fallback_default) {
		if (!untracking && reactivity_loss_tracker && !reactivity_loss_tracker.warned && (reactivity_loss_tracker.effect.f & 2097152) === 0 && !reactivity_loss_tracker.effect_deps.has(signal)) {
			reactivity_loss_tracker.warned = true;
			await_reactivity_loss(signal.label);
			var trace = get_error("traced at");
			if (trace) console.warn(trace);
		}
		recent_async_deriveds.delete(signal);
		if (tracing_mode_flag && !untracking && tracing_expressions !== null && active_reaction !== null && tracing_expressions.reaction === active_reaction) if (signal.trace) signal.trace();
		else {
			trace = get_error("traced at");
			if (trace) {
				var entry = tracing_expressions.entries.get(signal);
				if (entry === void 0) {
					entry = { traces: [] };
					tracing_expressions.entries.set(signal, entry);
				}
				var last = entry.traces[entry.traces.length - 1];
				if (trace.stack !== last?.stack) entry.traces.push(trace);
			}
		}
	}
	if (is_destroying_effect && old_values.has(signal)) return old_values.get(signal);
	if (is_derived) {
		var derived = signal;
		if (is_destroying_effect) {
			var value = derived.v;
			if ((derived.f & 1024) === 0 && derived.reactions !== null || depends_on_old_values(derived)) value = execute_derived(derived);
			old_values.set(derived, value);
			return value;
		}
		var should_connect = (derived.f & 512) === 0 && !untracking && active_reaction !== null && (is_updating_effect || (active_reaction.f & 512) !== 0);
		var is_new = (derived.f & REACTION_RAN) === 0;
		if (is_dirty(derived)) {
			if (should_connect) derived.f |= 512;
			update_derived(derived);
		}
		if (should_connect && !is_new) {
			unfreeze_derived_effects(derived);
			reconnect(derived);
		}
	}
	if (batch_values?.has(signal)) return batch_values.get(signal);
	if ((signal.f & 8388608) !== 0) throw signal.v;
	return signal.v;
}
/**
* (Re)connect a disconnected derived, so that it is notified
* of changes in `mark_reactions`
* @param {Derived} derived
*/
function reconnect(derived) {
	derived.f |= 512;
	if (derived.deps === null) return;
	for (const dep of derived.deps) {
		(dep.reactions ?? (dep.reactions = [])).push(derived);
		if ((dep.f & 2) !== 0 && (dep.f & 512) === 0) {
			unfreeze_derived_effects(dep);
			reconnect(dep);
		}
	}
}
/** @param {Derived} derived */
function depends_on_old_values(derived) {
	if (derived.v === UNINITIALIZED) return true;
	if (derived.deps === null) return false;
	for (const dep of derived.deps) {
		if (old_values.has(dep)) return true;
		if ((dep.f & 2) !== 0 && depends_on_old_values(dep)) return true;
	}
	return false;
}
/**
* When used inside a [`$derived`](https://svelte.dev/docs/svelte/$derived) or [`$effect`](https://svelte.dev/docs/svelte/$effect),
* any state read inside `fn` will not be treated as a dependency.
*
* ```ts
* $effect(() => {
*   // this will run when `data` changes, but not when `time` changes
*   save(data, {
*     timestamp: untrack(() => time)
*   });
* });
* ```
* @template T
* @param {() => T} fn
* @returns {T}
*/
function untrack(fn) {
	var previous_untracking = untracking;
	try {
		untracking = true;
		return fn();
	} finally {
		untracking = previous_untracking;
	}
}
/**
* Possibly traverse an object and read all its properties so that they're all reactive in case this is `$state`.
* Does only check first level of an object for performance reasons (heuristic should be good for 99% of all cases).
* @param {any} value
* @returns {void}
*/
function deep_read_state(value) {
	if (typeof value !== "object" || !value || value instanceof EventTarget) return;
	if (STATE_SYMBOL in value) deep_read(value);
	else if (!Array.isArray(value)) for (let key in value) {
		const prop = value[key];
		if (typeof prop === "object" && prop && STATE_SYMBOL in prop) deep_read(prop);
	}
}
/**
* Deeply traverse an object and read all its properties
* so that they're all reactive in case this is `$state`
* @param {any} value
* @param {Set<any>} visited
* @returns {void}
*/
function deep_read(value, visited = /* @__PURE__ */ new Set()) {
	if (typeof value === "object" && value !== null && !(value instanceof EventTarget) && !visited.has(value)) {
		visited.add(value);
		if (value instanceof Date) value.getTime();
		for (let key in value) try {
			deep_read(value[key], visited);
		} catch (e) {}
		const proto = get_prototype_of(value);
		if (proto !== Object.prototype && proto !== Array.prototype && proto !== Map.prototype && proto !== Set.prototype && proto !== Date.prototype) {
			const descriptors = get_descriptors(proto);
			for (let key in descriptors) {
				const get = descriptors[key].get;
				if (get) try {
					get.call(value);
				} catch (e) {}
			}
		}
	}
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/dom/elements/events.js
/**
* Used on elements, as a map of event type -> event handler,
* and on events themselves to track which element handled an event
*/
var event_symbol = Symbol("events");
/** @type {Set<string>} */
var all_registered_events = /* @__PURE__ */ new Set();
/** @type {Set<(events: Array<string>) => void>} */
var root_event_handles = /* @__PURE__ */ new Set();
/**
* @param {string} event_name
* @param {Element} element
* @param {EventListener} [handler]
* @returns {void}
*/
function delegated(event_name, element, handler) {
	(element[event_symbol] ?? (element[event_symbol] = {}))[event_name] = handler;
}
/**
* @param {Array<string>} events
* @returns {void}
*/
function delegate(events) {
	for (var i = 0; i < events.length; i++) all_registered_events.add(events[i]);
	for (var fn of root_event_handles) fn(events);
}
var last_propagated_event = null;
/**
* @this {EventTarget}
* @param {Event} event
* @returns {void}
*/
function handle_event_propagation(event) {
	var handler_element = this;
	var owner_document = handler_element.ownerDocument;
	var event_name = event.type;
	var path = event.composedPath?.() || [];
	var current_target = path[0] || event.target;
	last_propagated_event = event;
	var path_idx = 0;
	var handled_at = last_propagated_event === event && event[event_symbol];
	if (handled_at) {
		var at_idx = path.indexOf(handled_at);
		if (at_idx !== -1 && (handler_element === document || handler_element === window)) {
			event[event_symbol] = handler_element;
			return;
		}
		var handler_idx = path.indexOf(handler_element);
		if (handler_idx === -1) return;
		if (at_idx <= handler_idx) path_idx = at_idx;
	}
	current_target = path[path_idx] || event.target;
	if (current_target === handler_element) return;
	define_property(event, "currentTarget", {
		configurable: true,
		get() {
			return current_target || owner_document;
		}
	});
	var previous_reaction = active_reaction;
	var previous_effect = active_effect;
	set_active_reaction(null);
	set_active_effect(null);
	try {
		/**
		* @type {unknown}
		*/
		var throw_error;
		/**
		* @type {unknown[]}
		*/
		var other_errors = [];
		while (current_target !== null) {
			/** @type {null | Element} */
			var parent_element = current_target.assignedSlot || current_target.parentNode || current_target.host || null;
			try {
				var delegated = current_target[event_symbol]?.[event_name];
				if (delegated != null && (!current_target.disabled || event.target === current_target)) delegated.call(current_target, event);
			} catch (error) {
				if (throw_error) other_errors.push(error);
				else throw_error = error;
			}
			if (event.cancelBubble || parent_element === handler_element || parent_element === null) break;
			current_target = parent_element;
		}
		if (throw_error) {
			for (let error of other_errors) queueMicrotask(() => {
				throw error;
			});
			throw throw_error;
		}
	} finally {
		event[event_symbol] = handler_element;
		delete event.currentTarget;
		set_active_reaction(previous_reaction);
		set_active_effect(previous_effect);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/dom/reconciler.js
var policy = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { 
/** @param {string} html */
createHTML: (html) => {
	return html;
} });
/** @param {string} html */
function create_trusted_html(html) {
	return policy?.createHTML(html) ?? html;
}
/**
* @param {string} html
*/
function create_fragment_from_html(html) {
	var elem = create_element("template");
	elem.innerHTML = create_trusted_html(html.replaceAll("<!>", "<!---->"));
	return elem.content;
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/dom/template.js
/** @import { Effect, EffectNodes, TemplateNode } from '#client' */
/** @import { TemplateStructure } from './types' */
/**
* @param {TemplateNode} start
* @param {TemplateNode | null} end
*/
function assign_nodes(start, end) {
	var effect = active_effect;
	if (effect.nodes === null) effect.nodes = {
		start,
		end,
		a: null,
		t: null
	};
}
/**
* @param {string} content
* @param {number} flags
* @returns {() => Node | Node[]}
*/
/* @__NO_SIDE_EFFECTS__ */
function from_html(content, flags) {
	var is_fragment = (flags & 1) !== 0;
	var use_import_node = (flags & 2) !== 0;
	/** @type {Node} */
	var node;
	/**
	* Whether or not the first item is a text/element node. If not, we need to
	* create an additional comment node to act as `effect.nodes.start`
	*/
	var has_start = !content.startsWith("<!>");
	return () => {
		if (hydrating) {
			assign_nodes(hydrate_node, null);
			return hydrate_node;
		}
		if (node === void 0) {
			node = create_fragment_from_html(has_start ? content : "<!>" + content);
			if (!is_fragment) node = /* @__PURE__ */ get_first_child(node);
		}
		var clone = use_import_node || is_firefox ? document.importNode(node, true) : node.cloneNode(true);
		if (is_fragment) {
			var start = /* @__PURE__ */ get_first_child(clone);
			var end = clone.lastChild;
			assign_nodes(start, end);
		} else assign_nodes(clone, clone);
		return clone;
	};
}
/**
* Assign the created (or in hydration mode, traversed) dom elements to the current block
* and insert the elements into the dom (in client mode).
* @param {Text | Comment | Element} anchor
* @param {DocumentFragment | Element} dom
*/
function append$2(anchor, dom) {
	if (hydrating) {
		var effect = active_effect;
		if ((effect.f & 32768) === 0 || effect.nodes.end === null) effect.nodes.end = hydrate_node;
		hydrate_next();
		return;
	}
	if (anchor === null) return;
	anchor.before(dom);
}
/**
* Subset of delegated events which should be passive by default.
* These two are already passive via browser defaults on window, document and body.
* But since
* - we're delegating them
* - they happen often
* - they apply to mobile which is generally less performant
* we're marking them as passive by default for other elements, too.
*/
var PASSIVE_EVENTS = ["touchstart", "touchmove"];
/**
* Returns `true` if `name` is a passive event
* @param {string} name
*/
function is_passive_event(name) {
	return PASSIVE_EVENTS.includes(name);
}
/**
* @param {Element} text
* @param {string} value
* @returns {void}
*/
function set_text(text, value) {
	var _text;
	var str = value == null ? "" : typeof value === "object" ? `${value}` : value;
	if (str !== ((_text = text)[TEXT_CACHE] ?? (_text[TEXT_CACHE] = text.nodeValue))) {
		/** @type {any} */ text[TEXT_CACHE] = str;
		text.nodeValue = `${str}`;
	}
}
/**
* Mounts a component to the given target and returns the exports and potentially the props (if compiled with `accessors: true`) of the component.
* Transitions will play during the initial render unless the `intro` option is set to `false`.
*
* @template {Record<string, any>} Props
* @template {Record<string, any>} Exports
* @param {ComponentType<SvelteComponent<Props>> | Component<Props, Exports, any>} component
* @param {MountOptions<Props>} options
* @returns {Exports}
*/
function mount(component, options) {
	return _mount(component, options);
}
/**
* Hydrates a component on the given target and returns the exports and potentially the props (if compiled with `accessors: true`) of the component
*
* @template {Record<string, any>} Props
* @template {Record<string, any>} Exports
* @param {ComponentType<SvelteComponent<Props>> | Component<Props, Exports, any>} component
* @param {{} extends Props ? {
* 		target: Document | Element | ShadowRoot;
* 		props?: Props;
* 		events?: Record<string, (e: any) => any>;
*  	context?: Map<any, any>;
* 		intro?: boolean;
* 		recover?: boolean;
*		transformError?: (error: unknown) => unknown;
* 	} : {
* 		target: Document | Element | ShadowRoot;
* 		props: Props;
* 		events?: Record<string, (e: any) => any>;
*  	context?: Map<any, any>;
* 		intro?: boolean;
* 		recover?: boolean;
*		transformError?: (error: unknown) => unknown;
* 	}} options
* @returns {Exports}
*/
function hydrate(component, options) {
	init_operations();
	options.intro = options.intro ?? false;
	const target = options.target;
	const was_hydrating = hydrating;
	const previous_hydrate_node = hydrate_node;
	try {
		var anchor = /* @__PURE__ */ get_first_child(target);
		while (anchor && (anchor.nodeType !== 8 || anchor.data !== "[")) anchor = /* @__PURE__ */ get_next_sibling(anchor);
		if (!anchor) throw HYDRATION_ERROR;
		set_hydrating(true);
		set_hydrate_node(anchor);
		const instance = _mount(component, {
			...options,
			anchor
		});
		set_hydrating(false);
		return instance;
	} catch (error) {
		if (error instanceof Error && error.message.split("\n").some((line) => line.startsWith("https://svelte.dev/e/"))) throw error;
		if (error !== HYDRATION_ERROR) console.warn("Failed to hydrate: ", error);
		if (options.recover === false) hydration_failed();
		init_operations();
		clear_text_content(target);
		set_hydrating(false);
		return mount(component, options);
	} finally {
		set_hydrating(was_hydrating);
		set_hydrate_node(previous_hydrate_node);
	}
}
/** @type {Map<EventTarget, Map<string, number>>} */
var listeners = /* @__PURE__ */ new Map();
/**
* @template {Record<string, any>} Exports
* @param {ComponentType<SvelteComponent<any>> | Component<any>} Component
* @param {MountOptions} options
* @returns {Exports}
*/
function _mount(Component, { target, anchor, props = {}, events, context, intro = true, transformError }) {
	init_operations();
	/** @type {Exports} */
	var component = void 0;
	var unmount = component_root(() => {
		var anchor_node = anchor ?? target.appendChild(create_text());
		boundary(anchor_node, { pending: () => {} }, (anchor_node) => {
			push({});
			var ctx = component_context;
			if (context) ctx.c = context;
			if (events)
 /** @type {any} */ props.$$events = events;
			if (hydrating) assign_nodes(anchor_node, null);
			component = Component(anchor_node, props) || {};
			if (hydrating) {
				/** @type {Effect & { nodes: EffectNodes }} */ active_effect.nodes.end = hydrate_node;
				if (hydrate_node === null || hydrate_node.nodeType !== 8 || hydrate_node.data !== "]") {
					hydration_mismatch();
					throw HYDRATION_ERROR;
				}
			}
			pop();
		}, transformError);
		/** @type {Set<string>} */
		var registered_events = /* @__PURE__ */ new Set();
		/** @param {Array<string>} events */
		var event_handle = (events) => {
			for (var i = 0; i < events.length; i++) {
				var event_name = events[i];
				if (registered_events.has(event_name)) continue;
				registered_events.add(event_name);
				var passive = is_passive_event(event_name);
				for (const node of [target, document]) {
					var counts = listeners.get(node);
					if (counts === void 0) {
						counts = /* @__PURE__ */ new Map();
						listeners.set(node, counts);
					}
					var count = counts.get(event_name);
					if (count === void 0) {
						node.addEventListener(event_name, handle_event_propagation, { passive });
						counts.set(event_name, 1);
					} else counts.set(event_name, count + 1);
				}
			}
		};
		event_handle(array_from(all_registered_events));
		root_event_handles.add(event_handle);
		return () => {
			for (var event_name of registered_events) for (const node of [target, document]) {
				var counts = listeners.get(node);
				var count = counts.get(event_name);
				if (--count == 0) {
					node.removeEventListener(event_name, handle_event_propagation);
					counts.delete(event_name);
					if (counts.size === 0) listeners.delete(node);
				} else counts.set(event_name, count);
			}
			root_event_handles.delete(event_handle);
			if (anchor_node !== anchor) anchor_node.parentNode?.removeChild(anchor_node);
		};
	});
	mounted_components.set(component, unmount);
	return component;
}
/**
* References of the components that were mounted or hydrated.
* Uses a `WeakMap` to avoid memory leaks.
*/
var mounted_components = /* @__PURE__ */ new WeakMap();
/**
* Unmounts a component that was previously mounted using `mount` or `hydrate`.
*
* Since 5.13.0, if `options.outro` is `true`, [transitions](https://svelte.dev/docs/svelte/transition) will play before the component is removed from the DOM.
*
* Returns a `Promise` that resolves after transitions have completed if `options.outro` is true, or immediately otherwise (prior to 5.13.0, returns `void`).
*
* ```js
* import { mount, unmount } from 'svelte';
* import App from './App.svelte';
*
* const app = mount(App, { target: document.body });
*
* // later...
* unmount(app, { outro: true });
* ```
* @param {Record<string, any>} component
* @param {{ outro?: boolean }} [options]
* @returns {Promise<void>}
*/
function unmount(component, options) {
	const fn = mounted_components.get(component);
	if (fn) {
		mounted_components.delete(component);
		return fn(options);
	}
	if (dev_fallback_default) if (STATE_SYMBOL in component) state_proxy_unmount();
	else lifecycle_double_unmount();
	return Promise.resolve();
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/dom/blocks/branches.js
/** @import { Effect, TemplateNode } from '#client' */
var _batches = /* @__PURE__ */ new WeakMap();
var _onscreen = /* @__PURE__ */ new WeakMap();
var _offscreen = /* @__PURE__ */ new WeakMap();
var _outroing = /* @__PURE__ */ new WeakMap();
var _transition = /* @__PURE__ */ new WeakMap();
var _commit = /* @__PURE__ */ new WeakMap();
var _discard = /* @__PURE__ */ new WeakMap();
/**
* @typedef {{ effect: Effect, fragment: DocumentFragment }} Branch
*/
/**
* @template Key
*/
var BranchManager = class {
	/**
	* @param {TemplateNode} anchor
	* @param {boolean} transition
	*/
	constructor(anchor, transition = true) {
		_defineProperty(
			this,
			/** @type {TemplateNode} */
			"anchor",
			void 0
		);
		_classPrivateFieldInitSpec(this, _batches, /* @__PURE__ */ new Map());
		_classPrivateFieldInitSpec(this, _onscreen, /* @__PURE__ */ new Map());
		_classPrivateFieldInitSpec(this, _offscreen, /* @__PURE__ */ new Map());
		_classPrivateFieldInitSpec(this, _outroing, /* @__PURE__ */ new Set());
		_classPrivateFieldInitSpec(this, _transition, true);
		_classPrivateFieldInitSpec(this, _commit, (batch) => {
			if (!_classPrivateFieldGet2(_batches, this).has(batch)) return;
			var key = _classPrivateFieldGet2(_batches, this).get(batch);
			var onscreen = _classPrivateFieldGet2(_onscreen, this).get(key);
			if (onscreen) {
				resume_effect(onscreen);
				_classPrivateFieldGet2(_outroing, this).delete(key);
			} else {
				var offscreen = _classPrivateFieldGet2(_offscreen, this).get(key);
				if (offscreen) {
					_classPrivateFieldGet2(_onscreen, this).set(key, offscreen.effect);
					_classPrivateFieldGet2(_offscreen, this).delete(key);
					if (dev_fallback_default)
 /** @type {any} */ offscreen.fragment.lastChild[HMR_ANCHOR] = this.anchor;
					/** @type {TemplateNode} */ offscreen.fragment.lastChild.remove();
					this.anchor.before(offscreen.fragment);
					onscreen = offscreen.effect;
				}
			}
			for (const [b, k] of _classPrivateFieldGet2(_batches, this)) {
				_classPrivateFieldGet2(_batches, this).delete(b);
				if (b === batch) break;
				const offscreen = _classPrivateFieldGet2(_offscreen, this).get(k);
				if (offscreen) {
					destroy_effect(offscreen.effect);
					_classPrivateFieldGet2(_offscreen, this).delete(k);
				}
			}
			for (const [k, effect] of _classPrivateFieldGet2(_onscreen, this)) {
				if (k === key || _classPrivateFieldGet2(_outroing, this).has(k)) continue;
				const on_destroy = () => {
					if (Array.from(_classPrivateFieldGet2(_batches, this).values()).includes(k)) {
						var fragment = document.createDocumentFragment();
						move_effect(effect, fragment);
						fragment.append(create_text());
						_classPrivateFieldGet2(_offscreen, this).set(k, {
							effect,
							fragment
						});
					} else destroy_effect(effect);
					_classPrivateFieldGet2(_outroing, this).delete(k);
					_classPrivateFieldGet2(_onscreen, this).delete(k);
				};
				if (_classPrivateFieldGet2(_transition, this) || !onscreen) {
					_classPrivateFieldGet2(_outroing, this).add(k);
					pause_effect(effect, on_destroy, false);
				} else on_destroy();
			}
		});
		_classPrivateFieldInitSpec(this, _discard, (batch) => {
			_classPrivateFieldGet2(_batches, this).delete(batch);
			const keys = Array.from(_classPrivateFieldGet2(_batches, this).values());
			for (const [k, branch] of _classPrivateFieldGet2(_offscreen, this)) if (!keys.includes(k)) {
				destroy_effect(branch.effect);
				_classPrivateFieldGet2(_offscreen, this).delete(k);
			}
		});
		this.anchor = anchor;
		_classPrivateFieldSet2(_transition, this, transition);
	}
	/**
	*
	* @param {any} key
	* @param {null | ((target: TemplateNode) => void)} fn
	*/
	ensure(key, fn) {
		var batch = current_batch;
		var defer = should_defer_append();
		if (fn && !_classPrivateFieldGet2(_onscreen, this).has(key) && !_classPrivateFieldGet2(_offscreen, this).has(key)) if (defer) {
			var fragment = document.createDocumentFragment();
			var target = create_text();
			fragment.append(target);
			_classPrivateFieldGet2(_offscreen, this).set(key, {
				effect: branch(() => fn(target)),
				fragment
			});
		} else _classPrivateFieldGet2(_onscreen, this).set(key, branch(() => fn(this.anchor)));
		_classPrivateFieldGet2(_batches, this).set(batch, key);
		if (defer) {
			for (const [k, effect] of _classPrivateFieldGet2(_onscreen, this)) if (k === key) batch.unskip_effect(effect);
			else batch.skip_effect(effect);
			for (const [k, branch] of _classPrivateFieldGet2(_offscreen, this)) if (k === key) batch.unskip_effect(branch.effect);
			else batch.skip_effect(branch.effect);
			batch.oncommit(_classPrivateFieldGet2(_commit, this));
			batch.ondiscard(_classPrivateFieldGet2(_discard, this));
		} else {
			if (hydrating) this.anchor = hydrate_node;
			_classPrivateFieldGet2(_commit, this).call(this, batch);
		}
	}
};
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/index-client.js
/** @import { ComponentContext, ComponentContextLegacy } from '#client' */
/** @import { EventDispatcher } from './index.js' */
/** @import { NotFunction } from './internal/types.js' */
if (dev_fallback_default) {
	/**
	* @param {string} rune
	*/
	function throw_rune_error(rune) {
		if (!(rune in globalThis)) {
			/** @type {any} */
			let value;
			Object.defineProperty(globalThis, rune, {
				configurable: true,
				get: () => {
					if (value !== void 0) return value;
					rune_outside_svelte(rune);
				},
				set: (v) => {
					value = v;
				}
			});
		}
	}
	throw_rune_error("$state");
	throw_rune_error("$effect");
	throw_rune_error("$derived");
	throw_rune_error("$inspect");
	throw_rune_error("$props");
	throw_rune_error("$bindable");
}
/**
* `onMount`, like [`$effect`](https://svelte.dev/docs/svelte/$effect), schedules a function to run as soon as the component has been mounted to the DOM.
* Unlike `$effect`, the provided function only runs once.
*
* It must be called during the component's initialisation (but doesn't need to live _inside_ the component;
* it can be called from an external module). If a function is returned _synchronously_ from `onMount`,
* it will be called when the component is unmounted.
*
* `onMount` functions do not run during [server-side rendering](https://svelte.dev/docs/svelte/svelte-server#render).
*
* @template T
* @param {() => NotFunction<T> | Promise<NotFunction<T>> | (() => any)} fn
* @returns {void}
*/
function onMount(fn) {
	if (component_context === null) lifecycle_outside_component("onMount");
	if (legacy_mode_flag && component_context.l !== null) init_update_callbacks(component_context).m.push(fn);
	else user_effect(() => {
		const cleanup = untrack(fn);
		if (typeof cleanup === "function") return cleanup;
	});
}
/**
* Schedules a callback to run immediately before the component is unmounted.
*
* Out of `onMount`, `beforeUpdate`, `afterUpdate` and `onDestroy`, this is the
* only one that runs inside a server-side component.
*
* @param {() => any} fn
* @returns {void}
*/
function onDestroy(fn) {
	if (component_context === null) lifecycle_outside_component("onDestroy");
	onMount(() => () => untrack(fn));
}
/**
* Legacy-mode: Init callbacks object for onMount/beforeUpdate/afterUpdate
* @param {ComponentContext} context
*/
function init_update_callbacks(context) {
	var l = context.l;
	return l.u ?? (l.u = {
		a: [],
		b: [],
		m: []
	});
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/dev/css.js
/** @type {Map<String, Set<HTMLStyleElement>>} */
var all_styles = /* @__PURE__ */ new Map();
/**
* @param {String} hash
* @param {HTMLStyleElement} style
*/
function register_style(hash, style) {
	var styles = all_styles.get(hash);
	if (!styles) {
		styles = /* @__PURE__ */ new Set();
		all_styles.set(hash, styles);
	}
	styles.add(style);
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/dom/blocks/if.js
/** @import { TemplateNode } from '#client' */
/**
* @param {TemplateNode} node
* @param {(branch: (fn: (anchor: Node) => void, key?: number | false) => void) => void} fn
* @param {boolean} [elseif] True if this is an `{:else if ...}` block rather than an `{#if ...}`, as that affects which transitions are considered 'local'
* @returns {void}
*/
function if_block(node, fn, elseif = false) {
	/** @type {TemplateNode | undefined} */
	var marker;
	if (hydrating) {
		marker = hydrate_node;
		hydrate_next();
	}
	var branches = new BranchManager(node);
	var flags = elseif ? EFFECT_TRANSPARENT : 0;
	/**
	* @param {number | false} key
	* @param {null | ((anchor: Node) => void)} fn
	*/
	function update_branch(key, fn) {
		if (hydrating) {
			var data = read_hydration_instruction(marker);
			if (key !== parseInt(data.substring(1))) {
				var anchor = skip_nodes();
				set_hydrate_node(anchor);
				branches.anchor = anchor;
				set_hydrating(false);
				branches.ensure(key, fn);
				set_hydrating(true);
				return;
			}
		}
		branches.ensure(key, fn);
	}
	block(() => {
		var has_branch = false;
		fn((fn, key = 0) => {
			has_branch = true;
			update_branch(key, fn);
		});
		if (!has_branch) update_branch(-1, null);
	}, flags);
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/dom/blocks/each.js
/** @import { EachItem, EachOutroGroup, EachState, Effect, EffectNodes, MaybeSource, Source, TemplateNode, TransitionManager, Value } from '#client' */
/** @import { Batch } from '../../reactivity/batch.js'; */
/**
* @param {any} _
* @param {number} i
*/
function index(_, i) {
	return i;
}
/**
* Pause multiple effects simultaneously, and coordinate their
* subsequent destruction. Used in each blocks
* @param {EachState} state
* @param {Effect[]} to_destroy
* @param {null | Node} controlled_anchor
*/
function pause_effects(state, to_destroy, controlled_anchor) {
	/** @type {TransitionManager[]} */
	var transitions = [];
	var length = to_destroy.length;
	/** @type {EachOutroGroup} */
	var group;
	var remaining = to_destroy.length;
	for (var i = 0; i < length; i++) {
		let effect = to_destroy[i];
		pause_effect(effect, () => {
			if (group) {
				group.pending.delete(effect);
				group.done.add(effect);
				if (group.pending.size === 0) {
					var groups = state.outrogroups;
					destroy_effects(state, array_from(group.done));
					groups.delete(group);
					if (groups.size === 0) state.outrogroups = null;
				}
			} else remaining -= 1;
		}, false);
	}
	if (remaining === 0) {
		var fast_path = transitions.length === 0 && controlled_anchor !== null;
		if (fast_path) {
			var anchor = controlled_anchor;
			var parent_node = anchor.parentNode;
			clear_text_content(parent_node);
			parent_node.append(anchor);
			state.items.clear();
		}
		destroy_effects(state, to_destroy, !fast_path);
	} else {
		group = {
			pending: new Set(to_destroy),
			done: /* @__PURE__ */ new Set()
		};
		(state.outrogroups ?? (state.outrogroups = /* @__PURE__ */ new Set())).add(group);
	}
}
/**
* @param {EachState} state
* @param {Effect[]} to_destroy
* @param {boolean} remove_dom
*/
function destroy_effects(state, to_destroy, remove_dom = true) {
	/** @type {Set<Effect> | undefined} */
	var preserved_effects;
	if (state.pending.size > 0) {
		preserved_effects = /* @__PURE__ */ new Set();
		for (const keys of state.pending.values()) for (const key of keys) preserved_effects.add(
			/** @type {EachItem} */
			state.items.get(key).e
		);
	}
	for (var i = 0; i < to_destroy.length; i++) {
		var e = to_destroy[i];
		if (preserved_effects?.has(e)) {
			e.f |= EFFECT_OFFSCREEN;
			move_effect(e, document.createDocumentFragment());
		} else destroy_effect(to_destroy[i], remove_dom);
	}
}
/** @type {TemplateNode} */
var offscreen_anchor;
/**
* @template V
* @param {Element | Comment} node The next sibling node, or the parent node if this is a 'controlled' block
* @param {number} flags
* @param {() => V[]} get_collection
* @param {(value: V, index: number) => any} get_key
* @param {(anchor: Node, item: MaybeSource<V>, index: MaybeSource<number>) => void} render_fn
* @param {null | ((anchor: Node) => void)} fallback_fn
* @returns {void}
*/
function each(node, flags, get_collection, get_key, render_fn, fallback_fn = null) {
	var anchor = node;
	/** @type {Map<any, EachItem>} */
	var items = /* @__PURE__ */ new Map();
	if ((flags & 4) !== 0) {
		var parent_node = node;
		anchor = hydrating ? set_hydrate_node(/* @__PURE__ */ get_first_child(parent_node)) : parent_node.appendChild(create_text());
	}
	if (hydrating) hydrate_next();
	/** @type {Effect | null} */
	var fallback = null;
	var each_array = /* @__PURE__ */ derived_safe_equal(() => {
		var collection = get_collection();
		return is_array(collection) ? collection : collection == null ? [] : array_from(collection);
	});
	if (dev_fallback_default) tag(each_array, "{#each ...}");
	/** @type {V[]} */
	var array;
	/** @type {Map<Batch, Set<any>>} */
	var pending = /* @__PURE__ */ new Map();
	var first_run = true;
	/**
	* @param {Batch} batch
	*/
	function commit(batch) {
		if ((state.effect.f & 16384) !== 0) return;
		state.pending.delete(batch);
		state.fallback = fallback;
		reconcile(state, array, anchor, flags, get_key);
		if (fallback !== null) if (array.length === 0) if ((fallback.f & 33554432) === 0) resume_effect(fallback);
		else {
			fallback.f ^= EFFECT_OFFSCREEN;
			move(fallback, null, anchor);
		}
		else pause_effect(fallback, () => {
			fallback = null;
		});
	}
	/**
	* @param {Batch} batch
	*/
	function discard(batch) {
		state.pending.delete(batch);
	}
	/** @type {EachState} */
	var state = {
		effect: block(() => {
			array = get$8(each_array);
			var length = array.length;
			/** `true` if there was a hydration mismatch. Needs to be a `let` or else it isn't treeshaken out */
			let mismatch = false;
			if (hydrating) {
				if (read_hydration_instruction(anchor) === "[!" !== (length === 0)) {
					anchor = skip_nodes();
					set_hydrate_node(anchor);
					set_hydrating(false);
					mismatch = true;
				}
			}
			var keys = /* @__PURE__ */ new Set();
			var batch = current_batch;
			var defer = should_defer_append();
			for (var index = 0; index < length; index += 1) {
				if (hydrating && hydrate_node.nodeType === 8 && hydrate_node.data === "]") {
					anchor = hydrate_node;
					mismatch = true;
					set_hydrating(false);
				}
				var value = array[index];
				var key = get_key(value, index);
				if (dev_fallback_default) {
					var key_again = get_key(value, index);
					if (key !== key_again) each_key_volatile(String(index), String(key), String(key_again));
				}
				var item = first_run ? null : items.get(key);
				if (item) {
					if (item.v) internal_set(item.v, value);
					if (item.i) internal_set(item.i, index);
					if (defer) batch.unskip_effect(item.e);
				} else {
					item = create_item(items, first_run ? anchor : offscreen_anchor ?? (offscreen_anchor = create_text()), value, key, index, render_fn, flags, get_collection);
					if (!first_run) item.e.f |= EFFECT_OFFSCREEN;
					items.set(key, item);
				}
				keys.add(key);
			}
			if (length === 0 && fallback_fn && !fallback) if (first_run) fallback = branch(() => fallback_fn(anchor));
			else {
				fallback = branch(() => fallback_fn(offscreen_anchor ?? (offscreen_anchor = create_text())));
				fallback.f |= EFFECT_OFFSCREEN;
			}
			if (length > keys.size) if (dev_fallback_default) validate_each_keys(array, get_key);
			else each_key_duplicate("", "", "");
			if (hydrating && length > 0) set_hydrate_node(skip_nodes());
			if (!first_run) {
				pending.set(batch, keys);
				if (defer) {
					for (const [key, item] of items) if (!keys.has(key)) batch.skip_effect(item.e);
					batch.oncommit(commit);
					batch.ondiscard(discard);
				} else commit(batch);
			}
			if (mismatch) set_hydrating(true);
			get$8(each_array);
		}),
		flags,
		items,
		pending,
		outrogroups: null,
		fallback
	};
	first_run = false;
	if (hydrating) anchor = hydrate_node;
}
/**
* Skip past any non-branch effects (which could be created with `createSubscriber`, for example) to find the next branch effect
* @param {Effect | null} effect
* @returns {Effect | null}
*/
function skip_to_branch(effect) {
	while (effect !== null && (effect.f & 32) === 0) effect = effect.next;
	return effect;
}
/**
* Add, remove, or reorder items output by an each block as its input changes
* @template V
* @param {EachState} state
* @param {Array<V>} array
* @param {Element | Comment | Text} anchor
* @param {number} flags
* @param {(value: V, index: number) => any} get_key
* @returns {void}
*/
function reconcile(state, array, anchor, flags, get_key) {
	var is_animated = (flags & 8) !== 0;
	var length = array.length;
	var items = state.items;
	var current = skip_to_branch(state.effect.first);
	/** @type {undefined | Set<Effect>} */
	var seen;
	/** @type {Effect | null} */
	var prev = null;
	/** @type {undefined | Set<Effect>} */
	var to_animate;
	/** @type {Effect[]} */
	var matched = [];
	/** @type {Effect[]} */
	var stashed = [];
	/** @type {V} */
	var value;
	/** @type {any} */
	var key;
	/** @type {Effect | undefined} */
	var effect;
	/** @type {number} */
	var i;
	if (is_animated) for (i = 0; i < length; i += 1) {
		value = array[i];
		key = get_key(value, i);
		effect = items.get(key).e;
		if ((effect.f & 33554432) === 0) {
			effect.nodes?.a?.measure();
			(to_animate ?? (to_animate = /* @__PURE__ */ new Set())).add(effect);
		}
	}
	for (i = 0; i < length; i += 1) {
		value = array[i];
		key = get_key(value, i);
		effect = items.get(key).e;
		if (state.outrogroups !== null) for (const group of state.outrogroups) {
			group.pending.delete(effect);
			group.done.delete(effect);
		}
		if ((effect.f & 8192) !== 0) {
			resume_effect(effect);
			if (is_animated) {
				effect.nodes?.a?.unfix();
				(to_animate ?? (to_animate = /* @__PURE__ */ new Set())).delete(effect);
			}
		}
		if ((effect.f & 33554432) !== 0) {
			effect.f ^= EFFECT_OFFSCREEN;
			if (effect === current) move(effect, null, anchor);
			else {
				var next = prev ? prev.next : current;
				if (effect === state.effect.last) state.effect.last = effect.prev;
				if (effect.prev) effect.prev.next = effect.next;
				if (effect.next) effect.next.prev = effect.prev;
				link(state, prev, effect);
				link(state, effect, next);
				move(effect, next, anchor);
				prev = effect;
				matched = [];
				stashed = [];
				current = skip_to_branch(prev.next);
				continue;
			}
		}
		if (effect !== current) {
			if (seen !== void 0 && seen.has(effect)) {
				if (matched.length < stashed.length) {
					var start = stashed[0];
					var j;
					prev = start.prev;
					var a = matched[0];
					var b = matched[matched.length - 1];
					for (j = 0; j < matched.length; j += 1) move(matched[j], start, anchor);
					for (j = 0; j < stashed.length; j += 1) seen.delete(stashed[j]);
					link(state, a.prev, b.next);
					link(state, prev, a);
					link(state, b, start);
					current = start;
					prev = b;
					i -= 1;
					matched = [];
					stashed = [];
				} else {
					seen.delete(effect);
					move(effect, current, anchor);
					link(state, effect.prev, effect.next);
					link(state, effect, prev === null ? state.effect.first : prev.next);
					link(state, prev, effect);
					prev = effect;
				}
				continue;
			}
			matched = [];
			stashed = [];
			while (current !== null && current !== effect) {
				(seen ?? (seen = /* @__PURE__ */ new Set())).add(current);
				stashed.push(current);
				current = skip_to_branch(current.next);
			}
			if (current === null) continue;
		}
		if ((effect.f & 33554432) === 0) matched.push(effect);
		prev = effect;
		current = skip_to_branch(effect.next);
	}
	if (state.outrogroups !== null) {
		for (const group of state.outrogroups) if (group.pending.size === 0) {
			destroy_effects(state, array_from(group.done));
			state.outrogroups?.delete(group);
		}
		if (state.outrogroups.size === 0) state.outrogroups = null;
	}
	if (current !== null || seen !== void 0) {
		/** @type {Effect[]} */
		var to_destroy = [];
		if (seen !== void 0) {
			for (effect of seen) if ((effect.f & 8192) === 0) to_destroy.push(effect);
		}
		while (current !== null) {
			if ((current.f & 8192) === 0 && current !== state.fallback) to_destroy.push(current);
			current = skip_to_branch(current.next);
		}
		var destroy_length = to_destroy.length;
		if (destroy_length > 0) {
			var controlled_anchor = (flags & 4) !== 0 && length === 0 ? anchor : null;
			if (is_animated) {
				for (i = 0; i < destroy_length; i += 1) to_destroy[i].nodes?.a?.measure();
				for (i = 0; i < destroy_length; i += 1) to_destroy[i].nodes?.a?.fix();
			}
			pause_effects(state, to_destroy, controlled_anchor);
		}
	}
	if (is_animated) queue_micro_task(() => {
		if (to_animate === void 0) return;
		for (effect of to_animate) effect.nodes?.a?.apply();
	});
}
/**
* @template V
* @param {Map<any, EachItem>} items
* @param {Node} anchor
* @param {V} value
* @param {unknown} key
* @param {number} index
* @param {(anchor: Node, item: V | Source<V>, index: number | Value<number>, collection: () => V[]) => void} render_fn
* @param {number} flags
* @param {() => V[]} get_collection
* @returns {EachItem}
*/
function create_item(items, anchor, value, key, index, render_fn, flags, get_collection) {
	var v = (flags & 1) !== 0 ? (flags & 16) === 0 ? /* @__PURE__ */ mutable_source(value, false, false) : source(value) : null;
	var i = (flags & 2) !== 0 ? source(index) : null;
	if (dev_fallback_default && v) v.trace = () => {
		get_collection()[i?.v ?? index];
	};
	return {
		v,
		i,
		e: branch(() => {
			render_fn(anchor, v ?? value, i ?? index, get_collection);
			return () => {
				items.delete(key);
			};
		})
	};
}
/**
* @param {Effect} effect
* @param {Effect | null} next
* @param {Text | Element | Comment} anchor
*/
function move(effect, next, anchor) {
	if (!effect.nodes) return;
	var node = effect.nodes.start;
	var end = effect.nodes.end;
	var dest = next && (next.f & 33554432) === 0 ? next.nodes.start : anchor;
	while (node !== null) {
		var next_node = /* @__PURE__ */ get_next_sibling(node);
		dest.before(node);
		if (node === end) return;
		node = next_node;
	}
}
/**
* @param {EachState} state
* @param {Effect | null} prev
* @param {Effect | null} next
*/
function link(state, prev, next) {
	if (prev === null) state.effect.first = next;
	else prev.next = next;
	if (next === null) state.effect.last = prev;
	else next.prev = prev;
}
/**
* @param {Array<any>} array
* @param {(item: any, index: number) => string} key_fn
* @returns {void}
*/
function validate_each_keys(array, key_fn) {
	const keys = /* @__PURE__ */ new Map();
	const length = array.length;
	for (let i = 0; i < length; i++) {
		const key = key_fn(array[i], i);
		if (keys.has(key)) {
			const a = String(keys.get(key));
			const b = String(i);
			/** @type {string | null} */
			let k = String(key);
			if (k.startsWith("[object ")) k = null;
			each_key_duplicate(a, b, k);
		}
		keys.set(key, i);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/dom/css.js
/**
* @param {Node} anchor
* @param {{ hash: string, code: string }} css
*/
function append_styles(anchor, css) {
	effect(() => {
		var root = anchor.getRootNode();
		var target = root.host ? root : 		/** @type {Document} */ root.head ?? root.ownerDocument.head;
		if (!target.querySelector("#" + css.hash)) {
			const style = create_element("style");
			style.id = css.hash;
			style.textContent = css.code;
			target.appendChild(style);
			if (dev_fallback_default) register_style(css.hash, style);
		}
	});
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/dom/elements/actions.js
/** @import { ActionPayload } from '#client' */
/**
* @template P
* @param {Element} dom
* @param {(dom: Element, value?: P) => ActionPayload<P>} action
* @param {() => P} [get_value]
* @returns {void}
*/
function action(dom, action, get_value) {
	effect(() => {
		var payload = untrack(() => action(dom, get_value?.()) || {});
		if (get_value && payload?.update) {
			var inited = false;
			/** @type {P} */
			var prev = {};
			render_effect(() => {
				var value = get_value();
				deep_read_state(value);
				if (inited && safe_not_equal(prev, value)) {
					prev = value;
					/** @type {Function} */ payload.update(value);
				}
			});
			inited = true;
		}
		if (payload?.destroy) return () => payload.destroy();
	});
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/shared/attributes.js
var whitespace = [..." 	\n\r\f\xA0\v﻿"];
/**
* @param {any} value
* @param {string | null} [hash]
* @param {Record<string, boolean>} [directives]
* @returns {string | null}
*/
function to_class(value, hash, directives) {
	var classname = value == null ? "" : "" + value;
	if (hash) classname = classname ? classname + " " + hash : hash;
	if (directives) {
		for (var key of Object.keys(directives)) if (directives[key]) classname = classname ? classname + " " + key : key;
		else if (classname.length) {
			var len = key.length;
			var a = 0;
			while ((a = classname.indexOf(key, a)) >= 0) {
				var b = a + len;
				if ((a === 0 || whitespace.includes(classname[a - 1])) && (b === classname.length || whitespace.includes(classname[b]))) classname = (a === 0 ? "" : classname.substring(0, a)) + classname.substring(b + 1);
				else a = b;
			}
		}
	}
	return classname === "" ? null : classname;
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/dom/elements/class.js
/**
* @param {Element} dom
* @param {boolean | number} is_html
* @param {string | null} value
* @param {string} [hash]
* @param {Record<string, any>} [prev_classes]
* @param {Record<string, any>} [next_classes]
* @returns {Record<string, boolean> | undefined}
*/
function set_class(dom, is_html, value, hash, prev_classes, next_classes) {
	var prev = dom[CLASS_CACHE];
	if (hydrating || prev !== value || prev === void 0) {
		var next_class_name = to_class(value, hash, next_classes);
		if (!hydrating || next_class_name !== dom.getAttribute("class")) if (next_class_name == null) dom.removeAttribute("class");
		else if (is_html) dom.className = next_class_name;
		else dom.setAttribute("class", next_class_name);
		/** @type {any} */ dom[CLASS_CACHE] = value;
	} else if (next_classes && prev_classes !== next_classes) for (var key in next_classes) {
		var is_present = !!next_classes[key];
		if (prev_classes == null || is_present !== !!prev_classes[key]) dom.classList.toggle(key, is_present);
	}
	return next_classes;
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/dom/elements/attributes.js
/** @import { Blocker, Effect } from '#client' */
var IS_CUSTOM_ELEMENT = Symbol("is custom element");
var IS_HTML = Symbol("is html");
var LINK_TAG = IS_XHTML ? "link" : "LINK";
var PROGRESS_TAG = IS_XHTML ? "progress" : "PROGRESS";
/**
* The value/checked attribute in the template actually corresponds to the defaultValue property, so we need
* to remove it upon hydration to avoid a bug when someone resets the form value.
* @param {HTMLInputElement} input
* @returns {void}
*/
function remove_input_defaults(input) {
	if (!hydrating) return;
	var already_removed = false;
	var remove_defaults = () => {
		if (already_removed) return;
		already_removed = true;
		if (input.hasAttribute("value")) {
			var value = input.value;
			set_attribute(input, "value", null);
			input.value = value;
		}
		if (input.hasAttribute("checked")) {
			var checked = input.checked;
			set_attribute(input, "checked", null);
			input.checked = checked;
		}
	};
	/** @type {any} */ input[FORM_RESET_HANDLER] = remove_defaults;
	queue_micro_task(remove_defaults);
	add_form_reset_listener();
}
/**
* @param {Element} element
* @param {any} value
*/
function set_value(element, value) {
	var attributes = get_attributes(element);
	if (attributes.value === (attributes.value = value ?? void 0) || element.value === value && (value !== 0 || element.nodeName !== PROGRESS_TAG)) return;
	element.value = value ?? "";
}
/**
* @param {Element} element
* @param {string} attribute
* @param {string | null} value
* @param {boolean} [skip_warning]
*/
function set_attribute(element, attribute, value, skip_warning) {
	var attributes = get_attributes(element);
	if (hydrating) {
		attributes[attribute] = element.getAttribute(attribute);
		if (attribute === "src" || attribute === "srcset" || attribute === "href" && element.nodeName === LINK_TAG) {
			if (!skip_warning) check_src_in_dev_hydration(element, attribute, value ?? "");
			return;
		}
	}
	if (attributes[attribute] === (attributes[attribute] = value)) return;
	if (attribute === "loading") element[LOADING_ATTR_SYMBOL] = value;
	if (value == null) element.removeAttribute(attribute);
	else if (typeof value !== "string" && get_setters(element).includes(attribute)) element[attribute] = value;
	else element.setAttribute(attribute, value);
}
/**
*
* @param {Element} element
*/
function get_attributes(element) {
	var _element;
	return (_element = element)[ATTRIBUTES_CACHE] ?? (_element[ATTRIBUTES_CACHE] = {
		[IS_CUSTOM_ELEMENT]: element.nodeName.includes("-"),
		[IS_HTML]: element.namespaceURI === "http://www.w3.org/1999/xhtml"
	});
}
/** @type {Map<string, string[]>} */
var setters_cache = /* @__PURE__ */ new Map();
/** @param {Element} element */
function get_setters(element) {
	var cache_key = element.getAttribute("is") || element.nodeName;
	var setters = setters_cache.get(cache_key);
	if (setters) return setters;
	setters_cache.set(cache_key, setters = []);
	var descriptors;
	var proto = element;
	var element_proto = Element.prototype;
	while (element_proto !== proto) {
		descriptors = get_descriptors(proto);
		for (var key in descriptors) if (descriptors[key].set && key !== "innerHTML" && key !== "textContent" && key !== "innerText") setters.push(key);
		proto = get_prototype_of(proto);
	}
	return setters;
}
/**
* @param {any} element
* @param {string} attribute
* @param {string} value
*/
function check_src_in_dev_hydration(element, attribute, value) {
	if (!dev_fallback_default) return;
	if (attribute === "srcset" && srcset_url_equal(element, value)) return;
	if (src_url_equal(element.getAttribute(attribute) ?? "", value)) return;
	hydration_attribute_changed(attribute, element.outerHTML.replace(element.innerHTML, element.innerHTML && "..."), String(value));
}
/**
* @param {string} element_src
* @param {string} url
* @returns {boolean}
*/
function src_url_equal(element_src, url) {
	if (element_src === url) return true;
	return new URL(element_src, document.baseURI).href === new URL(url, document.baseURI).href;
}
/** @param {string} srcset */
function split_srcset(srcset) {
	return srcset.split(",").map((src) => src.trim().split(" ").filter(Boolean));
}
/**
* @param {HTMLSourceElement | HTMLImageElement} element
* @param {string} srcset
* @returns {boolean}
*/
function srcset_url_equal(element, srcset) {
	var element_urls = split_srcset(element.srcset);
	var urls = split_srcset(srcset);
	return urls.length === element_urls.length && urls.every(([url, width], i) => width === element_urls[i][1] && (src_url_equal(element_urls[i][0], url) || src_url_equal(url, element_urls[i][0])));
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/dom/elements/bindings/input.js
/** @import { Batch } from '../../../reactivity/batch.js' */
/**
* @param {HTMLInputElement} input
* @param {() => unknown} get
* @param {(value: unknown) => void} set
* @returns {void}
*/
function bind_value(input, get, set = get) {
	var batches = /* @__PURE__ */ new WeakSet();
	listen_to_event_and_reset_event(input, "input", async (is_reset) => {
		if (dev_fallback_default && input.type === "checkbox") bind_invalid_checkbox_value();
		/** @type {any} */
		var value = is_reset ? input.defaultValue : input.value;
		value = is_numberlike_input(input) ? to_number(value) : value;
		set(value);
		if (current_batch !== null) batches.add(current_batch);
		await tick();
		if (value !== (value = get())) {
			var start = input.selectionStart;
			var end = input.selectionEnd;
			var length = input.value.length;
			input.value = value ?? "";
			if (end !== null) {
				var new_length = input.value.length;
				if (start === end && end === length && new_length > length) {
					input.selectionStart = new_length;
					input.selectionEnd = new_length;
				} else {
					input.selectionStart = start;
					input.selectionEnd = Math.min(end, new_length);
				}
			}
		}
	});
	if (hydrating && input.defaultValue !== input.value || untrack(get) == null && input.value) {
		set(is_numberlike_input(input) ? to_number(input.value) : input.value);
		if (current_batch !== null) batches.add(current_batch);
	}
	render_effect(() => {
		if (dev_fallback_default && input.type === "checkbox") bind_invalid_checkbox_value();
		var value = get();
		if (input === document.activeElement) {
			var batch = async_mode_flag ? previous_batch : current_batch;
			if (batches.has(batch)) return;
		}
		if (is_numberlike_input(input) && value === to_number(input.value)) return;
		if (input.type === "date" && !value && !input.value) return;
		if (value !== input.value) input.value = value ?? "";
	});
}
/**
* @param {HTMLInputElement} input
*/
function is_numberlike_input(input) {
	var type = input.type;
	return type === "number" || type === "range";
}
/**
* @param {string} value
*/
function to_number(value) {
	return value === "" ? null : +value;
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/dom/elements/bindings/size.js
var _ResizeObserverSingleton;
var _listeners = /* @__PURE__ */ new WeakMap();
var _observer = /* @__PURE__ */ new WeakMap();
var _options = /* @__PURE__ */ new WeakMap();
var _ResizeObserverSingleton_brand = /* @__PURE__ */ new WeakSet();
/**
* We create one listener for all elements
* @see {@link https://groups.google.com/a/chromium.org/g/blink-dev/c/z6ienONUb5A/m/F5-VcUZtBAAJ Explanation}
*/
var ResizeObserverSingleton = class {
	/** @param {ResizeObserverOptions} options */
	constructor(options) {
		_classPrivateMethodInitSpec(this, _ResizeObserverSingleton_brand);
		_classPrivateFieldInitSpec(this, _listeners, /* @__PURE__ */ new WeakMap());
		_classPrivateFieldInitSpec(this, _observer, void 0);
		_classPrivateFieldInitSpec(this, _options, void 0);
		_classPrivateFieldSet2(_options, this, options);
	}
	/**
	* @param {Element} element
	* @param {(entry: ResizeObserverEntry) => any} listener
	*/
	observe(element, listener) {
		var listeners = _classPrivateFieldGet2(_listeners, this).get(element) || /* @__PURE__ */ new Set();
		listeners.add(listener);
		_classPrivateFieldGet2(_listeners, this).set(element, listeners);
		_assertClassBrand(_ResizeObserverSingleton_brand, this, _getObserver).call(this).observe(element, _classPrivateFieldGet2(_options, this));
		return () => {
			var listeners = _classPrivateFieldGet2(_listeners, this).get(element);
			listeners.delete(listener);
			if (listeners.size === 0) {
				_classPrivateFieldGet2(_listeners, this).delete(element);
				/** @type {ResizeObserver} */ _classPrivateFieldGet2(_observer, this).unobserve(element);
			}
		};
	}
};
_ResizeObserverSingleton = ResizeObserverSingleton;
function _getObserver() {
	return _classPrivateFieldGet2(_observer, this) ?? _classPrivateFieldSet2(_observer, this, new ResizeObserver(
		/** @param {any} entries */
		(entries) => {
			for (var entry of entries) {
				_ResizeObserverSingleton.entries.set(entry.target, entry);
				for (var listener of _classPrivateFieldGet2(_listeners, this).get(entry.target) || []) listener(entry);
			}
		}
	));
}
_defineProperty(ResizeObserverSingleton, "entries", /* @__PURE__ */ new WeakMap());
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
/** @import { ComponentContext, Effect } from '#client' */
/**
* @param {any} bound_value
* @param {Element} element_or_component
* @returns {boolean}
*/
function is_bound_this(bound_value, element_or_component) {
	return bound_value === element_or_component || bound_value?.[STATE_SYMBOL] === element_or_component;
}
/**
* @param {any} element_or_component
* @param {(value: unknown, ...parts: unknown[]) => void} update
* @param {(...parts: unknown[]) => unknown} get_value
* @param {() => unknown[]} [get_parts] Set if the this binding is used inside an each block,
* 										returns all the parts of the each block context that are used in the expression
* @returns {void}
*/
function bind_this(element_or_component = {}, update, get_value, get_parts) {
	var component_effect = component_context.r;
	var parent = active_effect;
	effect(() => {
		/** @type {unknown[]} */
		var old_parts;
		/** @type {unknown[]} */
		var parts;
		render_effect(() => {
			old_parts = parts;
			parts = get_parts?.() || [];
			untrack(() => {
				if (!is_bound_this(get_value(...parts), element_or_component)) {
					update(element_or_component, ...parts);
					if (old_parts && is_bound_this(get_value(...old_parts), element_or_component)) update(null, ...old_parts);
				}
			});
		});
		return () => {
			let p = parent;
			while (p !== component_effect && p.parent !== null && p.parent.f & 33554432) p = p.parent;
			const teardown = () => {
				if (parts && is_bound_this(get_value(...parts), element_or_component)) update(null, ...parts);
			};
			const original_teardown = p.teardown;
			p.teardown = () => {
				teardown();
				original_teardown?.();
			};
		};
	});
	return element_or_component;
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/reactivity/props.js
/** @import { Derived, Effect, Source } from './types.js' */
/**
* This function is responsible for synchronizing a possibly bound prop with the inner component state.
* It is used whenever the compiler sees that the component writes to the prop, or when it has a default prop_value.
* @template V
* @param {Record<string, unknown>} props
* @param {string} key
* @param {number} flags
* @param {V | (() => V)} [fallback]
* @returns {(() => V | ((arg: V) => V) | ((arg: V, mutation: boolean) => V))}
*/
function prop(props, key, flags, fallback) {
	var runes = !legacy_mode_flag || (flags & 2) !== 0;
	var bindable = (flags & 8) !== 0;
	var lazy = (flags & 16) !== 0;
	var fallback_value = fallback;
	var fallback_dirty = true;
	var fallback_signal = void 0;
	var get_fallback = () => {
		if (lazy && runes) {
			fallback_signal ?? (fallback_signal = /* @__PURE__ */ derived(fallback));
			return get$8(fallback_signal);
		}
		if (fallback_dirty) {
			fallback_dirty = false;
			fallback_value = lazy ? untrack(fallback) : fallback;
		}
		return fallback_value;
	};
	/** @type {((v: V) => void) | undefined} */
	let setter;
	if (bindable) {
		var is_entry_props = STATE_SYMBOL in props || LEGACY_PROPS in props;
		setter = get_descriptor(props, key)?.set ?? (is_entry_props && key in props ? (v) => props[key] = v : void 0);
	}
	/** @type {V} */
	var initial_value;
	var is_store_sub = false;
	if (bindable) [initial_value, is_store_sub] = capture_store_binding(() => props[key]);
	else initial_value = props[key];
	if (initial_value === void 0 && fallback !== void 0) {
		initial_value = get_fallback();
		if (setter) {
			if (runes) props_invalid_value(key);
			setter(initial_value);
		}
	}
	/** @type {() => V} */
	var getter;
	if (runes) getter = () => {
		var value = props[key];
		if (value === void 0) return get_fallback();
		fallback_dirty = true;
		return value;
	};
	else getter = () => {
		var value = props[key];
		if (value !== void 0) fallback_value = void 0;
		return value === void 0 ? fallback_value : value;
	};
	if (runes && (flags & 4) === 0) return getter;
	if (setter) {
		var legacy_parent = props.$$legacy;
		return (function(value, mutation) {
			if (arguments.length > 0) {
				if (!runes || !mutation || legacy_parent || is_store_sub)
 /** @type {Function} */ setter(mutation ? getter() : value);
				return value;
			}
			return getter();
		});
	}
	var overridden = false;
	var d = ((flags & 1) !== 0 ? derived : derived_safe_equal)(() => {
		overridden = false;
		return getter();
	});
	if (dev_fallback_default) d.label = key;
	if (bindable) get$8(d);
	var parent_effect = active_effect;
	return (function(value, mutation) {
		if (arguments.length > 0) {
			const new_value = mutation ? get$8(d) : runes && bindable ? proxy(value) : value;
			set$4(d, new_value);
			overridden = true;
			if (fallback_value !== void 0) fallback_value = new_value;
			return value;
		}
		if (is_destroying_effect && overridden || (parent_effect.f & 16384) !== 0) return d.v;
		return get$8(d);
	});
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/legacy/legacy-client.js
/** @import { ComponentConstructorOptions, ComponentType, SvelteComponent, Component } from 'svelte' */
/**
* Takes the same options as a Svelte 4 component and the component function and returns a Svelte 4 compatible component.
*
* @deprecated Use this only as a temporary solution to migrate your imperative component code to Svelte 5.
*
* @template {Record<string, any>} Props
* @template {Record<string, any>} Exports
* @template {Record<string, any>} Events
* @template {Record<string, any>} Slots
*
* @param {ComponentConstructorOptions<Props> & {
* 	component: ComponentType<SvelteComponent<Props, Events, Slots>> | Component<Props>;
* }} options
* @returns {SvelteComponent<Props, Events, Slots> & Exports}
*/
function createClassComponent(options) {
	return new Svelte4Component(options);
}
var _events = /* @__PURE__ */ new WeakMap();
var _instance = /* @__PURE__ */ new WeakMap();
/**
* Support using the component as both a class and function during the transition period
* @typedef  {{new (o: ComponentConstructorOptions): SvelteComponent;(...args: Parameters<Component<Record<string, any>>>): ReturnType<Component<Record<string, any>, Record<string, any>>>;}} LegacyComponentType
*/
var Svelte4Component = class {
	/**
	* @param {ComponentConstructorOptions & {
	*  component: any;
	* }} options
	*/
	constructor(options) {
		_classPrivateFieldInitSpec(this, _events, void 0);
		_classPrivateFieldInitSpec(this, _instance, void 0);
		var sources = /* @__PURE__ */ new Map();
		/**
		* @param {string | symbol} key
		* @param {unknown} value
		*/
		var add_source = (key, value) => {
			var s = /* @__PURE__ */ mutable_source(value, false, false);
			sources.set(key, s);
			return s;
		};
		const props = new Proxy({
			...options.props || {},
			$$events: {}
		}, {
			get(target, prop) {
				return get$8(sources.get(prop) ?? add_source(prop, Reflect.get(target, prop)));
			},
			has(target, prop) {
				if (prop === LEGACY_PROPS) return true;
				get$8(sources.get(prop) ?? add_source(prop, Reflect.get(target, prop)));
				return Reflect.has(target, prop);
			},
			set(target, prop, value) {
				set$4(sources.get(prop) ?? add_source(prop, value), value);
				return Reflect.set(target, prop, value);
			}
		});
		_classPrivateFieldSet2(_instance, this, (options.hydrate ? hydrate : mount)(options.component, {
			target: options.target,
			anchor: options.anchor,
			props,
			context: options.context,
			intro: options.intro ?? false,
			recover: options.recover,
			transformError: options.transformError
		}));
		if (!async_mode_flag && (!options?.props?.$$host || options.sync === false)) flushSync();
		_classPrivateFieldSet2(_events, this, props.$$events);
		for (const key of Object.keys(_classPrivateFieldGet2(_instance, this))) {
			if (key === "$set" || key === "$destroy" || key === "$on") continue;
			define_property(this, key, {
				get() {
					return _classPrivateFieldGet2(_instance, this)[key];
				},
				/** @param {any} value */
				set(value) {
					_classPrivateFieldGet2(_instance, this)[key] = value;
				},
				enumerable: true
			});
		}
		_classPrivateFieldGet2(_instance, this).$set = (next) => {
			Object.assign(props, next);
		};
		_classPrivateFieldGet2(_instance, this).$destroy = () => {
			unmount(_classPrivateFieldGet2(_instance, this));
		};
	}
	/** @param {Record<string, any>} props */
	$set(props) {
		_classPrivateFieldGet2(_instance, this).$set(props);
	}
	/**
	* @param {string} event
	* @param {(...args: any[]) => any} callback
	* @returns {any}
	*/
	$on(event, callback) {
		_classPrivateFieldGet2(_events, this)[event] = _classPrivateFieldGet2(_events, this)[event] || [];
		/** @param {any[]} args */
		const cb = (...args) => callback.call(this, ...args);
		_classPrivateFieldGet2(_events, this)[event].push(cb);
		return () => {
			_classPrivateFieldGet2(_events, this)[event] = _classPrivateFieldGet2(_events, this)[event].filter(
				/** @param {any} fn */
				(fn) => fn !== cb
			);
		};
	}
	$destroy() {
		_classPrivateFieldGet2(_instance, this).$destroy();
	}
};
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.55.7/node_modules/svelte/src/internal/client/dom/elements/custom-element.js
/**
* @typedef {Object} CustomElementPropDefinition
* @property {string} [attribute]
* @property {boolean} [reflect]
* @property {'String'|'Boolean'|'Number'|'Array'|'Object'} [type]
*/
/** @type {any} */
var SvelteElement;
if (typeof HTMLElement === "function") SvelteElement = class extends HTMLElement {
	/**
	* @param {*} $$componentCtor
	* @param {*} $$slots
	* @param {ShadowRootInit | undefined} shadow_root_init
	*/
	constructor($$componentCtor, $$slots, shadow_root_init) {
		super();
		_defineProperty(
			this,
			/** The Svelte component constructor */
			"$$ctor",
			void 0
		);
		_defineProperty(
			this,
			/** Slots */
			"$$s",
			void 0
		);
		_defineProperty(
			this,
			/** @type {any} The Svelte component instance */
			"$$c",
			void 0
		);
		_defineProperty(
			this,
			/** Whether or not the custom element is connected */
			"$$cn",
			false
		);
		_defineProperty(
			this,
			/** @type {Record<string, any>} Component props data */
			"$$d",
			{}
		);
		_defineProperty(
			this,
			/** `true` if currently in the process of reflecting component props back to attributes */
			"$$r",
			false
		);
		_defineProperty(
			this,
			/** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
			"$$p_d",
			{}
		);
		_defineProperty(
			this,
			/** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
			"$$l",
			{}
		);
		_defineProperty(
			this,
			/** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
			"$$l_u",
			/* @__PURE__ */ new Map()
		);
		_defineProperty(
			this,
			/** @type {any} The managed render effect for reflecting attributes */
			"$$me",
			void 0
		);
		_defineProperty(
			this,
			/** @type {ShadowRoot | null} The ShadowRoot of the custom element */
			"$$shadowRoot",
			null
		);
		this.$$ctor = $$componentCtor;
		this.$$s = $$slots;
		if (shadow_root_init) this.$$shadowRoot = this.attachShadow(shadow_root_init);
	}
	/**
	* @param {string} type
	* @param {EventListenerOrEventListenerObject} listener
	* @param {boolean | AddEventListenerOptions} [options]
	*/
	addEventListener(type, listener, options) {
		this.$$l[type] = this.$$l[type] || [];
		this.$$l[type].push(listener);
		if (this.$$c) {
			const unsub = this.$$c.$on(type, listener);
			this.$$l_u.set(listener, unsub);
		}
		super.addEventListener(type, listener, options);
	}
	/**
	* @param {string} type
	* @param {EventListenerOrEventListenerObject} listener
	* @param {boolean | AddEventListenerOptions} [options]
	*/
	removeEventListener(type, listener, options) {
		super.removeEventListener(type, listener, options);
		if (this.$$c) {
			const unsub = this.$$l_u.get(listener);
			if (unsub) {
				unsub();
				this.$$l_u.delete(listener);
			}
		}
	}
	async connectedCallback() {
		this.$$cn = true;
		if (!this.$$c) {
			await Promise.resolve();
			if (!this.$$cn || this.$$c) return;
			/** @param {string} name */
			function create_slot(name) {
				/**
				* @param {Element} anchor
				*/
				return (anchor) => {
					const slot = create_element("slot");
					if (name !== "default") slot.name = name;
					append$2(anchor, slot);
				};
			}
			/** @type {Record<string, any>} */
			const $$slots = {};
			const existing_slots = get_custom_elements_slots(this);
			for (const name of this.$$s) if (name in existing_slots) if (name === "default" && !this.$$d.children) {
				this.$$d.children = create_slot(name);
				$$slots.default = true;
			} else $$slots[name] = create_slot(name);
			for (const attribute of this.attributes) {
				const name = this.$$g_p(attribute.name);
				if (!(name in this.$$d)) this.$$d[name] = get_custom_element_value(name, attribute.value, this.$$p_d, "toProp");
			}
			for (const key in this.$$p_d) if (!(key in this.$$d) && this[key] !== void 0) {
				this.$$d[key] = this[key];
				delete this[key];
			}
			this.$$c = createClassComponent({
				component: this.$$ctor,
				target: this.$$shadowRoot || this,
				props: {
					...this.$$d,
					$$slots,
					$$host: this
				}
			});
			this.$$me = effect_root(() => {
				render_effect(() => {
					this.$$r = true;
					for (const key of object_keys(this.$$c)) {
						if (!this.$$p_d[key]?.reflect) continue;
						this.$$d[key] = this.$$c[key];
						const attribute_value = get_custom_element_value(key, this.$$d[key], this.$$p_d, "toAttribute");
						if (attribute_value == null) this.removeAttribute(this.$$p_d[key].attribute || key);
						else this.setAttribute(this.$$p_d[key].attribute || key, attribute_value);
					}
					this.$$r = false;
				});
			});
			for (const type in this.$$l) for (const listener of this.$$l[type]) {
				const unsub = this.$$c.$on(type, listener);
				this.$$l_u.set(listener, unsub);
			}
			this.$$l = {};
		}
	}
	/**
	* @param {string} attr
	* @param {string} _oldValue
	* @param {string} newValue
	*/
	attributeChangedCallback(attr, _oldValue, newValue) {
		if (this.$$r) return;
		attr = this.$$g_p(attr);
		this.$$d[attr] = get_custom_element_value(attr, newValue, this.$$p_d, "toProp");
		this.$$c?.$set({ [attr]: this.$$d[attr] });
	}
	disconnectedCallback() {
		this.$$cn = false;
		Promise.resolve().then(() => {
			if (!this.$$cn && this.$$c) {
				this.$$c.$destroy();
				this.$$me();
				this.$$c = void 0;
			}
		});
	}
	/**
	* @param {string} attribute_name
	*/
	$$g_p(attribute_name) {
		return object_keys(this.$$p_d).find((key) => this.$$p_d[key].attribute === attribute_name || !this.$$p_d[key].attribute && key.toLowerCase() === attribute_name) || attribute_name;
	}
};
/**
* @param {string} prop
* @param {any} value
* @param {Record<string, CustomElementPropDefinition>} props_definition
* @param {'toAttribute' | 'toProp'} [transform]
*/
function get_custom_element_value(prop, value, props_definition, transform) {
	const type = props_definition[prop]?.type;
	value = type === "Boolean" && typeof value !== "boolean" ? value != null : value;
	if (!transform || !props_definition[prop]) return value;
	else if (transform === "toAttribute") switch (type) {
		case "Object":
		case "Array": return value == null ? null : JSON.stringify(value);
		case "Boolean": return value ? "" : null;
		case "Number": return value == null ? null : value;
		default: return value;
	}
	else switch (type) {
		case "Object":
		case "Array": return value && JSON.parse(value);
		case "Boolean": return value;
		case "Number": return value != null ? +value : value;
		default: return value;
	}
}
/**
* @param {HTMLElement} element
*/
function get_custom_elements_slots(element) {
	/** @type {Record<string, true>} */
	const result = {};
	element.childNodes.forEach((node) => {
		result[node.slot || "default"] = true;
	});
	return result;
}
/**
* @internal
*
* Turn a Svelte component into a custom element.
* @param {any} Component  A Svelte component function
* @param {Record<string, CustomElementPropDefinition>} props_definition  The props to observe
* @param {string[]} slots  The slots to create
* @param {string[]} exports  Explicitly exported values, other than props
* @param {ShadowRootInit | undefined} shadow_root_init  Options passed to shadow DOM constructor
* @param {(ce: new () => HTMLElement) => new () => HTMLElement} [extend]
*/
function create_custom_element(Component, props_definition, slots, exports, shadow_root_init, extend) {
	let Class = class extends SvelteElement {
		constructor() {
			super(Component, slots, shadow_root_init);
			this.$$p_d = props_definition;
		}
		static get observedAttributes() {
			return object_keys(props_definition).map((key) => (props_definition[key].attribute || key).toLowerCase());
		}
	};
	object_keys(props_definition).forEach((prop) => {
		define_property(Class.prototype, prop, {
			get() {
				return this.$$c && prop in this.$$c ? this.$$c[prop] : this.$$d[prop];
			},
			set(value) {
				value = get_custom_element_value(prop, value, props_definition);
				this.$$d[prop] = value;
				var component = this.$$c;
				if (component) if (get_descriptor(component, prop)?.get) component[prop] = value;
				else component.$set({ [prop]: value });
			}
		});
	});
	exports.forEach((property) => {
		define_property(Class.prototype, property, { get() {
			return this.$$c?.[property];
		} });
	});
	if (extend) Class = extend(Class);
	Component.element = Class;
	return Class;
}
//#endregion
//#region src/lib/fourier/widget.css?inline
var widget_default = "/*! tailwindcss v4.3.0 | MIT License | https://tailwindcss.com */\n@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;--color-red-300:oklch(80.8% .114 19.571);--color-red-400:oklch(70.4% .191 22.216);--color-yellow-300:oklch(90.5% .182 98.111);--color-yellow-400:oklch(85.2% .199 91.936);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-700:oklch(48.8% .243 264.376);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height:calc(1.5 / 1);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height:calc(2.25 / 1.875);--font-weight-medium:500;--font-weight-bold:700;--tracking-tight:-.025em;--tracking-widest:.1em;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--radius-2xl:1rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-none{pointer-events:none}.visible{visibility:visible}.absolute{position:absolute}.relative{position:relative}.static{position:static}.inset-0{inset:calc(var(--spacing) * 0)}.mx-3{margin-inline:calc(var(--spacing) * 3)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.block{display:block}.contents{display:contents}.flex{display:flex}.grid{display:grid}.h-2{height:calc(var(--spacing) * 2)}.h-12{height:calc(var(--spacing) * 12)}.h-full{height:100%}.w-12{width:calc(var(--spacing) * 12)}.w-16{width:calc(var(--spacing) * 16)}.w-full{width:100%}.max-w-xs{max-width:var(--container-xs)}.flex-1{flex:1}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.cursor-pointer{cursor:pointer}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 5) * calc(1 - var(--tw-space-y-reverse)))}.overflow-hidden{overflow:hidden}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-red-400{border-color:var(--color-red-400)}.border-white\\/20{border-color:#fff3}@supports (color:color-mix(in lab, red, red)){.border-white\\/20{border-color:color-mix(in oklab, var(--color-white) 20%, transparent)}}.bg-black\\/20{background-color:#0003}@supports (color:color-mix(in lab, red, red)){.bg-black\\/20{background-color:color-mix(in oklab, var(--color-black) 20%, transparent)}}.bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab, red, red)){.bg-black\\/30{background-color:color-mix(in oklab, var(--color-black) 30%, transparent)}}.bg-white{background-color:var(--color-white)}.bg-white\\/10{background-color:#ffffff1a}@supports (color:color-mix(in lab, red, red)){.bg-white\\/10{background-color:color-mix(in oklab, var(--color-white) 10%, transparent)}}.bg-white\\/15{background-color:#ffffff26}@supports (color:color-mix(in lab, red, red)){.bg-white\\/15{background-color:color-mix(in oklab, var(--color-white) 15%, transparent)}}.bg-yellow-400{background-color:var(--color-yellow-400)}.p-0\\.5{padding:calc(var(--spacing) * .5)}.p-4{padding:calc(var(--spacing) * 4)}.px-1{padding-inline:calc(var(--spacing) * 1)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-5{padding-inline:calc(var(--spacing) * 5)}.px-6{padding-inline:calc(var(--spacing) * 6)}.py-1{padding-block:calc(var(--spacing) * 1)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-3{padding-block:calc(var(--spacing) * 3)}.pt-4{padding-top:calc(var(--spacing) * 4)}.pb-2{padding-bottom:calc(var(--spacing) * 2)}.text-center{text-align:center}.font-mono{font-family:var(--font-mono)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.whitespace-nowrap{white-space:nowrap}.text-black{color:var(--color-black)}.text-blue-700{color:var(--color-blue-700)}.text-red-300{color:var(--color-red-300)}.text-white{color:var(--color-white)}.text-white\\/40{color:#fff6}@supports (color:color-mix(in lab, red, red)){.text-white\\/40{color:color-mix(in oklab, var(--color-white) 40%, transparent)}}.text-white\\/70{color:#ffffffb3}@supports (color:color-mix(in lab, red, red)){.text-white\\/70{color:color-mix(in oklab, var(--color-white) 70%, transparent)}}.text-yellow-300{color:var(--color-yellow-300)}.uppercase{text-transform:uppercase}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.placeholder-white\\/30::placeholder{color:#ffffff4d}@supports (color:color-mix(in lab, red, red)){.placeholder-white\\/30::placeholder{color:color-mix(in oklab, var(--color-white) 30%, transparent)}}.accent-yellow-400{accent-color:var(--color-yellow-400)}.opacity-40{opacity:.4}.opacity-70{opacity:.7}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.select-none{-webkit-user-select:none;user-select:none}@media (hover:hover){.hover\\:bg-blue-100:hover{background-color:var(--color-blue-100)}.hover\\:bg-white\\/20:hover{background-color:#fff3}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-white\\/20:hover{background-color:color-mix(in oklab, var(--color-white) 20%, transparent)}}.hover\\:bg-white\\/25:hover{background-color:#ffffff40}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-white\\/25:hover{background-color:color-mix(in oklab, var(--color-white) 25%, transparent)}}.hover\\:bg-yellow-300:hover{background-color:var(--color-yellow-300)}.hover\\:text-white:hover{color:var(--color-white)}.hover\\:opacity-80:hover{opacity:.8}}.focus\\:border-yellow-400:focus{border-color:var(--color-yellow-400)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.active\\:scale-95:active{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x) var(--tw-scale-y)}}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-tracking{syntax:\"*\";inherits:false}@property --tw-ordinal{syntax:\"*\";inherits:false}@property --tw-slashed-zero{syntax:\"*\";inherits:false}@property --tw-numeric-figure{syntax:\"*\";inherits:false}@property --tw-numeric-spacing{syntax:\"*\";inherits:false}@property --tw-numeric-fraction{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-backdrop-blur{syntax:\"*\";inherits:false}@property --tw-backdrop-brightness{syntax:\"*\";inherits:false}@property --tw-backdrop-contrast{syntax:\"*\";inherits:false}@property --tw-backdrop-grayscale{syntax:\"*\";inherits:false}@property --tw-backdrop-hue-rotate{syntax:\"*\";inherits:false}@property --tw-backdrop-invert{syntax:\"*\";inherits:false}@property --tw-backdrop-opacity{syntax:\"*\";inherits:false}@property --tw-backdrop-saturate{syntax:\"*\";inherits:false}@property --tw-backdrop-sepia{syntax:\"*\";inherits:false}@property --tw-scale-x{syntax:\"*\";inherits:false;initial-value:1}@property --tw-scale-y{syntax:\"*\";inherits:false;initial-value:1}@property --tw-scale-z{syntax:\"*\";inherits:false;initial-value:1}";
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/Function.js
/**
* Tests if a value is a `function`.
*
* @example
* ```ts
* import * as assert from "node:assert"
* import { isFunction } from "effect/Predicate"
*
* assert.deepStrictEqual(isFunction(isFunction), true)
* assert.deepStrictEqual(isFunction("function"), false)
* ```
*
* @category guards
* @since 2.0.0
*/
var isFunction$1 = (input) => typeof input === "function";
/**
* Creates a function that can be used in a data-last (aka `pipe`able) or
* data-first style.
*
* The first parameter to `dual` is either the arity of the uncurried function
* or a predicate that determines if the function is being used in a data-first
* or data-last style.
*
* Using the arity is the most common use case, but there are some cases where
* you may want to use a predicate. For example, if you have a function that
* takes an optional argument, you can use a predicate to determine if the
* function is being used in a data-first or data-last style.
*
* You can pass either the arity of the uncurried function or a predicate
* which determines if the function is being used in a data-first or
* data-last style.
*
* **Example** (Using arity to determine data-first or data-last style)
*
* ```ts
* import { dual, pipe } from "effect/Function"
*
* const sum = dual<
*   (that: number) => (self: number) => number,
*   (self: number, that: number) => number
* >(2, (self, that) => self + that)
*
* console.log(sum(2, 3)) // 5
* console.log(pipe(2, sum(3))) // 5
* ```
*
* **Example** (Using call signatures to define the overloads)
*
* ```ts
* import { dual, pipe } from "effect/Function"
*
* const sum: {
*   (that: number): (self: number) => number
*   (self: number, that: number): number
* } = dual(2, (self: number, that: number): number => self + that)
*
* console.log(sum(2, 3)) // 5
* console.log(pipe(2, sum(3))) // 5
* ```
*
* **Example** (Using a predicate to determine data-first or data-last style)
*
* ```ts
* import { dual, pipe } from "effect/Function"
*
* const sum = dual<
*   (that: number) => (self: number) => number,
*   (self: number, that: number) => number
* >(
*   (args) => args.length === 2,
*   (self, that) => self + that
* )
*
* console.log(sum(2, 3)) // 5
* console.log(pipe(2, sum(3))) // 5
* ```
*
* @since 2.0.0
*/
var dual = function(arity, body) {
	if (typeof arity === "function") return function() {
		if (arity(arguments)) return body.apply(this, arguments);
		return (self) => body(self, ...arguments);
	};
	switch (arity) {
		case 0:
		case 1: throw new RangeError(`Invalid arity ${arity}`);
		case 2: return function(a, b) {
			if (arguments.length >= 2) return body(a, b);
			return function(self) {
				return body(self, a);
			};
		};
		case 3: return function(a, b, c) {
			if (arguments.length >= 3) return body(a, b, c);
			return function(self) {
				return body(self, a, b);
			};
		};
		case 4: return function(a, b, c, d) {
			if (arguments.length >= 4) return body(a, b, c, d);
			return function(self) {
				return body(self, a, b, c);
			};
		};
		case 5: return function(a, b, c, d, e) {
			if (arguments.length >= 5) return body(a, b, c, d, e);
			return function(self) {
				return body(self, a, b, c, d);
			};
		};
		default: return function() {
			if (arguments.length >= arity) return body.apply(this, arguments);
			const args = arguments;
			return function(self) {
				return body(self, ...args);
			};
		};
	}
};
/**
* The identity function, i.e. A function that returns its input argument.
*
* @example
* ```ts
* import * as assert from "node:assert"
* import { identity } from "effect/Function"
*
* assert.deepStrictEqual(identity(5), 5)
* ```
*
* @since 2.0.0
*/
var identity = (a) => a;
/**
* Creates a constant value that never changes.
*
* This is useful when you want to pass a value to a higher-order function (a function that takes another function as its argument)
* and want that inner function to always use the same value, no matter how many times it is called.
*
* @example
* ```ts
* import * as assert from "node:assert"
* import { constant } from "effect/Function"
*
* const constNull = constant(null)
*
* assert.deepStrictEqual(constNull(), null)
* assert.deepStrictEqual(constNull(), null)
* ```
*
* @since 2.0.0
*/
var constant = (value) => () => value;
/**
* A thunk that returns always `true`.
*
* @example
* ```ts
* import * as assert from "node:assert"
* import { constTrue } from "effect/Function"
*
* assert.deepStrictEqual(constTrue(), true)
* ```
*
* @since 2.0.0
*/
var constTrue = /* @__PURE__ */ constant(true);
/**
* A thunk that returns always `false`.
*
* @example
* ```ts
* import * as assert from "node:assert"
* import { constFalse } from "effect/Function"
*
* assert.deepStrictEqual(constFalse(), false)
* ```
*
* @since 2.0.0
*/
var constFalse = /* @__PURE__ */ constant(false);
/**
* A thunk that returns always `undefined`.
*
* @example
* ```ts
* import * as assert from "node:assert"
* import { constUndefined } from "effect/Function"
*
* assert.deepStrictEqual(constUndefined(), undefined)
* ```
*
* @since 2.0.0
*/
var constUndefined = /* @__PURE__ */ constant(void 0);
/**
* A thunk that returns always `void`.
*
* @example
* ```ts
* import * as assert from "node:assert"
* import { constVoid } from "effect/Function"
*
* assert.deepStrictEqual(constVoid(), undefined)
* ```
*
* @since 2.0.0
*/
var constVoid = constUndefined;
function pipe(a, ab, bc, cd, de, ef, fg, gh, hi) {
	switch (arguments.length) {
		case 1: return a;
		case 2: return ab(a);
		case 3: return bc(ab(a));
		case 4: return cd(bc(ab(a)));
		case 5: return de(cd(bc(ab(a))));
		case 6: return ef(de(cd(bc(ab(a)))));
		case 7: return fg(ef(de(cd(bc(ab(a))))));
		case 8: return gh(fg(ef(de(cd(bc(ab(a)))))));
		case 9: return hi(gh(fg(ef(de(cd(bc(ab(a))))))));
		default: {
			let ret = arguments[0];
			for (let i = 1; i < arguments.length; i++) ret = arguments[i](ret);
			return ret;
		}
	}
}
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/Equivalence.js
/**
* This module provides an implementation of the `Equivalence` type class, which defines a binary relation
* that is reflexive, symmetric, and transitive. In other words, it defines a notion of equivalence between values of a certain type.
* These properties are also known in mathematics as an "equivalence relation".
*
* @since 2.0.0
*/
/**
* @category constructors
* @since 2.0.0
*/
var make$22 = (isEquivalent) => (self, that) => self === that || isEquivalent(self, that);
/**
* @category mapping
* @since 2.0.0
*/
var mapInput$1 = /* @__PURE__ */ dual(2, (self, f) => make$22((x, y) => self(f(x), f(y))));
/**
* Creates a new `Equivalence` for an array of values based on a given `Equivalence` for the elements of the array.
*
* @category combinators
* @since 2.0.0
*/
var array$1 = (item) => make$22((self, that) => {
	if (self.length !== that.length) return false;
	for (let i = 0; i < self.length; i++) if (!item(self[i], that[i])) return false;
	return true;
});
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/GlobalValue.js
/**
* The `GlobalValue` module ensures that a single instance of a value is created globally,
* even when modules are imported multiple times (e.g., due to mixing CommonJS and ESM builds)
* or during hot-reloading in development environments like Next.js or Remix.
*
* It achieves this by using a versioned global store, identified by a unique `Symbol` tied to
* the current version of the `effect` library. The store holds values that are keyed by an identifier,
* allowing the reuse of previously computed instances across imports or reloads.
*
* This pattern is particularly useful in scenarios where frequent reloading can cause services or
* single-instance objects to be recreated unnecessarily, such as in development environments with hot-reloading.
*
* @since 2.0.0
*/
var globalStoreId = `effect/GlobalValue`;
var globalStore;
/**
* Retrieves or computes a global value associated with the given `id`. If the value for this `id`
* has already been computed, it will be returned from the global store. If it does not exist yet,
* the provided `compute` function will be executed to compute the value, store it, and then return it.
*
* This ensures that even in cases where the module is imported multiple times (e.g., in mixed environments
* like CommonJS and ESM, or during hot-reloading in development), the value is computed only once and reused
* thereafter.
*
* @example
* ```ts
* import { globalValue } from "effect/GlobalValue"
*
* // This cache will persist as long as the module is running,
* // even if reloaded or imported elsewhere
* const myCache = globalValue(
*   Symbol.for("myCache"),
*   () => new WeakMap<object, number>()
* )
* ```
*
* @since 2.0.0
*/
var globalValue = (id, compute) => {
	if (!globalStore) {
		var _globalThis;
		(_globalThis = globalThis)[globalStoreId] ?? (_globalThis[globalStoreId] = /* @__PURE__ */ new Map());
		globalStore = globalThis[globalStoreId];
	}
	if (!globalStore.has(id)) globalStore.set(id, compute());
	return globalStore.get(id);
};
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/Predicate.js
/**
* This module provides a collection of functions for working with predicates and refinements.
*
* A `Predicate<A>` is a function that takes a value of type `A` and returns a boolean.
* It is used to check if a value satisfies a certain condition.
*
* A `Refinement<A, B>` is a special type of predicate that not only checks a condition
* but also provides a type guard, allowing TypeScript to narrow the type of the input
* value from `A` to a more specific type `B` within a conditional block.
*
* The module includes:
* - Basic predicates and refinements for common types (e.g., `isString`, `isNumber`).
* - Combinators to create new predicates from existing ones (e.g., `and`, `or`, `not`).
* - Advanced combinators for working with data structures (e.g., `tuple`, `struct`).
* - Type-level utilities for inspecting predicate and refinement types.
*
* @since 2.0.0
*/
/**
* A refinement that checks if a value is a `string`.
*
* @example
* ```ts
* import * as assert from "node:assert"
* import { isString } from "effect/Predicate"
*
* assert.strictEqual(isString("hello"), true)
* assert.strictEqual(isString(""), true)
*
* assert.strictEqual(isString(123), false)
* assert.strictEqual(isString(null), false)
* ```
*
* @category guards
* @since 2.0.0
*/
var isString = (input) => typeof input === "string";
/**
* A refinement that checks if a value is a `number`.
*
* @example
* ```ts
* import * as assert from "node:assert"
* import { isNumber } from "effect/Predicate"
*
* assert.strictEqual(isNumber(123), true)
* assert.strictEqual(isNumber(0), true)
* assert.strictEqual(isNumber(-1.5), true)
* assert.strictEqual(isNumber(NaN), true)
*
* assert.strictEqual(isNumber("123"), false)
* ```
*
* @category guards
* @since 2.0.0
*/
var isNumber = (input) => typeof input === "number";
/**
* A refinement that checks if a value is a `bigint`.
*
* @example
* ```ts
* import * as assert from "node:assert"
* import { isBigInt } from "effect/Predicate"
*
* assert.strictEqual(isBigInt(1n), true)
*
* assert.strictEqual(isBigInt(1), false)
* assert.strictEqual(isBigInt("1"), false)
* ```
*
* @category guards
* @since 2.0.0
*/
var isBigInt = (input) => typeof input === "bigint";
/**
* A refinement that checks if a value is a `Function`.
*
* @example
* ```ts
* import * as assert from "node:assert"
* import { isFunction } from "effect/Predicate"
*
* assert.strictEqual(isFunction(() => {}), true)
* assert.strictEqual(isFunction(isFunction), true)
*
* assert.strictEqual(isFunction("function"), false)
* ```
*
* @category guards
* @since 2.0.0
*/
var isFunction = isFunction$1;
/**
* Checks if the input is an object or an array.
* @internal
*/
var isRecordOrArray = (input) => typeof input === "object" && input !== null;
/**
* A refinement that checks if a value is an `object`. Note that in JavaScript,
* arrays and functions are also considered objects.
*
* @example
* ```ts
* import * as assert from "node:assert"
* import { isObject } from "effect/Predicate"
*
* assert.strictEqual(isObject({}), true)
* assert.strictEqual(isObject([]), true)
* assert.strictEqual(isObject(() => {}), true)
*
* assert.strictEqual(isObject(null), false)
* assert.strictEqual(isObject("hello"), false)
* ```
*
* @category guards
* @since 2.0.0
* @see isRecord to check for plain objects (excluding arrays and functions).
*/
var isObject = (input) => isRecordOrArray(input) || isFunction(input);
/**
* A refinement that checks if a value is an object-like value and has a specific property key.
*
* @example
* ```ts
* import * as assert from "node:assert"
* import { hasProperty } from "effect/Predicate"
*
* assert.strictEqual(hasProperty({ a: 1 }, "a"), true)
* assert.strictEqual(hasProperty({ a: 1 }, "b"), false)
*
* const value: unknown = { name: "Alice" };
* if (hasProperty(value, "name")) {
*   // The type of `value` is narrowed to `{ name: unknown }`
*   // and we can safely access `value.name`
*   console.log(value.name)
* }
* ```
*
* @category guards
* @since 2.0.0
*/
var hasProperty = /* @__PURE__ */ dual(2, (self, property) => isObject(self) && property in self);
/**
* A refinement that checks if a value is an object with a `_tag` property
* that matches the given tag. This is a powerful tool for working with
* discriminated union types.
*
* @example
* ```ts
* import * as assert from "node:assert"
* import { isTagged } from "effect/Predicate"
*
* type Shape = { _tag: "circle"; radius: number } | { _tag: "square"; side: number }
*
* const isCircle = isTagged("circle")
*
* const shape1: Shape = { _tag: "circle", radius: 10 }
* const shape2: Shape = { _tag: "square", side: 5 }
*
* assert.strictEqual(isCircle(shape1), true)
* assert.strictEqual(isCircle(shape2), false)
*
* if (isCircle(shape1)) {
*   // shape1 is now narrowed to { _tag: "circle"; radius: number }
*   assert.strictEqual(shape1.radius, 10)
* }
* ```
*
* @category guards
* @since 2.0.0
*/
var isTagged = /* @__PURE__ */ dual(2, (self, tag) => hasProperty(self, "_tag") && self["_tag"] === tag);
/**
* A refinement that checks if a value is either `null` or `undefined`.
*
* @example
* ```ts
* import * as assert from "node:assert"
* import { isNullable } from "effect/Predicate"
*
* assert.strictEqual(isNullable(null), true)
* assert.strictEqual(isNullable(undefined), true)
*
* assert.strictEqual(isNullable(0), false)
* assert.strictEqual(isNullable(""), false)
* ```
*
* @category guards
* @since 2.0.0
* @see isNotNullable
*/
var isNullable = (input) => input === null || input === void 0;
/**
* A refinement that checks if a value is `PromiseLike`. It performs a duck-typing
* check for a `.then` method.
*
* @example
* ```ts
* import * as assert from "node:assert"
* import { isPromiseLike } from "effect/Predicate"
*
* assert.strictEqual(isPromiseLike(Promise.resolve(1)), true)
* assert.strictEqual(isPromiseLike({ then: () => {} }), true)
*
* assert.strictEqual(isPromiseLike({}), false)
* ```
*
* @category guards
* @since 2.0.0
* @see isPromise
*/
var isPromiseLike = (input) => hasProperty(input, "then") && isFunction(input.then);
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/errors.js
/**
* @since 2.0.0
*/
/** @internal */
var getBugErrorMessage = (message) => `BUG: ${message} - please report an issue at https://github.com/Effect-TS/effect/issues`, _Symbol$iterator2$1 = Symbol.iterator;
/**
* @category constructors
* @since 2.0.0
*/
var SingleShotGen$1 = class SingleShotGen$1 {
	constructor(self) {
		_defineProperty(this, "self", void 0);
		_defineProperty(this, "called", false);
		this.self = self;
	}
	/**
	* @since 2.0.0
	*/
	next(a) {
		return this.called ? {
			value: a,
			done: true
		} : (this.called = true, {
			value: this.self,
			done: false
		});
	}
	/**
	* @since 2.0.0
	*/
	return(a) {
		return {
			value: a,
			done: true
		};
	}
	/**
	* @since 2.0.0
	*/
	throw(e) {
		throw e;
	}
	/**
	* @since 2.0.0
	*/
	[_Symbol$iterator2$1]() {
		return new SingleShotGen$1(this.self);
	}
};
var defaultIncHi = 335903614;
var defaultIncLo = 4150755663;
var MUL_HI = 1481765933;
var MUL_LO = 1284865837;
var BIT_53 = 9007199254740992;
var BIT_27 = 134217728;
/**
* PCG is a family of simple fast space-efficient statistically good algorithms
* for random number generation. Unlike many general-purpose RNGs, they are also
* hard to predict.
*
* @category model
* @since 2.0.0
*/
var PCGRandom = class {
	constructor(seedHi, seedLo, incHi, incLo) {
		_defineProperty(this, "_state", void 0);
		if (isNullable(seedLo) && isNullable(seedHi)) {
			seedLo = Math.random() * 4294967295 >>> 0;
			seedHi = 0;
		} else if (isNullable(seedLo)) {
			seedLo = seedHi;
			seedHi = 0;
		}
		if (isNullable(incLo) && isNullable(incHi)) {
			incLo = this._state ? this._state[3] : defaultIncLo;
			incHi = this._state ? this._state[2] : defaultIncHi;
		} else if (isNullable(incLo)) {
			incLo = incHi;
			incHi = 0;
		}
		this._state = new Int32Array([
			0,
			0,
			incHi >>> 0,
			((incLo || 0) | 1) >>> 0
		]);
		this._next();
		add64(this._state, this._state[0], this._state[1], seedHi >>> 0, seedLo >>> 0);
		this._next();
		return this;
	}
	/**
	* Returns a copy of the internal state of this random number generator as a
	* JavaScript Array.
	*
	* @category getters
	* @since 2.0.0
	*/
	getState() {
		return [
			this._state[0],
			this._state[1],
			this._state[2],
			this._state[3]
		];
	}
	/**
	* Restore state previously retrieved using `getState()`.
	*
	* @since 2.0.0
	*/
	setState(state) {
		this._state[0] = state[0];
		this._state[1] = state[1];
		this._state[2] = state[2];
		this._state[3] = state[3] | 1;
	}
	/**
	* Get a uniformly distributed 32 bit integer between [0, max).
	*
	* @category getter
	* @since 2.0.0
	*/
	integer(max) {
		return Math.round(this.number() * Number.MAX_SAFE_INTEGER) % max;
	}
	/**
	* Get a uniformly distributed IEEE-754 double between 0.0 and 1.0, with
	* 53 bits of precision (every bit of the mantissa is randomized).
	*
	* @category getters
	* @since 2.0.0
	*/
	number() {
		const hi = (this._next() & 67108863) * 1;
		const lo = (this._next() & 134217727) * 1;
		return (hi * BIT_27 + lo) / BIT_53;
	}
	/** @internal */
	_next() {
		const oldHi = this._state[0] >>> 0;
		const oldLo = this._state[1] >>> 0;
		mul64(this._state, oldHi, oldLo, MUL_HI, MUL_LO);
		add64(this._state, this._state[0], this._state[1], this._state[2], this._state[3]);
		let xsHi = oldHi >>> 18;
		let xsLo = (oldLo >>> 18 | oldHi << 14) >>> 0;
		xsHi = (xsHi ^ oldHi) >>> 0;
		xsLo = (xsLo ^ oldLo) >>> 0;
		const xorshifted = (xsLo >>> 27 | xsHi << 5) >>> 0;
		const rot = oldHi >>> 27;
		const rot2 = (-rot >>> 0 & 31) >>> 0;
		return (xorshifted >>> rot | xorshifted << rot2) >>> 0;
	}
};
function mul64(out, aHi, aLo, bHi, bLo) {
	let c1 = (aLo >>> 16) * (bLo & 65535) >>> 0;
	let c0 = (aLo & 65535) * (bLo >>> 16) >>> 0;
	let lo = (aLo & 65535) * (bLo & 65535) >>> 0;
	let hi = (aLo >>> 16) * (bLo >>> 16) + ((c0 >>> 16) + (c1 >>> 16)) >>> 0;
	c0 = c0 << 16 >>> 0;
	lo = lo + c0 >>> 0;
	if (lo >>> 0 < c0 >>> 0) hi = hi + 1 >>> 0;
	c1 = c1 << 16 >>> 0;
	lo = lo + c1 >>> 0;
	if (lo >>> 0 < c1 >>> 0) hi = hi + 1 >>> 0;
	hi = hi + Math.imul(aLo, bHi) >>> 0;
	hi = hi + Math.imul(aHi, bLo) >>> 0;
	out[0] = hi;
	out[1] = lo;
}
function add64(out, aHi, aLo, bHi, bLo) {
	let hi = aHi + bHi >>> 0;
	const lo = aLo + bLo >>> 0;
	if (lo >>> 0 < aLo >>> 0) hi = hi + 1 | 0;
	out[0] = hi;
	out[1] = lo;
}
/**
* @since 3.0.6
*/
var YieldWrapTypeId = /* @__PURE__ */ Symbol.for("effect/Utils/YieldWrap");
var _value = /* @__PURE__ */ new WeakMap();
/**
* @since 3.0.6
*/
var YieldWrap = class {
	constructor(value) {
		_classPrivateFieldInitSpec(this, _value, void 0);
		_classPrivateFieldSet2(_value, this, value);
	}
	/**
	* @since 3.0.6
	*/
	[YieldWrapTypeId]() {
		return _classPrivateFieldGet2(_value, this);
	}
};
/**
* @since 3.0.6
*/
function yieldWrapGet(self) {
	if (typeof self === "object" && self !== null && YieldWrapTypeId in self) return self[YieldWrapTypeId]();
	throw new Error(getBugErrorMessage("yieldWrapGet"));
}
/**
* Note: this is an experimental feature made available to allow custom matchers in tests, not to be directly used yet in user code
*
* @since 3.1.1
* @status experimental
* @category modifiers
*/
var structuralRegionState = /* @__PURE__ */ globalValue("effect/Utils/isStructuralRegion", () => ({
	enabled: false,
	tester: void 0
}));
var standard = { effect_internal_function: (body) => {
	return body();
} };
/**
* @since 3.2.2
* @status experimental
* @category tracing
*/
var internalCall = /* @__PURE__ */ standard.effect_internal_function(() => (/* @__PURE__ */ new Error()).stack)?.includes("effect_internal_function") === true ? standard.effect_internal_function : { effect_internal_function: (body) => {
	try {
		return body();
	} finally {}
} }.effect_internal_function;
(function* () {}).constructor;
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/Hash.js
/**
* @since 2.0.0
*/
/** @internal */
var randomHashCache = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Hash/randomHashCache"), () => /* @__PURE__ */ new WeakMap());
/**
* @since 2.0.0
* @category symbols
*/
var symbol$1 = /* @__PURE__ */ Symbol.for("effect/Hash");
/**
* @since 2.0.0
* @category hashing
*/
var hash = (self) => {
	if (structuralRegionState.enabled === true) return 0;
	switch (typeof self) {
		case "number": return number$1(self);
		case "bigint": return string(self.toString(10));
		case "boolean": return string(String(self));
		case "symbol": return string(String(self));
		case "string": return string(self);
		case "undefined": return string("undefined");
		case "function":
		case "object": if (self === null) return string("null");
		else if (self instanceof Date) {
			if (Number.isNaN(self.getTime())) return string("Invalid Date");
			return hash(self.toISOString());
		} else if (self instanceof URL) return hash(self.href);
		else if (isHash(self)) return self[symbol$1]();
		else return random(self);
		default: throw new Error(`BUG: unhandled typeof ${typeof self} - please report an issue at https://github.com/Effect-TS/effect/issues`);
	}
};
/**
* @since 2.0.0
* @category hashing
*/
var random = (self) => {
	if (!randomHashCache.has(self)) randomHashCache.set(self, number$1(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)));
	return randomHashCache.get(self);
};
/**
* @since 2.0.0
* @category hashing
*/
var combine$5 = (b) => (self) => self * 53 ^ b;
/**
* @since 2.0.0
* @category hashing
*/
var optimize = (n) => n & 3221225471 | n >>> 1 & 1073741824;
/**
* @since 2.0.0
* @category guards
*/
var isHash = (u) => hasProperty(u, symbol$1);
/**
* @since 2.0.0
* @category hashing
*/
var number$1 = (n) => {
	if (n !== n || n === Infinity) return 0;
	let h = n | 0;
	if (h !== n) h ^= n * 4294967295;
	while (n > 4294967295) h ^= n /= 4294967295;
	return optimize(h);
};
/**
* @since 2.0.0
* @category hashing
*/
var string = (str) => {
	let h = 5381, i = str.length;
	while (i) h = h * 33 ^ str.charCodeAt(--i);
	return optimize(h);
};
/**
* @since 2.0.0
* @category hashing
*/
var structureKeys = (o, keys) => {
	let h = 12289;
	for (let i = 0; i < keys.length; i++) h ^= pipe(string(keys[i]), combine$5(hash(o[keys[i]])));
	return optimize(h);
};
/**
* @since 2.0.0
* @category hashing
*/
var structure = (o) => structureKeys(o, Object.keys(o));
/**
* @since 2.0.0
* @category hashing
*/
var array = (arr) => {
	let h = 6151;
	for (let i = 0; i < arr.length; i++) h = pipe(h, combine$5(hash(arr[i])));
	return optimize(h);
};
/**
* @since 2.0.0
* @category hashing
*/
var cached = function() {
	if (arguments.length === 1) {
		const self = arguments[0];
		return function(hash) {
			Object.defineProperty(self, symbol$1, {
				value() {
					return hash;
				},
				enumerable: false
			});
			return hash;
		};
	}
	const self = arguments[0];
	const hash = arguments[1];
	Object.defineProperty(self, symbol$1, {
		value() {
			return hash;
		},
		enumerable: false
	});
	return hash;
};
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/Equal.js
/**
* @since 2.0.0
* @category symbols
*/
var symbol = /* @__PURE__ */ Symbol.for("effect/Equal");
function equals$1() {
	if (arguments.length === 1) return (self) => compareBoth(self, arguments[0]);
	return compareBoth(arguments[0], arguments[1]);
}
function compareBoth(self, that) {
	if (self === that) return true;
	const selfType = typeof self;
	if (selfType !== typeof that) return false;
	if (selfType === "object" || selfType === "function") {
		if (self !== null && that !== null) {
			if (isEqual(self) && isEqual(that)) if (hash(self) === hash(that) && self[symbol](that)) return true;
			else return structuralRegionState.enabled && structuralRegionState.tester ? structuralRegionState.tester(self, that) : false;
			else if (self instanceof Date && that instanceof Date) {
				const t1 = self.getTime();
				const t2 = that.getTime();
				return t1 === t2 || Number.isNaN(t1) && Number.isNaN(t2);
			} else if (self instanceof URL && that instanceof URL) return self.href === that.href;
		}
		if (structuralRegionState.enabled) {
			if (self === null || that === null) return false;
			if (Array.isArray(self) && Array.isArray(that)) return self.length === that.length && self.every((v, i) => compareBoth(v, that[i]));
			if (Object.getPrototypeOf(self) === Object.prototype && Object.getPrototypeOf(that) === Object.prototype) {
				const keysSelf = Object.keys(self);
				const keysThat = Object.keys(that);
				if (keysSelf.length === keysThat.length) {
					for (const key of keysSelf) if (!(key in that && compareBoth(self[key], that[key]))) return structuralRegionState.tester ? structuralRegionState.tester(self, that) : false;
					return true;
				}
			}
			return structuralRegionState.tester ? structuralRegionState.tester(self, that) : false;
		}
	}
	return structuralRegionState.enabled && structuralRegionState.tester ? structuralRegionState.tester(self, that) : false;
}
/**
* @since 2.0.0
* @category guards
*/
var isEqual = (u) => hasProperty(u, symbol);
/**
* @since 2.0.0
* @category instances
*/
var equivalence = () => equals$1;
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/Inspectable.js
/**
* @since 2.0.0
* @category symbols
*/
var NodeInspectSymbol = /* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom");
/**
* @since 2.0.0
*/
var toJSON = (x) => {
	try {
		if (hasProperty(x, "toJSON") && isFunction(x["toJSON"]) && x["toJSON"].length === 0) return x.toJSON();
		else if (Array.isArray(x)) return x.map(toJSON);
	} catch {
		return {};
	}
	return redact(x);
};
/**
* @since 2.0.0
*/
var format$2 = (x) => JSON.stringify(x, null, 2);
/**
* @since 2.0.0
*/
var toStringUnknown = (u, whitespace = 2) => {
	if (typeof u === "string") return u;
	try {
		return typeof u === "object" ? stringifyCircular(u, whitespace) : String(u);
	} catch {
		return String(u);
	}
};
/**
* @since 2.0.0
*/
var stringifyCircular = (obj, whitespace) => {
	let cache = [];
	const retVal = JSON.stringify(obj, (_key, value) => typeof value === "object" && value !== null ? cache.includes(value) ? void 0 : cache.push(value) && (redactableState.fiberRefs !== void 0 && isRedactable(value) ? value[symbolRedactable](redactableState.fiberRefs) : value) : value, whitespace);
	cache = void 0;
	return retVal;
};
/**
* @since 3.10.0
* @category redactable
*/
var symbolRedactable = /* @__PURE__ */ Symbol.for("effect/Inspectable/Redactable");
/**
* @since 3.10.0
* @category redactable
*/
var isRedactable = (u) => typeof u === "object" && u !== null && symbolRedactable in u;
var redactableState = /* @__PURE__ */ globalValue("effect/Inspectable/redactableState", () => ({ fiberRefs: void 0 }));
/**
* @since 3.10.0
* @category redactable
*/
var withRedactableContext = (context, f) => {
	const prev = redactableState.fiberRefs;
	redactableState.fiberRefs = context;
	try {
		return f();
	} finally {
		redactableState.fiberRefs = prev;
	}
};
/**
* @since 3.10.0
* @category redactable
*/
var redact = (u) => {
	if (isRedactable(u) && redactableState.fiberRefs !== void 0) return u[symbolRedactable](redactableState.fiberRefs);
	return u;
};
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/Pipeable.js
/**
* @since 2.0.0
*/
/**
* @since 2.0.0
*/
var pipeArguments = (self, args) => {
	switch (args.length) {
		case 0: return self;
		case 1: return args[0](self);
		case 2: return args[1](args[0](self));
		case 3: return args[2](args[1](args[0](self)));
		case 4: return args[3](args[2](args[1](args[0](self))));
		case 5: return args[4](args[3](args[2](args[1](args[0](self)))));
		case 6: return args[5](args[4](args[3](args[2](args[1](args[0](self))))));
		case 7: return args[6](args[5](args[4](args[3](args[2](args[1](args[0](self)))))));
		case 8: return args[7](args[6](args[5](args[4](args[3](args[2](args[1](args[0](self))))))));
		case 9: return args[8](args[7](args[6](args[5](args[4](args[3](args[2](args[1](args[0](self)))))))));
		default: {
			let ret = self;
			for (let i = 0, len = args.length; i < len; i++) ret = args[i](ret);
			return ret;
		}
	}
};
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/opCodes/effect.js
/** @internal */
var OP_ASYNC = "Async";
/** @internal */
var OP_COMMIT = "Commit";
/** @internal */
var OP_FAILURE = "Failure";
/** @internal */
var OP_ON_FAILURE = "OnFailure";
/** @internal */
var OP_ON_SUCCESS = "OnSuccess";
/** @internal */
var OP_ON_SUCCESS_AND_FAILURE = "OnSuccessAndFailure";
/** @internal */
var OP_SUCCESS = "Success";
/** @internal */
var OP_SYNC = "Sync";
/** @internal */
var OP_UPDATE_RUNTIME_FLAGS = "UpdateRuntimeFlags";
/** @internal */
var OP_WHILE = "While";
/** @internal */
var OP_ITERATOR = "Iterator";
/** @internal */
var OP_WITH_RUNTIME = "WithRuntime";
/** @internal */
var OP_YIELD = "Yield";
/** @internal */
var OP_REVERT_FLAGS = "RevertFlags";
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/version.js
var moduleVersion = "3.21.2";
var getCurrentVersion = () => moduleVersion;
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/effectable.js
/** @internal */
var EffectTypeId$1 = /* @__PURE__ */ Symbol.for("effect/Effect");
/** @internal */
var StreamTypeId = /* @__PURE__ */ Symbol.for("effect/Stream");
/** @internal */
var SinkTypeId = /* @__PURE__ */ Symbol.for("effect/Sink");
/** @internal */
var ChannelTypeId = /* @__PURE__ */ Symbol.for("effect/Channel");
/** @internal */
var effectVariance = {
	/* c8 ignore next */
	_R: (_) => _,
	/* c8 ignore next */
	_E: (_) => _,
	/* c8 ignore next */
	_A: (_) => _,
	_V: /* @__PURE__ */ getCurrentVersion()
};
var sinkVariance = {
	/* c8 ignore next */
	_A: (_) => _,
	/* c8 ignore next */
	_In: (_) => _,
	/* c8 ignore next */
	_L: (_) => _,
	/* c8 ignore next */
	_E: (_) => _,
	/* c8 ignore next */
	_R: (_) => _
};
var channelVariance = {
	/* c8 ignore next */
	_Env: (_) => _,
	/* c8 ignore next */
	_InErr: (_) => _,
	/* c8 ignore next */
	_InElem: (_) => _,
	/* c8 ignore next */
	_InDone: (_) => _,
	/* c8 ignore next */
	_OutErr: (_) => _,
	/* c8 ignore next */
	_OutElem: (_) => _,
	/* c8 ignore next */
	_OutDone: (_) => _
};
/** @internal */
var EffectPrototype$1 = {
	[EffectTypeId$1]: effectVariance,
	[StreamTypeId]: effectVariance,
	[SinkTypeId]: sinkVariance,
	[ChannelTypeId]: channelVariance,
	[symbol](that) {
		return this === that;
	},
	[symbol$1]() {
		return cached(this, random(this));
	},
	[Symbol.iterator]() {
		return new SingleShotGen$1(new YieldWrap(this));
	},
	pipe() {
		return pipeArguments(this, arguments);
	}
};
/** @internal */
var StructuralPrototype = {
	[symbol$1]() {
		return cached(this, structure(this));
	},
	[symbol](that) {
		const selfKeys = Object.keys(this);
		const thatKeys = Object.keys(that);
		if (selfKeys.length !== thatKeys.length) return false;
		for (const key of selfKeys) if (!(key in that && equals$1(this[key], that[key]))) return false;
		return true;
	}
};
/** @internal */
var CommitPrototype = {
	...EffectPrototype$1,
	_op: OP_COMMIT
};
/** @internal */
var StructuralCommitPrototype = {
	...CommitPrototype,
	...StructuralPrototype
};
/** @internal */
var Base$1 = /* @__PURE__ */ function() {
	function Base() {}
	Base.prototype = CommitPrototype;
	return Base;
}();
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/option.js
/**
* @since 2.0.0
*/
var TypeId$9 = /* @__PURE__ */ Symbol.for("effect/Option");
var CommonProto$1 = {
	...EffectPrototype$1,
	[TypeId$9]: { _A: (_) => _ },
	[NodeInspectSymbol]() {
		return this.toJSON();
	},
	toString() {
		return format$2(this.toJSON());
	}
};
var SomeProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(CommonProto$1), {
	_tag: "Some",
	_op: "Some",
	[symbol](that) {
		return isOption(that) && isSome$1(that) && equals$1(this.value, that.value);
	},
	[symbol$1]() {
		return cached(this, combine$5(hash(this._tag))(hash(this.value)));
	},
	toJSON() {
		return {
			_id: "Option",
			_tag: this._tag,
			value: toJSON(this.value)
		};
	}
});
var NoneHash = /* @__PURE__ */ hash("None");
var NoneProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(CommonProto$1), {
	_tag: "None",
	_op: "None",
	[symbol](that) {
		return isOption(that) && isNone$1(that);
	},
	[symbol$1]() {
		return NoneHash;
	},
	toJSON() {
		return {
			_id: "Option",
			_tag: this._tag
		};
	}
});
/** @internal */
var isOption = (input) => hasProperty(input, TypeId$9);
/** @internal */
var isNone$1 = (fa) => fa._tag === "None";
/** @internal */
var isSome$1 = (fa) => fa._tag === "Some";
/** @internal */
var none$5 = /* @__PURE__ */ Object.create(NoneProto);
/** @internal */
var some$1 = (value) => {
	const a = Object.create(SomeProto);
	a.value = value;
	return a;
};
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/either.js
/**
* @since 2.0.0
*/
/**
* @internal
*/
var TypeId$8 = /* @__PURE__ */ Symbol.for("effect/Either");
var CommonProto = {
	...EffectPrototype$1,
	[TypeId$8]: { _R: (_) => _ },
	[NodeInspectSymbol]() {
		return this.toJSON();
	},
	toString() {
		return format$2(this.toJSON());
	}
};
var RightProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(CommonProto), {
	_tag: "Right",
	_op: "Right",
	[symbol](that) {
		return isEither(that) && isRight$1(that) && equals$1(this.right, that.right);
	},
	[symbol$1]() {
		return combine$5(hash(this._tag))(hash(this.right));
	},
	toJSON() {
		return {
			_id: "Either",
			_tag: this._tag,
			right: toJSON(this.right)
		};
	}
});
var LeftProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(CommonProto), {
	_tag: "Left",
	_op: "Left",
	[symbol](that) {
		return isEither(that) && isLeft$1(that) && equals$1(this.left, that.left);
	},
	[symbol$1]() {
		return combine$5(hash(this._tag))(hash(this.left));
	},
	toJSON() {
		return {
			_id: "Either",
			_tag: this._tag,
			left: toJSON(this.left)
		};
	}
});
/** @internal */
var isEither = (input) => hasProperty(input, TypeId$8);
/** @internal */
var isLeft$1 = (ma) => ma._tag === "Left";
/** @internal */
var isRight$1 = (ma) => ma._tag === "Right";
/** @internal */
var left$1 = (left) => {
	const a = Object.create(LeftProto);
	a.left = left;
	return a;
};
/** @internal */
var right$1 = (right) => {
	const a = Object.create(RightProto);
	a.right = right;
	return a;
};
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/Either.js
/**
* Constructs a new `Either` holding a `Right` value. This usually represents a successful value due to the right bias
* of this structure.
*
* @category constructors
* @since 2.0.0
*/
var right = right$1;
/**
* Constructs a new `Either` holding a `Left` value. This usually represents a failure, due to the right-bias of this
* structure.
*
* @category constructors
* @since 2.0.0
*/
var left = left$1;
/**
* Determine if a `Either` is a `Left`.
*
* @example
* ```ts
* import * as assert from "node:assert"
* import { Either } from "effect"
*
* assert.deepStrictEqual(Either.isLeft(Either.right(1)), false)
* assert.deepStrictEqual(Either.isLeft(Either.left("a")), true)
* ```
*
* @category guards
* @since 2.0.0
*/
var isLeft = isLeft$1;
/**
* Determine if a `Either` is a `Right`.
*
* @example
* ```ts
* import * as assert from "node:assert"
* import { Either } from "effect"
*
* assert.deepStrictEqual(Either.isRight(Either.right(1)), true)
* assert.deepStrictEqual(Either.isRight(Either.left("a")), false)
* ```
*
* @category guards
* @since 2.0.0
*/
var isRight = isRight$1;
/**
* @category getters
* @since 2.0.0
*/
var merge$3 = /* @__PURE__ */ (/* @__PURE__ */ dual(2, (self, { onLeft, onRight }) => isLeft(self) ? onLeft(self.left) : onRight(self.right)))({
	onLeft: identity,
	onRight: identity
});
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/array.js
/**
* @since 2.0.0
*/
/** @internal */
var isNonEmptyArray$1 = (self) => self.length > 0;
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/Order.js
/**
* This module provides an implementation of the `Order` type class which is used to define a total ordering on some type `A`.
* An order is defined by a relation `<=`, which obeys the following laws:
*
* - either `x <= y` or `y <= x` (totality)
* - if `x <= y` and `y <= x`, then `x == y` (antisymmetry)
* - if `x <= y` and `y <= z`, then `x <= z` (transitivity)
*
* The truth table for compare is defined as follows:
*
* | `x <= y` | `x >= y` | Ordering |                       |
* | -------- | -------- | -------- | --------------------- |
* | `true`   | `true`   | `0`      | corresponds to x == y |
* | `true`   | `false`  | `< 0`    | corresponds to x < y  |
* | `false`  | `true`   | `> 0`    | corresponds to x > y  |
*
* @since 2.0.0
*/
/**
* @category constructors
* @since 2.0.0
*/
var make$21 = (compare) => (self, that) => self === that ? 0 : compare(self, that);
/**
* @category instances
* @since 2.0.0
*/
var number = /* @__PURE__ */ make$21((self, that) => self < that ? -1 : 1);
/**
* @category mapping
* @since 2.0.0
*/
var mapInput = /* @__PURE__ */ dual(2, (self, f) => make$21((b1, b2) => self(f(b1), f(b2))));
/**
* Test whether one value is _strictly greater than_ another.
*
* @since 2.0.0
*/
var greaterThan$1 = (O) => dual(2, (self, that) => O(self, that) === 1);
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/Option.js
/**
* Represents the absence of a value by creating an empty `Option`.
*
* `Option.none` returns an `Option<never>`, which is a subtype of `Option<A>`.
* This means you can use it in place of any `Option<A>` regardless of the type
* `A`.
*
* **Example** (Creating an Option with No Value)
*
* ```ts
* import { Option } from "effect"
*
* // An Option holding no value
* //
* //      ┌─── Option<never>
* //      ▼
* const noValue = Option.none()
*
* console.log(noValue)
* // Output: { _id: 'Option', _tag: 'None' }
* ```
*
* @see {@link some} for the opposite operation.
*
* @category Constructors
* @since 2.0.0
*/
var none$4 = () => none$5;
/**
* Wraps the given value into an `Option` to represent its presence.
*
* **Example** (Creating an Option with a Value)
*
* ```ts
* import { Option } from "effect"
*
* // An Option holding the number 1
* //
* //      ┌─── Option<number>
* //      ▼
* const value = Option.some(1)
*
* console.log(value)
* // Output: { _id: 'Option', _tag: 'Some', value: 1 }
* ```
*
* @see {@link none} for the opposite operation.
*
* @category Constructors
* @since 2.0.0
*/
var some = some$1;
/**
* Checks whether an `Option` represents the absence of a value (`None`).
*
* @example
* ```ts
* import { Option } from "effect"
*
* console.log(Option.isNone(Option.some(1)))
* // Output: false
*
* console.log(Option.isNone(Option.none()))
* // Output: true
* ```
*
* @see {@link isSome} for the opposite check.
*
* @category Guards
* @since 2.0.0
*/
var isNone = isNone$1;
/**
* Checks whether an `Option` contains a value (`Some`).
*
* @example
* ```ts
* import { Option } from "effect"
*
* console.log(Option.isSome(Option.some(1)))
* // Output: true
*
* console.log(Option.isSome(Option.none()))
* // Output: false
* ```
*
* @see {@link isNone} for the opposite check.
*
* @category Guards
* @since 2.0.0
*/
var isSome = isSome$1;
/**
* Performs pattern matching on an `Option` to handle both `Some` and `None`
* cases.
*
* **Details**
*
* This function allows you to match against an `Option` and handle both
* scenarios: when the `Option` is `None` (i.e., contains no value), and when
* the `Option` is `Some` (i.e., contains a value). It executes one of the
* provided functions based on the case:
*
* - If the `Option` is `None`, the `onNone` function is executed and its result
*   is returned.
* - If the `Option` is `Some`, the `onSome` function is executed with the
*   contained value, and its result is returned.
*
* This function provides a concise and functional way to handle optional values
* without resorting to `if` or manual checks, making your code more declarative
* and readable.
*
* **Example** (Pattern Matching with Option)
*
* ```ts
* import { Option } from "effect"
*
* const foo = Option.some(1)
*
* const message = Option.match(foo, {
*   onNone: () => "Option is empty",
*   onSome: (value) => `Option has a value: ${value}`
* })
*
* console.log(message)
* // Output: "Option has a value: 1"
* ```
*
* @category Pattern matching
* @since 2.0.0
*/
var match$2 = /* @__PURE__ */ dual(2, (self, { onNone, onSome }) => isNone(self) ? onNone() : onSome(self.value));
/**
* Returns the value contained in the `Option` if it is `Some`, otherwise
* evaluates and returns the result of `onNone`.
*
* **Details**
*
* This function allows you to provide a fallback value or computation for when
* an `Option` is `None`. If the `Option` contains a value (`Some`), that value
* is returned. If it is empty (`None`), the `onNone` function is executed, and
* its result is returned instead.
*
* This utility is helpful for safely handling `Option` values by ensuring you
* always receive a meaningful result, whether or not the `Option` contains a
* value. It is particularly useful for providing default values or alternative
* logic when working with optional values.
*
* @example
* ```ts
* import { Option } from "effect"
*
* console.log(Option.some(1).pipe(Option.getOrElse(() => 0)))
* // Output: 1
*
* console.log(Option.none().pipe(Option.getOrElse(() => 0)))
* // Output: 0
* ```
*
* @see {@link getOrNull} for a version that returns `null` instead of executing a function.
* @see {@link getOrUndefined} for a version that returns `undefined` instead of executing a function.
*
* @category Getters
* @since 2.0.0
*/
var getOrElse = /* @__PURE__ */ dual(2, (self, onNone) => isNone(self) ? onNone() : self.value);
/**
* Returns the provided default value wrapped in `Some` if the current `Option`
* (`self`) is `None`; otherwise, returns `self`.
*
* **Details**
*
* This function provides a way to supply a default value for cases where an
* `Option` is `None`. If the current `Option` is empty (`None`), the `onNone`
* function is executed to compute the default value, which is then wrapped in a
* `Some`. If the current `Option` contains a value (`Some`), it is returned as
* is.
*
* This is particularly useful for handling optional values where a fallback
* default needs to be provided explicitly in case of absence.
*
* @example
* ```ts
* import { Option } from "effect"
*
* console.log(Option.none().pipe(Option.orElseSome(() => "b")))
* // Output: { _id: 'Option', _tag: 'Some', value: 'b' }
*
* console.log(Option.some("a").pipe(Option.orElseSome(() => "b")))
* // Output: { _id: 'Option', _tag: 'Some', value: 'a' }
* ```
*
* @category Error handling
* @since 2.0.0
*/
var orElseSome = /* @__PURE__ */ dual(2, (self, onNone) => isNone(self) ? some(onNone()) : self);
/**
* Converts a nullable value into an `Option`. Returns `None` if the value is
* `null` or `undefined`, otherwise wraps the value in a `Some`.
*
* @example
* ```ts
* import { Option } from "effect"
*
* console.log(Option.fromNullable(undefined))
* // Output: { _id: 'Option', _tag: 'None' }
*
* console.log(Option.fromNullable(null))
* // Output: { _id: 'Option', _tag: 'None' }
*
* console.log(Option.fromNullable(1))
* // Output: { _id: 'Option', _tag: 'Some', value: 1 }
* ```
*
* @category Conversions
* @since 2.0.0
*/
var fromNullable = (nullableValue) => nullableValue == null ? none$4() : some(nullableValue);
/**
* Returns the value contained in the `Option` if it is `Some`; otherwise,
* returns `undefined`.
*
* **Details**
*
* This function provides a way to extract the value of an `Option` while
* falling back to `undefined` if the `Option` is `None`.
*
* It is particularly useful in scenarios where `undefined` is an acceptable
* placeholder for the absence of a value, such as when interacting with APIs or
* systems that use `undefined` as a default for missing values.
*
* @example
* ```ts
* import { Option } from "effect"
*
* console.log(Option.getOrUndefined(Option.some(1)))
* // Output: 1
*
* console.log(Option.getOrUndefined(Option.none()))
* // Output: undefined
* ```
*
* @category Getters
* @since 2.0.0
*/
var getOrUndefined = /* @__PURE__ */ getOrElse(constUndefined);
/**
* Transforms the value inside a `Some` to a new value using the provided
* function, while leaving `None` unchanged.
*
* **Details**
*
* This function applies a mapping function `f` to the value inside an `Option`
* if it is a `Some`. If the `Option` is `None`, it remains unchanged. The
* result is a new `Option` with the transformed value (if it was a `Some`) or
* still `None`.
*
* This utility is particularly useful for chaining transformations in a
* functional way without needing to manually handle `None` cases.
*
* @example
* ```ts
* import { Option } from "effect"
*
* // Mapping over a `Some`
* const someValue = Option.some(2)
*
* console.log(Option.map(someValue, (n) => n * 2))
* // Output: { _id: 'Option', _tag: 'Some', value: 4 }
*
* // Mapping over a `None`
* const noneValue = Option.none<number>()
*
* console.log(Option.map(noneValue, (n) => n * 2))
* // Output: { _id: 'Option', _tag: 'None' }
* ```
*
* @category Mapping
* @since 2.0.0
*/
var map$5 = /* @__PURE__ */ dual(2, (self, f) => isNone(self) ? none$4() : some(f(self.value)));
/**
* Applies a function to the value of a `Some` and flattens the resulting
* `Option`. If the input is `None`, it remains `None`.
*
* **Details**
*
* This function allows you to chain computations that return `Option` values.
* If the input `Option` is `Some`, the provided function `f` is applied to the
* contained value, and the resulting `Option` is returned. If the input is
* `None`, the function is not applied, and the result remains `None`.
*
* This utility is particularly useful for sequencing operations that may fail
* or produce optional results, enabling clean and concise workflows for
* handling such cases.
*
* @example
* ```ts
* import { Option } from "effect"
*
* interface Address {
*   readonly city: string
*   readonly street: Option.Option<string>
* }
*
* interface User {
*   readonly id: number
*   readonly username: string
*   readonly email: Option.Option<string>
*   readonly address: Option.Option<Address>
* }
*
* const user: User = {
*   id: 1,
*   username: "john_doe",
*   email: Option.some("john.doe@example.com"),
*   address: Option.some({
*     city: "New York",
*     street: Option.some("123 Main St")
*   })
* }
*
* // Use flatMap to extract the street value
* const street = user.address.pipe(
*   Option.flatMap((address) => address.street)
* )
*
* console.log(street)
* // Output: { _id: 'Option', _tag: 'Some', value: '123 Main St' }
* ```
*
* @category Sequencing
* @since 2.0.0
*/
var flatMap$4 = /* @__PURE__ */ dual(2, (self, f) => isNone(self) ? none$4() : f(self.value));
/**
* Returns a function that checks if an `Option` contains a specified value,
* using a provided equivalence function.
*
* **Details**
*
* This function allows you to check whether an `Option` contains a specific
* value. It uses an equivalence function `isEquivalent` to compare the value
* inside the `Option` to the provided value. If the `Option` is `Some` and the
* equivalence function returns `true`, the result is `true`. If the `Option` is
* `None` or the values are not equivalent, the result is `false`.
*
* @example
* ```ts
* import { Number, Option } from "effect"
*
* const contains = Option.containsWith(Number.Equivalence)
*
* console.log(Option.some(2).pipe(contains(2)))
* // Output: true
*
* console.log(Option.some(1).pipe(contains(2)))
* // Output: false
*
* console.log(Option.none().pipe(contains(2)))
* // Output: false
* ```
*
* @see {@link contains} for a version that uses the default `Equivalence`.
*
* @category Elements
* @since 2.0.0
*/
var containsWith = (isEquivalent) => dual(2, (self, a) => isNone(self) ? false : isEquivalent(self.value, a));
/**
* Returns a function that checks if an `Option` contains a specified value
* using the default `Equivalence`.
*
* **Details**
*
* This function allows you to check whether an `Option` contains a specific
* value. It uses the default `Equivalence` for equality comparison. If the
* `Option` is `Some` and its value is equivalent to the provided value, the
* result is `true`. If the `Option` is `None` or the values are not equivalent,
* the result is `false`.
*
* @example
* ```ts
* import { Option } from "effect"
*
* console.log(Option.some(2).pipe(Option.contains(2)))
* // Output: true
*
* console.log(Option.some(1).pipe(Option.contains(2)))
* // Output: false
*
* console.log(Option.none().pipe(Option.contains(2)))
* // Output: false
* ```
*
* @see {@link containsWith} for a version that allows you to specify a custom equivalence function.
*
* @category Elements
* @since 2.0.0
*/
var contains = /* @__PURE__ */ containsWith(/* @__PURE__ */ equivalence());
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/Tuple.js
/**
* Constructs a new tuple from the provided values.
*
* @example
* ```ts
* import * as assert from "node:assert"
* import { make } from "effect/Tuple"
*
* assert.deepStrictEqual(make(1, 'hello', true), [1, 'hello', true])
* ```
*
* @category constructors
* @since 2.0.0
*/
var make$20 = (...elements) => elements;
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/Array.js
/**
* Creates a new `Array` of the specified length.
*
* **Example**
*
* ```ts
* import { Array } from "effect"
*
* const result = Array.allocate<number>(3)
* console.log(result) // [ <3 empty items> ]
* ```
*
* @category constructors
* @since 2.0.0
*/
var allocate = (n) => new Array(n);
/**
* Return a `NonEmptyArray` of length `n` with element `i` initialized with `f(i)`.
*
* **Note**. `n` is normalized to an integer >= 1.
*
* **Example**
*
* ```ts
* import { makeBy } from "effect/Array"
*
* const result = makeBy(5, n => n * 2)
* console.log(result) // [0, 2, 4, 6, 8]
* ```
*
* @category constructors
* @since 2.0.0
*/
var makeBy = /* @__PURE__ */ dual(2, (n, f) => {
	const max = Math.max(1, Math.floor(n));
	const out = new Array(max);
	for (let i = 0; i < max; i++) out[i] = f(i);
	return out;
});
/**
* Creates a new `Array` from an iterable collection of values.
* If the input is already an array, it returns the input as-is.
* Otherwise, it converts the iterable collection to an array.
*
* **Example**
*
* ```ts
* import { Array } from "effect"
*
* const result = Array.fromIterable(new Set([1, 2, 3]))
* console.log(result) // [1, 2, 3]
* ```
*
* @category constructors
* @since 2.0.0
*/
var fromIterable$6 = (collection) => Array.isArray(collection) ? collection : Array.from(collection);
/**
* Creates a new `Array` from a value that might not be an iterable.
*
* **Example**
*
* ```ts
* import { Array } from "effect"
*
* console.log(Array.ensure("a")) // ["a"]
* console.log(Array.ensure(["a"])) // ["a"]
* console.log(Array.ensure(["a", "b", "c"])) // ["a", "b", "c"]
* ```
*
* @category constructors
* @since 3.3.0
*/
var ensure = (self) => Array.isArray(self) ? self : [self];
/**
* Prepend an element to the front of an `Iterable`, creating a new `NonEmptyArray`.
*
* **Example**
*
* ```ts
* import { Array } from "effect"
*
* const result = Array.prepend([2, 3, 4], 1)
* console.log(result) // [1, 2, 3, 4]
* ```
*
* @category concatenating
* @since 2.0.0
*/
var prepend$2 = /* @__PURE__ */ dual(2, (self, head) => [head, ...self]);
/**
* Append an element to the end of an `Iterable`, creating a new `NonEmptyArray`.
*
* **Example**
*
* ```ts
* import { Array } from "effect"
*
* const result = Array.append([1, 2, 3], 4);
* console.log(result) // [1, 2, 3, 4]
* ```
*
* @category concatenating
* @since 2.0.0
*/
var append$1 = /* @__PURE__ */ dual(2, (self, last) => [...self, last]);
/**
* Concatenates two arrays (or iterables), combining their elements.
* If either array is non-empty, the result is also a non-empty array.
*
* @category concatenating
* @since 2.0.0
*/
var appendAll$2 = /* @__PURE__ */ dual(2, (self, that) => fromIterable$6(self).concat(fromIterable$6(that)));
Array.isArray;
/**
* Determine if an `Array` is empty narrowing down the type to `[]`.
*
* **Example**
*
* ```ts
* import { Array } from "effect"
*
* console.log(Array.isEmptyArray([])) // true
* console.log(Array.isEmptyArray([1, 2, 3])) // false
* ```
*
* @category guards
* @since 2.0.0
*/
var isEmptyArray = (self) => self.length === 0;
/**
* Determine if a `ReadonlyArray` is empty narrowing down the type to `readonly []`.
*
* **Example**
*
* ```ts
* import { Array } from "effect"
*
* console.log(Array.isEmptyReadonlyArray([])) // true
* console.log(Array.isEmptyReadonlyArray([1, 2, 3])) // false
* ```
*
* @category guards
* @since 2.0.0
*/
var isEmptyReadonlyArray = isEmptyArray;
/**
* Determine if an `Array` is non empty narrowing down the type to `NonEmptyArray`.
*
* An `Array` is considered to be a `NonEmptyArray` if it contains at least one element.
*
* **Example**
*
* ```ts
* import { Array } from "effect"
*
* console.log(Array.isNonEmptyArray([])) // false
* console.log(Array.isNonEmptyArray([1, 2, 3])) // true
* ```
*
* @category guards
* @since 2.0.0
*/
var isNonEmptyArray = isNonEmptyArray$1;
/**
* Determine if a `ReadonlyArray` is non empty narrowing down the type to `NonEmptyReadonlyArray`.
*
* A `ReadonlyArray` is considered to be a `NonEmptyReadonlyArray` if it contains at least one element.
*
* **Example**
*
* ```ts
* import { Array } from "effect"
*
* console.log(Array.isNonEmptyReadonlyArray([])) // false
* console.log(Array.isNonEmptyReadonlyArray([1, 2, 3])) // true
* ```
*
* @category guards
* @since 2.0.0
*/
var isNonEmptyReadonlyArray = isNonEmptyArray$1;
var isOutOfBounds = (i, as) => i < 0 || i >= as.length;
var clamp = (i, as) => Math.floor(Math.min(Math.max(0, i), as.length));
/**
* This function provides a safe way to read a value at a particular index from a `ReadonlyArray`.
*
* @category getters
* @since 2.0.0
*/
var get$7 = /* @__PURE__ */ dual(2, (self, index) => {
	const i = Math.floor(index);
	return isOutOfBounds(i, self) ? none$4() : some(self[i]);
});
/**
* Gets an element unsafely, will throw on out of bounds.
*
* @since 2.0.0
* @category unsafe
*/
var unsafeGet$3 = /* @__PURE__ */ dual(2, (self, index) => {
	const i = Math.floor(index);
	if (isOutOfBounds(i, self)) throw new Error(`Index ${i} out of bounds`);
	return self[i];
});
/**
* Get the first element of a `ReadonlyArray`, or `None` if the `ReadonlyArray` is empty.
*
* @category getters
* @since 2.0.0
*/
var head = /* @__PURE__ */ get$7(0);
/**
* Get the first element of a non empty array.
*
* **Example**
*
* ```ts
* import { Array } from "effect"
*
* const result = Array.headNonEmpty([1, 2, 3, 4])
* console.log(result) // 1
* ```
*
* @category getters
* @since 2.0.0
*/
var headNonEmpty$1 = /* @__PURE__ */ unsafeGet$3(0);
/**
* Get the last element in a `ReadonlyArray`, or `None` if the `ReadonlyArray` is empty.
*
* @category getters
* @since 2.0.0
*/
var last = (self) => isNonEmptyReadonlyArray(self) ? some(lastNonEmpty(self)) : none$4();
/**
* Get the last element of a non empty array.
*
* **Example**
*
* ```ts
* import { Array } from "effect"
*
* const result = Array.lastNonEmpty([1, 2, 3, 4])
* console.log(result) // 4
* ```
*
* @category getters
* @since 2.0.0
*/
var lastNonEmpty = (self) => self[self.length - 1];
/**
* Get all but the first element of a `NonEmptyReadonlyArray`.
*
* **Example**
*
* ```ts
* import { Array } from "effect"
*
* const result = Array.tailNonEmpty([1, 2, 3, 4])
* console.log(result) // [2, 3, 4]
* ```
*
* @category getters
* @since 2.0.0
*/
var tailNonEmpty$1 = (self) => self.slice(1);
var spanIndex = (self, predicate) => {
	let i = 0;
	for (const a of self) {
		if (!predicate(a, i)) break;
		i++;
	}
	return i;
};
/**
* Split an `Iterable` into two parts:
*
* 1. the longest initial subarray for which all elements satisfy the specified predicate
* 2. the remaining elements
*
* @category splitting
* @since 2.0.0
*/
var span = /* @__PURE__ */ dual(2, (self, predicate) => splitAt(self, spanIndex(self, predicate)));
/**
* Drop a max number of elements from the start of an `Iterable`, creating a new `Array`.
*
* **Note**. `n` is normalized to a non negative integer.
*
* **Example**
*
* ```ts
* import { Array } from "effect"
*
* const result = Array.drop([1, 2, 3, 4, 5], 2)
* console.log(result) // [3, 4, 5]
* ```
*
* @category getters
* @since 2.0.0
*/
var drop$1 = /* @__PURE__ */ dual(2, (self, n) => {
	const input = fromIterable$6(self);
	return input.slice(clamp(n, input), input.length);
});
/**
* Reverse an `Iterable`, creating a new `Array`.
*
* **Example**
*
* ```ts
* import { Array } from "effect"
*
* const result = Array.reverse([1, 2, 3, 4])
* console.log(result) // [4, 3, 2, 1]
* ```
*
* @category elements
* @since 2.0.0
*/
var reverse$2 = (self) => Array.from(self).reverse();
/**
* Create a new array with elements sorted in increasing order based on the specified comparator.
* If the input is a `NonEmptyReadonlyArray`, the output will also be a `NonEmptyReadonlyArray`.
*
* @category sorting
* @since 2.0.0
*/
var sort = /* @__PURE__ */ dual(2, (self, O) => {
	const out = Array.from(self);
	out.sort(O);
	return out;
});
/**
* Takes two `Iterable`s and returns an `Array` of corresponding pairs.
* If one input `Iterable` is short, excess elements of the
* longer `Iterable` are discarded.
*
* **Example**
*
* ```ts
* import { Array } from "effect"
*
* const result = Array.zip([1, 2, 3], ['a', 'b'])
* console.log(result) // [[1, 'a'], [2, 'b']]
* ```
*
* @category zipping
* @since 2.0.0
*/
var zip$1 = /* @__PURE__ */ dual(2, (self, that) => zipWith(self, that, make$20));
/**
* Apply a function to pairs of elements at the same index in two `Iterable`s, collecting the results in a new `Array`. If one
* input `Iterable` is short, excess elements of the longer `Iterable` are discarded.
*
* **Example**
*
* ```ts
* import { Array } from "effect"
*
* const result = Array.zipWith([1, 2, 3], [4, 5, 6], (a, b) => a + b)
* console.log(result) // [5, 7, 9]
* ```
*
* @category zipping
* @since 2.0.0
*/
var zipWith = /* @__PURE__ */ dual(3, (self, that, f) => {
	const as = fromIterable$6(self);
	const bs = fromIterable$6(that);
	if (isNonEmptyReadonlyArray(as) && isNonEmptyReadonlyArray(bs)) {
		const out = [f(headNonEmpty$1(as), headNonEmpty$1(bs))];
		const len = Math.min(as.length, bs.length);
		for (let i = 1; i < len; i++) out[i] = f(as[i], bs[i]);
		return out;
	}
	return [];
});
var _equivalence$2 = /* @__PURE__ */ equivalence();
/**
* Splits an `Iterable` into two segments, with the first segment containing a maximum of `n` elements.
* The value of `n` can be `0`.
*
* **Example**
*
* ```ts
* import { Array } from "effect"
*
* const result = Array.splitAt([1, 2, 3, 4, 5], 3)
* console.log(result) // [[1, 2, 3], [4, 5]]
* ```
*
* @category splitting
* @since 2.0.0
*/
var splitAt = /* @__PURE__ */ dual(2, (self, n) => {
	const input = Array.from(self);
	const _n = Math.floor(n);
	if (isNonEmptyReadonlyArray(input)) {
		if (_n >= 1) return splitNonEmptyAt(input, _n);
		return [[], input];
	}
	return [input, []];
});
/**
* Splits a `NonEmptyReadonlyArray` into two segments, with the first segment containing a maximum of `n` elements.
* The value of `n` must be `>= 1`.
*
* **Example**
*
* ```ts
* import { Array } from "effect"
*
* const result = Array.splitNonEmptyAt(["a", "b", "c", "d", "e"], 3)
* console.log(result) // [["a", "b", "c"], ["d", "e"]]
* ```
*
* @category splitting
* @since 2.0.0
*/
var splitNonEmptyAt = /* @__PURE__ */ dual(2, (self, n) => {
	const _n = Math.max(1, Math.floor(n));
	return _n >= self.length ? [copy$1(self), []] : [prepend$2(self.slice(1, _n), headNonEmpty$1(self)), self.slice(_n)];
});
/**
* Copies an array.
*
* **Example**
*
* ```ts
* import { Array } from "effect"
*
* const result = Array.copy([1, 2, 3])
* console.log(result) // [1, 2, 3]
* ```
*
* @since 2.0.0
*/
var copy$1 = (self) => self.slice();
/**
* Calculates the union of two arrays using the provided equivalence relation.
*
* **Example**
*
* ```ts
* import { Array } from "effect"
*
* const union = Array.unionWith([1, 2], [2, 3], (a, b) => a === b)
* console.log(union) // [1, 2, 3]
* ```
*
* @since 2.0.0
*/
var unionWith = /* @__PURE__ */ dual(3, (self, that, isEquivalent) => {
	const a = fromIterable$6(self);
	const b = fromIterable$6(that);
	if (isNonEmptyReadonlyArray(a)) {
		if (isNonEmptyReadonlyArray(b)) return dedupeWith(isEquivalent)(appendAll$2(a, b));
		return a;
	}
	return b;
});
/**
* Creates a union of two arrays, removing duplicates.
*
* **Example**
*
* ```ts
* import { Array } from "effect"
*
* const result = Array.union([1, 2], [2, 3])
* console.log(result) // [1, 2, 3]
* ```
*
* @since 2.0.0
*/
var union$2 = /* @__PURE__ */ dual(2, (self, that) => unionWith(self, that, _equivalence$2));
/**
* @category constructors
* @since 2.0.0
*/
var empty$19 = () => [];
/**
* Constructs a new `NonEmptyArray<A>` from the specified value.
*
* @category constructors
* @since 2.0.0
*/
var of$2 = (a) => [a];
/**
* @category mapping
* @since 2.0.0
*/
var map$4 = /* @__PURE__ */ dual(2, (self, f) => self.map(f));
/**
* Combines multiple arrays into a single array by concatenating all elements
* from each nested array. This function ensures that the structure of nested
* arrays is collapsed into a single, flat array.
*
* **Example**
*
* ```ts
* import { Array } from "effect"
*
* const result = Array.flatten([[1, 2], [], [3, 4], [], [5, 6]])
* console.log(result) // [1, 2, 3, 4, 5, 6]
* ```
*
* @category sequencing
* @since 2.0.0
*/
var flatten$2 = /* @__PURE__ */ (/* @__PURE__ */ dual(2, (self, f) => {
	if (isEmptyReadonlyArray(self)) return [];
	const out = [];
	for (let i = 0; i < self.length; i++) {
		const inner = f(self[i], i);
		for (let j = 0; j < inner.length; j++) out.push(inner[j]);
	}
	return out;
}))(identity);
/**
* Reduces an array from the left.
*
* **Example**
*
* ```ts
* import { Array } from "effect"
*
* const result = Array.reduce([1, 2, 3], 0, (acc, n) => acc + n)
* console.log(result) // 6
* ```
*
* @category folding
* @since 2.0.0
*/
var reduce$6 = /* @__PURE__ */ dual(3, (self, b, f) => fromIterable$6(self).reduce((b, a, i) => f(b, a, i), b));
/**
* @category constructors
* @since 2.0.0
*/
var unfold = (b, f) => {
	const out = [];
	let next = b;
	let o;
	while (isSome(o = f(next))) {
		const [a, b] = o.value;
		out.push(a);
		next = b;
	}
	return out;
};
/**
* Creates an equivalence relation for arrays.
*
* **Example**
*
* ```ts
* import { Array } from "effect"
*
* const eq = Array.getEquivalence<number>((a, b) => a === b)
* console.log(eq([1, 2, 3], [1, 2, 3])) // true
* ```
*
* @category instances
* @since 2.0.0
*/
var getEquivalence$2 = array$1;
/**
* Remove duplicates from an `Iterable` using the provided `isEquivalent` function,
* preserving the order of the first occurrence of each element.
*
* **Example**
*
* ```ts
* import { Array } from "effect"
*
* const result = Array.dedupeWith([1, 2, 2, 3, 3, 3], (a, b) => a === b)
* console.log(result) // [1, 2, 3]
* ```
*
* @since 2.0.0
*/
var dedupeWith = /* @__PURE__ */ dual(2, (self, isEquivalent) => {
	const input = fromIterable$6(self);
	if (isNonEmptyReadonlyArray(input)) {
		const out = [headNonEmpty$1(input)];
		const rest = tailNonEmpty$1(input);
		for (const r of rest) if (out.every((a) => !isEquivalent(r, a))) out.push(r);
		return out;
	}
	return [];
});
/**
* Remove duplicates from an `Iterable`, preserving the order of the first occurrence of each element.
* The equivalence used to compare elements is provided by `Equal.equivalence()` from the `Equal` module.
*
* @since 2.0.0
*/
var dedupe = (self) => dedupeWith(self, equivalence());
/**
* Joins the elements together with "sep" in the middle.
*
* **Example**
*
* ```ts
* import { Array } from "effect"
*
* const strings = ["a", "b", "c"]
* const joined = Array.join(strings, "-")
* console.log(joined) // "a-b-c"
* ```
*
* @since 2.0.0
* @category folding
*/
var join$1 = /* @__PURE__ */ dual(2, (self, sep) => fromIterable$6(self).join(sep));
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/Number.js
/**
* @memberof Number
* @since 2.0.0
* @category instances
*/
var Order$1 = number;
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/RegExp.js
/**
* Escapes special characters in a regular expression pattern.
*
* @example
* ```ts
* import * as assert from "node:assert"
* import { RegExp } from "effect"
*
* assert.deepStrictEqual(RegExp.escape("a*b"), "a\\*b")
* ```
*
* @since 2.0.0
*/
var escape = (string) => string.replace(/[/\\^$*+?.()|[\]{}]/g, "\\$&");
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/context.js
/** @internal */
var TagTypeId = /* @__PURE__ */ Symbol.for("effect/Context/Tag");
/** @internal */
var ReferenceTypeId = /* @__PURE__ */ Symbol.for("effect/Context/Reference");
/** @internal */
var STMTypeId = /* @__PURE__ */ Symbol.for("effect/STM");
/** @internal */
var TagProto = {
	...EffectPrototype$1,
	_op: "Tag",
	[STMTypeId]: effectVariance,
	[TagTypeId]: {
		_Service: (_) => _,
		_Identifier: (_) => _
	},
	toString() {
		return format$2(this.toJSON());
	},
	toJSON() {
		return {
			_id: "Tag",
			key: this.key,
			stack: this.stack
		};
	},
	[NodeInspectSymbol]() {
		return this.toJSON();
	},
	of(self) {
		return self;
	},
	context(self) {
		return make$19(this, self);
	}
};
var ReferenceProto = {
	...TagProto,
	[ReferenceTypeId]: ReferenceTypeId
};
/** @internal */
var makeGenericTag = (key) => {
	const limit = Error.stackTraceLimit;
	Error.stackTraceLimit = 2;
	const creationError = /* @__PURE__ */ new Error();
	Error.stackTraceLimit = limit;
	const tag = Object.create(TagProto);
	Object.defineProperty(tag, "stack", { get() {
		return creationError.stack;
	} });
	tag.key = key;
	return tag;
};
/** @internal */
var Reference$1 = () => (id, options) => {
	const limit = Error.stackTraceLimit;
	Error.stackTraceLimit = 2;
	const creationError = /* @__PURE__ */ new Error();
	Error.stackTraceLimit = limit;
	function ReferenceClass() {}
	Object.setPrototypeOf(ReferenceClass, ReferenceProto);
	ReferenceClass.key = id;
	ReferenceClass.defaultValue = options.defaultValue;
	Object.defineProperty(ReferenceClass, "stack", { get() {
		return creationError.stack;
	} });
	return ReferenceClass;
};
/** @internal */
var TypeId$7 = /* @__PURE__ */ Symbol.for("effect/Context");
/** @internal */
var ContextProto = {
	[TypeId$7]: { _Services: (_) => _ },
	[symbol](that) {
		if (isContext(that)) {
			if (this.unsafeMap.size === that.unsafeMap.size) {
				for (const k of this.unsafeMap.keys()) if (!that.unsafeMap.has(k) || !equals$1(this.unsafeMap.get(k), that.unsafeMap.get(k))) return false;
				return true;
			}
		}
		return false;
	},
	[symbol$1]() {
		return cached(this, number$1(this.unsafeMap.size));
	},
	pipe() {
		return pipeArguments(this, arguments);
	},
	toString() {
		return format$2(this.toJSON());
	},
	toJSON() {
		return {
			_id: "Context",
			services: Array.from(this.unsafeMap).map(toJSON)
		};
	},
	[NodeInspectSymbol]() {
		return this.toJSON();
	}
};
/** @internal */
var makeContext = (unsafeMap) => {
	const context = Object.create(ContextProto);
	context.unsafeMap = unsafeMap;
	return context;
};
var serviceNotFoundError = (tag) => {
	const error = /* @__PURE__ */ new Error(`Service not found${tag.key ? `: ${String(tag.key)}` : ""}`);
	if (tag.stack) {
		const lines = tag.stack.split("\n");
		if (lines.length > 2) {
			const afterAt = lines[2].match(/at (.*)/);
			if (afterAt) error.message = error.message + ` (defined at ${afterAt[1]})`;
		}
	}
	if (error.stack) {
		const lines = error.stack.split("\n");
		lines.splice(1, 3);
		error.stack = lines.join("\n");
	}
	return error;
};
/** @internal */
var isContext = (u) => hasProperty(u, TypeId$7);
/** @internal */
var isReference = (u) => hasProperty(u, ReferenceTypeId);
var _empty$6 = /* @__PURE__ */ makeContext(/* @__PURE__ */ new Map());
/** @internal */
var empty$18 = () => _empty$6;
/** @internal */
var make$19 = (tag, service) => makeContext(new Map([[tag.key, service]]));
/** @internal */
var add$3 = /* @__PURE__ */ dual(3, (self, tag, service) => {
	const map = new Map(self.unsafeMap);
	map.set(tag.key, service);
	return makeContext(map);
});
var defaultValueCache = /* @__PURE__ */ globalValue("effect/Context/defaultValueCache", () => /* @__PURE__ */ new Map());
var getDefaultValue = (tag) => {
	if (defaultValueCache.has(tag.key)) return defaultValueCache.get(tag.key);
	const value = tag.defaultValue();
	defaultValueCache.set(tag.key, value);
	return value;
};
/** @internal */
var unsafeGetReference = (self, tag) => {
	return self.unsafeMap.has(tag.key) ? self.unsafeMap.get(tag.key) : getDefaultValue(tag);
};
/** @internal */
var unsafeGet$2 = /* @__PURE__ */ dual(2, (self, tag) => {
	if (!self.unsafeMap.has(tag.key)) {
		if (ReferenceTypeId in tag) return getDefaultValue(tag);
		throw serviceNotFoundError(tag);
	}
	return self.unsafeMap.get(tag.key);
});
/** @internal */
var get$6 = unsafeGet$2;
/** @internal */
var getOption$1 = /* @__PURE__ */ dual(2, (self, tag) => {
	if (!self.unsafeMap.has(tag.key)) return isReference(tag) ? some$1(getDefaultValue(tag)) : none$5;
	return some$1(self.unsafeMap.get(tag.key));
});
/** @internal */
var merge$2 = /* @__PURE__ */ dual(2, (self, that) => {
	const map = new Map(self.unsafeMap);
	for (const [tag, s] of that.unsafeMap) map.set(tag, s);
	return makeContext(map);
});
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/Context.js
/**
* Creates a new `Tag` instance with an optional key parameter.
*
* @example
* ```ts
* import * as assert from "node:assert"
* import { Context } from "effect"
*
* assert.strictEqual(Context.GenericTag("PORT").key === Context.GenericTag("PORT").key, true)
* ```
*
* @since 2.0.0
* @category constructors
*/
var GenericTag = makeGenericTag;
/**
* Returns an empty `Context`.
*
* @example
* ```ts
* import * as assert from "node:assert"
* import { Context } from "effect"
*
* assert.strictEqual(Context.isContext(Context.empty()), true)
* ```
*
* @since 2.0.0
* @category constructors
*/
var empty$17 = empty$18;
/**
* Adds a service to a given `Context`.
*
* @example
* ```ts
* import * as assert from "node:assert"
* import { Context, pipe } from "effect"
*
* const Port = Context.GenericTag<{ PORT: number }>("Port")
* const Timeout = Context.GenericTag<{ TIMEOUT: number }>("Timeout")
*
* const someContext = Context.make(Port, { PORT: 8080 })
*
* const Services = pipe(
*   someContext,
*   Context.add(Timeout, { TIMEOUT: 5000 })
* )
*
* assert.deepStrictEqual(Context.get(Services, Port), { PORT: 8080 })
* assert.deepStrictEqual(Context.get(Services, Timeout), { TIMEOUT: 5000 })
* ```
*
* @since 2.0.0
*/
var add$2 = add$3;
/**
* Get a service from the context that corresponds to the given tag.
*
* @example
* ```ts
* import * as assert from "node:assert"
* import { pipe, Context } from "effect"
*
* const Port = Context.GenericTag<{ PORT: number }>("Port")
* const Timeout = Context.GenericTag<{ TIMEOUT: number }>("Timeout")
*
* const Services = pipe(
*   Context.make(Port, { PORT: 8080 }),
*   Context.add(Timeout, { TIMEOUT: 5000 })
* )
*
* assert.deepStrictEqual(Context.get(Services, Timeout), { TIMEOUT: 5000 })
* ```
*
* @since 2.0.0
* @category getters
*/
var get$5 = get$6;
/**
* Get a service from the context that corresponds to the given tag.
* This function is unsafe because if the tag is not present in the context, a runtime error will be thrown.
*
* For a safer version see {@link getOption}.
*
* @example
* ```ts
* import * as assert from "node:assert"
* import { Context } from "effect"
*
* const Port = Context.GenericTag<{ PORT: number }>("Port")
* const Timeout = Context.GenericTag<{ TIMEOUT: number }>("Timeout")
*
* const Services = Context.make(Port, { PORT: 8080 })
*
* assert.deepStrictEqual(Context.unsafeGet(Services, Port), { PORT: 8080 })
* assert.throws(() => Context.unsafeGet(Services, Timeout))
* ```
*
* @since 2.0.0
* @category unsafe
*/
var unsafeGet$1 = unsafeGet$2;
/**
* Get the value associated with the specified tag from the context wrapped in an `Option` object. If the tag is not
* found, the `Option` object will be `None`.
*
* @example
* ```ts
* import * as assert from "node:assert"
* import { Context, Option } from "effect"
*
* const Port = Context.GenericTag<{ PORT: number }>("Port")
* const Timeout = Context.GenericTag<{ TIMEOUT: number }>("Timeout")
*
* const Services = Context.make(Port, { PORT: 8080 })
*
* assert.deepStrictEqual(Context.getOption(Services, Port), Option.some({ PORT: 8080 }))
* assert.deepStrictEqual(Context.getOption(Services, Timeout), Option.none())
* ```
*
* @since 2.0.0
* @category getters
*/
var getOption = getOption$1;
/**
* Merges two `Context`s, returning a new `Context` containing the services of both.
*
* @example
* ```ts
* import * as assert from "node:assert"
* import { Context } from "effect"
*
* const Port = Context.GenericTag<{ PORT: number }>("Port")
* const Timeout = Context.GenericTag<{ TIMEOUT: number }>("Timeout")
*
* const firstContext = Context.make(Port, { PORT: 8080 })
* const secondContext = Context.make(Timeout, { TIMEOUT: 5000 })
*
* const Services = Context.merge(firstContext, secondContext)
*
* assert.deepStrictEqual(Context.get(Services, Port), { PORT: 8080 })
* assert.deepStrictEqual(Context.get(Services, Timeout), { TIMEOUT: 5000 })
* ```
*
* @since 2.0.0
*/
var merge$1 = merge$2;
/**
* Creates a context tag with a default value.
*
* **Details**
*
* `Context.Reference` allows you to create a tag that can hold a value. You can
* provide a default value for the service, which will automatically be used
* when the context is accessed, or override it with a custom implementation
* when needed.
*
* **Example** (Declaring a Tag with a default value)
*
* ```ts
* import * as assert from "node:assert"
* import { Context, Effect } from "effect"
*
* class SpecialNumber extends Context.Reference<SpecialNumber>()(
*   "SpecialNumber",
*   { defaultValue: () => 2048 }
* ) {}
*
* //      ┌─── Effect<void, never, never>
* //      ▼
* const program = Effect.gen(function* () {
*   const specialNumber = yield* SpecialNumber
*   console.log(`The special number is ${specialNumber}`)
* })
*
* // No need to provide the SpecialNumber implementation
* Effect.runPromise(program)
* // Output: The special number is 2048
* ```
*
* **Example** (Overriding the default value)
*
* ```ts
* import { Context, Effect } from "effect"
*
* class SpecialNumber extends Context.Reference<SpecialNumber>()(
*   "SpecialNumber",
*   { defaultValue: () => 2048 }
* ) {}
*
* const program = Effect.gen(function* () {
*   const specialNumber = yield* SpecialNumber
*   console.log(`The special number is ${specialNumber}`)
* })
*
* Effect.runPromise(program.pipe(Effect.provideService(SpecialNumber, -1)))
* // Output: The special number is -1
* ```
*
* @since 3.11.0
* @category constructors
* @experimental
*/
var Reference = Reference$1;
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/Chunk.js
/**
* @since 2.0.0
*/
var TypeId$6 = /* @__PURE__ */ Symbol.for("effect/Chunk");
function copy(src, srcPos, dest, destPos, len) {
	for (let i = srcPos; i < Math.min(src.length, srcPos + len); i++) dest[destPos + i - srcPos] = src[i];
	return dest;
}
var emptyArray = [];
/**
* Compares the two chunks of equal length using the specified function
*
* @category equivalence
* @since 2.0.0
*/
var getEquivalence$1 = (isEquivalent) => make$22((self, that) => self.length === that.length && toReadonlyArray(self).every((value, i) => isEquivalent(value, unsafeGet(that, i))));
var _equivalence$1 = /* @__PURE__ */ getEquivalence$1(equals$1);
var ChunkProto = {
	[TypeId$6]: { _A: (_) => _ },
	toString() {
		return format$2(this.toJSON());
	},
	toJSON() {
		return {
			_id: "Chunk",
			values: toReadonlyArray(this).map(toJSON)
		};
	},
	[NodeInspectSymbol]() {
		return this.toJSON();
	},
	[symbol](that) {
		return isChunk(that) && _equivalence$1(this, that);
	},
	[symbol$1]() {
		return cached(this, array(toReadonlyArray(this)));
	},
	[Symbol.iterator]() {
		switch (this.backing._tag) {
			case "IArray": return this.backing.array[Symbol.iterator]();
			case "IEmpty": return emptyArray[Symbol.iterator]();
			default: return toReadonlyArray(this)[Symbol.iterator]();
		}
	},
	pipe() {
		return pipeArguments(this, arguments);
	}
};
var makeChunk = (backing) => {
	const chunk = Object.create(ChunkProto);
	chunk.backing = backing;
	switch (backing._tag) {
		case "IEmpty":
			chunk.length = 0;
			chunk.depth = 0;
			chunk.left = chunk;
			chunk.right = chunk;
			break;
		case "IConcat":
			chunk.length = backing.left.length + backing.right.length;
			chunk.depth = 1 + Math.max(backing.left.depth, backing.right.depth);
			chunk.left = backing.left;
			chunk.right = backing.right;
			break;
		case "IArray":
			chunk.length = backing.array.length;
			chunk.depth = 0;
			chunk.left = _empty$5;
			chunk.right = _empty$5;
			break;
		case "ISingleton":
			chunk.length = 1;
			chunk.depth = 0;
			chunk.left = _empty$5;
			chunk.right = _empty$5;
			break;
		case "ISlice":
			chunk.length = backing.length;
			chunk.depth = backing.chunk.depth + 1;
			chunk.left = _empty$5;
			chunk.right = _empty$5;
			break;
	}
	return chunk;
};
/**
* Checks if `u` is a `Chunk<unknown>`
*
* @category constructors
* @since 2.0.0
*/
var isChunk = (u) => hasProperty(u, TypeId$6);
var _empty$5 = /* @__PURE__ */ makeChunk({ _tag: "IEmpty" });
/**
* @category constructors
* @since 2.0.0
*/
var empty$16 = () => _empty$5;
/**
* Builds a `NonEmptyChunk` from an non-empty collection of elements.
*
* @category constructors
* @since 2.0.0
*/
var make$18 = (...as) => unsafeFromNonEmptyArray(as);
/**
* Builds a `NonEmptyChunk` from a single element.
*
* @category constructors
* @since 2.0.0
*/
var of$1 = (a) => makeChunk({
	_tag: "ISingleton",
	a
});
/**
* Creates a new `Chunk` from an iterable collection of values.
*
* @category constructors
* @since 2.0.0
*/
var fromIterable$5 = (self) => isChunk(self) ? self : unsafeFromArray(fromIterable$6(self));
var copyToArray = (self, array, initial) => {
	switch (self.backing._tag) {
		case "IArray":
			copy(self.backing.array, 0, array, initial, self.length);
			break;
		case "IConcat":
			copyToArray(self.left, array, initial);
			copyToArray(self.right, array, initial + self.left.length);
			break;
		case "ISingleton":
			array[initial] = self.backing.a;
			break;
		case "ISlice": {
			let i = 0;
			let j = initial;
			while (i < self.length) {
				array[j] = unsafeGet(self, i);
				i += 1;
				j += 1;
			}
			break;
		}
	}
};
var toReadonlyArray_ = (self) => {
	switch (self.backing._tag) {
		case "IEmpty": return emptyArray;
		case "IArray": return self.backing.array;
		default: {
			const arr = new Array(self.length);
			copyToArray(self, arr, 0);
			self.backing = {
				_tag: "IArray",
				array: arr
			};
			self.left = _empty$5;
			self.right = _empty$5;
			self.depth = 0;
			return arr;
		}
	}
};
/**
* Converts a `Chunk` into a `ReadonlyArray`. If the provided `Chunk` is
* non-empty (`NonEmptyChunk`), the function will return a
* `NonEmptyReadonlyArray`, ensuring the non-empty property is preserved.
*
* @category conversions
* @since 2.0.0
*/
var toReadonlyArray = toReadonlyArray_;
var reverseChunk = (self) => {
	switch (self.backing._tag) {
		case "IEmpty":
		case "ISingleton": return self;
		case "IArray": return makeChunk({
			_tag: "IArray",
			array: reverse$2(self.backing.array)
		});
		case "IConcat": return makeChunk({
			_tag: "IConcat",
			left: reverse$1(self.backing.right),
			right: reverse$1(self.backing.left)
		});
		case "ISlice": return unsafeFromArray(reverse$2(toReadonlyArray(self)));
	}
};
/**
* Reverses the order of elements in a `Chunk`.
* Importantly, if the input chunk is a `NonEmptyChunk`, the reversed chunk will also be a `NonEmptyChunk`.
*
* **Example**
*
* ```ts
* import { Chunk } from "effect"
*
* const chunk = Chunk.make(1, 2, 3)
* const result = Chunk.reverse(chunk)
*
* console.log(result)
* // { _id: 'Chunk', values: [ 3, 2, 1 ] }
* ```
*
* @since 2.0.0
* @category elements
*/
var reverse$1 = reverseChunk;
/**
* Wraps an array into a chunk without copying, unsafe on mutable arrays
*
* @since 2.0.0
* @category unsafe
*/
var unsafeFromArray = (self) => self.length === 0 ? empty$16() : self.length === 1 ? of$1(self[0]) : makeChunk({
	_tag: "IArray",
	array: self
});
/**
* Wraps an array into a chunk without copying, unsafe on mutable arrays
*
* @since 2.0.0
* @category unsafe
*/
var unsafeFromNonEmptyArray = (self) => unsafeFromArray(self);
/**
* Gets an element unsafely, will throw on out of bounds
*
* @since 2.0.0
* @category unsafe
*/
var unsafeGet = /* @__PURE__ */ dual(2, (self, index) => {
	switch (self.backing._tag) {
		case "IEmpty": throw new Error(`Index out of bounds`);
		case "ISingleton":
			if (index !== 0) throw new Error(`Index out of bounds`);
			return self.backing.a;
		case "IArray":
			if (index >= self.length || index < 0) throw new Error(`Index out of bounds`);
			return self.backing.array[index];
		case "IConcat": return index < self.left.length ? unsafeGet(self.left, index) : unsafeGet(self.right, index - self.left.length);
		case "ISlice": return unsafeGet(self.backing.chunk, index + self.backing.offset);
	}
});
/**
* Appends the specified element to the end of the `Chunk`.
*
* @category concatenating
* @since 2.0.0
*/
var append = /* @__PURE__ */ dual(2, (self, a) => appendAll$1(self, of$1(a)));
/**
* Prepend an element to the front of a `Chunk`, creating a new `NonEmptyChunk`.
*
* @category concatenating
* @since 2.0.0
*/
var prepend$1 = /* @__PURE__ */ dual(2, (self, elem) => appendAll$1(of$1(elem), self));
/**
* Drops the first up to `n` elements from the chunk
*
* @since 2.0.0
*/
var drop = /* @__PURE__ */ dual(2, (self, n) => {
	if (n <= 0) return self;
	else if (n >= self.length) return _empty$5;
	else switch (self.backing._tag) {
		case "ISlice": return makeChunk({
			_tag: "ISlice",
			chunk: self.backing.chunk,
			offset: self.backing.offset + n,
			length: self.backing.length - n
		});
		case "IConcat":
			if (n > self.left.length) return drop(self.right, n - self.left.length);
			return makeChunk({
				_tag: "IConcat",
				left: drop(self.left, n),
				right: self.right
			});
		default: return makeChunk({
			_tag: "ISlice",
			chunk: self,
			offset: n,
			length: self.length - n
		});
	}
});
/**
* Concatenates two chunks, combining their elements.
* If either chunk is non-empty, the result is also a non-empty chunk.
*
* **Example**
*
* ```ts
* import { Chunk } from "effect"
*
* const result = Chunk.make(1, 2).pipe(Chunk.appendAll(Chunk.make("a", "b")), Chunk.toArray)
*
* console.log(result)
* // [ 1, 2, "a", "b" ]
* ```
*
* @category concatenating
* @since 2.0.0
*/
var appendAll$1 = /* @__PURE__ */ dual(2, (self, that) => {
	if (self.backing._tag === "IEmpty") return that;
	if (that.backing._tag === "IEmpty") return self;
	const diff = that.depth - self.depth;
	if (Math.abs(diff) <= 1) return makeChunk({
		_tag: "IConcat",
		left: self,
		right: that
	});
	else if (diff < -1) if (self.left.depth >= self.right.depth) {
		const nr = appendAll$1(self.right, that);
		return makeChunk({
			_tag: "IConcat",
			left: self.left,
			right: nr
		});
	} else {
		const nrr = appendAll$1(self.right.right, that);
		if (nrr.depth === self.depth - 3) {
			const nr = makeChunk({
				_tag: "IConcat",
				left: self.right.left,
				right: nrr
			});
			return makeChunk({
				_tag: "IConcat",
				left: self.left,
				right: nr
			});
		} else return makeChunk({
			_tag: "IConcat",
			left: makeChunk({
				_tag: "IConcat",
				left: self.left,
				right: self.right.left
			}),
			right: nrr
		});
	}
	else if (that.right.depth >= that.left.depth) return makeChunk({
		_tag: "IConcat",
		left: appendAll$1(self, that.left),
		right: that.right
	});
	else {
		const nll = appendAll$1(self, that.left.left);
		if (nll.depth === that.depth - 3) return makeChunk({
			_tag: "IConcat",
			left: makeChunk({
				_tag: "IConcat",
				left: nll,
				right: that.left.right
			}),
			right: that.right
		});
		else return makeChunk({
			_tag: "IConcat",
			left: nll,
			right: makeChunk({
				_tag: "IConcat",
				left: that.left.right,
				right: that.right
			})
		});
	}
});
/**
* Determines if the chunk is empty.
*
* @since 2.0.0
* @category elements
*/
var isEmpty$3 = (self) => self.length === 0;
/**
* Determines if the chunk is not empty.
*
* @since 2.0.0
* @category elements
*/
var isNonEmpty = (self) => self.length > 0;
/**
* Returns the first element of this chunk.
*
* It will throw an error if the chunk is empty.
*
* @since 2.0.0
* @category unsafe
*/
var unsafeHead = (self) => unsafeGet(self, 0);
/**
* Returns the first element of this non empty chunk.
*
* @since 2.0.0
* @category elements
*/
var headNonEmpty = unsafeHead;
/**
* Returns every elements after the first.
*
* @since 2.0.0
* @category elements
*/
var tailNonEmpty = (self) => drop(self, 1);
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/Duration.js
/**
* @since 2.0.0
*/
var TypeId$5 = /* @__PURE__ */ Symbol.for("effect/Duration");
var bigint0$1 = /* @__PURE__ */ BigInt(0);
var bigint24 = /* @__PURE__ */ BigInt(24);
var bigint60 = /* @__PURE__ */ BigInt(60);
var bigint1e3 = /* @__PURE__ */ BigInt(1e3);
var bigint1e6 = /* @__PURE__ */ BigInt(1e6);
var bigint1e9 = /* @__PURE__ */ BigInt(1e9);
var DURATION_REGEX = /^(-?\d+(?:\.\d+)?)\s+(nanos?|micros?|millis?|seconds?|minutes?|hours?|days?|weeks?)$/;
/**
* @since 2.0.0
*/
var decode = (input) => {
	if (isDuration(input)) return input;
	else if (isNumber(input)) return millis(input);
	else if (isBigInt(input)) return nanos(input);
	else if (Array.isArray(input) && input.length === 2 && input.every(isNumber)) {
		if (input[0] === -Infinity || input[1] === -Infinity || Number.isNaN(input[0]) || Number.isNaN(input[1])) return zero;
		if (input[0] === Infinity || input[1] === Infinity) return infinity;
		return nanos(BigInt(Math.round(input[0] * 1e9)) + BigInt(Math.round(input[1])));
	} else if (isString(input)) {
		const match = DURATION_REGEX.exec(input);
		if (match) {
			const [_, valueStr, unit] = match;
			const value = Number(valueStr);
			switch (unit) {
				case "nano":
				case "nanos": return nanos(BigInt(valueStr));
				case "micro":
				case "micros": return micros(BigInt(valueStr));
				case "milli":
				case "millis": return millis(value);
				case "second":
				case "seconds": return seconds(value);
				case "minute":
				case "minutes": return minutes(value);
				case "hour":
				case "hours": return hours(value);
				case "day":
				case "days": return days(value);
				case "week":
				case "weeks": return weeks(value);
			}
		}
	}
	throw new Error("Invalid DurationInput");
};
var zeroValue = {
	_tag: "Millis",
	millis: 0
};
var infinityValue = { _tag: "Infinity" };
var DurationProto = {
	[TypeId$5]: TypeId$5,
	[symbol$1]() {
		return cached(this, structure(this.value));
	},
	[symbol](that) {
		return isDuration(that) && equals(this, that);
	},
	toString() {
		return `Duration(${format$1(this)})`;
	},
	toJSON() {
		switch (this.value._tag) {
			case "Millis": return {
				_id: "Duration",
				_tag: "Millis",
				millis: this.value.millis
			};
			case "Nanos": return {
				_id: "Duration",
				_tag: "Nanos",
				hrtime: toHrTime(this)
			};
			case "Infinity": return {
				_id: "Duration",
				_tag: "Infinity"
			};
		}
	},
	[NodeInspectSymbol]() {
		return this.toJSON();
	},
	pipe() {
		return pipeArguments(this, arguments);
	}
};
var make$17 = (input) => {
	const duration = Object.create(DurationProto);
	if (isNumber(input)) if (isNaN(input) || input <= 0) duration.value = zeroValue;
	else if (!Number.isFinite(input)) duration.value = infinityValue;
	else if (!Number.isInteger(input)) duration.value = {
		_tag: "Nanos",
		nanos: BigInt(Math.round(input * 1e6))
	};
	else duration.value = {
		_tag: "Millis",
		millis: input
	};
	else if (input <= bigint0$1) duration.value = zeroValue;
	else duration.value = {
		_tag: "Nanos",
		nanos: input
	};
	return duration;
};
/**
* @since 2.0.0
* @category guards
*/
var isDuration = (u) => hasProperty(u, TypeId$5);
/**
* @since 3.5.0
* @category guards
*/
var isZero = (self) => {
	switch (self.value._tag) {
		case "Millis": return self.value.millis === 0;
		case "Nanos": return self.value.nanos === bigint0$1;
		case "Infinity": return false;
	}
};
/**
* @since 2.0.0
* @category constructors
*/
var zero = /* @__PURE__ */ make$17(0);
/**
* @since 2.0.0
* @category constructors
*/
var infinity = /* @__PURE__ */ make$17(Infinity);
/**
* @since 2.0.0
* @category constructors
*/
var nanos = (nanos) => make$17(nanos);
/**
* @since 2.0.0
* @category constructors
*/
var micros = (micros) => make$17(micros * bigint1e3);
/**
* @since 2.0.0
* @category constructors
*/
var millis = (millis) => make$17(millis);
/**
* @since 2.0.0
* @category constructors
*/
var seconds = (seconds) => make$17(seconds * 1e3);
/**
* @since 2.0.0
* @category constructors
*/
var minutes = (minutes) => make$17(minutes * 6e4);
/**
* @since 2.0.0
* @category constructors
*/
var hours = (hours) => make$17(hours * 36e5);
/**
* @since 2.0.0
* @category constructors
*/
var days = (days) => make$17(days * 864e5);
/**
* @since 2.0.0
* @category constructors
*/
var weeks = (weeks) => make$17(weeks * 6048e5);
/**
* @since 2.0.0
* @category getters
*/
var toMillis = (self) => match$1(self, {
	onMillis: (millis) => millis,
	onNanos: (nanos) => Number(nanos) / 1e6
});
/**
* Get the duration in nanoseconds as a bigint.
*
* If the duration is infinite, it throws an error.
*
* @since 2.0.0
* @category getters
*/
var unsafeToNanos = (self) => {
	const _self = decode(self);
	switch (_self.value._tag) {
		case "Infinity": throw new Error("Cannot convert infinite duration to nanos");
		case "Nanos": return _self.value.nanos;
		case "Millis": return BigInt(Math.round(_self.value.millis * 1e6));
	}
};
/**
* @since 2.0.0
* @category getters
*/
var toHrTime = (self) => {
	const _self = decode(self);
	switch (_self.value._tag) {
		case "Infinity": return [Infinity, 0];
		case "Nanos": return [Number(_self.value.nanos / bigint1e9), Number(_self.value.nanos % bigint1e9)];
		case "Millis": return [Math.floor(_self.value.millis / 1e3), Math.round(_self.value.millis % 1e3 * 1e6)];
	}
};
/**
* @since 2.0.0
* @category pattern matching
*/
var match$1 = /* @__PURE__ */ dual(2, (self, options) => {
	const _self = decode(self);
	switch (_self.value._tag) {
		case "Nanos": return options.onNanos(_self.value.nanos);
		case "Infinity": return options.onMillis(Infinity);
		case "Millis": return options.onMillis(_self.value.millis);
	}
});
/**
* @since 2.0.0
* @category pattern matching
*/
var matchWith = /* @__PURE__ */ dual(3, (self, that, options) => {
	const _self = decode(self);
	const _that = decode(that);
	if (_self.value._tag === "Infinity" || _that.value._tag === "Infinity") return options.onMillis(toMillis(_self), toMillis(_that));
	else if (_self.value._tag === "Nanos" || _that.value._tag === "Nanos") {
		const selfNanos = _self.value._tag === "Nanos" ? _self.value.nanos : BigInt(Math.round(_self.value.millis * 1e6));
		const thatNanos = _that.value._tag === "Nanos" ? _that.value.nanos : BigInt(Math.round(_that.value.millis * 1e6));
		return options.onNanos(selfNanos, thatNanos);
	}
	return options.onMillis(_self.value.millis, _that.value.millis);
});
/**
* @category instances
* @since 2.0.0
*/
var Equivalence = (self, that) => matchWith(self, that, {
	onMillis: (self, that) => self === that,
	onNanos: (self, that) => self === that
});
/**
* @since 2.0.0
* @category predicates
*/
var lessThanOrEqualTo = /* @__PURE__ */ dual(2, (self, that) => matchWith(self, that, {
	onMillis: (self, that) => self <= that,
	onNanos: (self, that) => self <= that
}));
/**
* @since 2.0.0
* @category predicates
*/
var greaterThanOrEqualTo = /* @__PURE__ */ dual(2, (self, that) => matchWith(self, that, {
	onMillis: (self, that) => self >= that,
	onNanos: (self, that) => self >= that
}));
/**
* @since 2.0.0
* @category predicates
*/
var equals = /* @__PURE__ */ dual(2, (self, that) => Equivalence(decode(self), decode(that)));
/**
* Converts a `Duration` to its parts.
*
* @since 3.8.0
* @category conversions
*/
var parts = (self) => {
	const duration = decode(self);
	if (duration.value._tag === "Infinity") return {
		days: Infinity,
		hours: Infinity,
		minutes: Infinity,
		seconds: Infinity,
		millis: Infinity,
		nanos: Infinity
	};
	const nanos = unsafeToNanos(duration);
	const ms = nanos / bigint1e6;
	const sec = ms / bigint1e3;
	const min = sec / bigint60;
	const hr = min / bigint60;
	const days = hr / bigint24;
	return {
		days: Number(days),
		hours: Number(hr % bigint24),
		minutes: Number(min % bigint60),
		seconds: Number(sec % bigint60),
		millis: Number(ms % bigint1e3),
		nanos: Number(nanos % bigint1e6)
	};
};
/**
* Converts a `Duration` to a human readable string.
*
* @since 2.0.0
* @category conversions
* @example
* ```ts
* import { Duration } from "effect"
*
* Duration.format(Duration.millis(1000)) // "1s"
* Duration.format(Duration.millis(1001)) // "1s 1ms"
* ```
*/
var format$1 = (self) => {
	const duration = decode(self);
	if (duration.value._tag === "Infinity") return "Infinity";
	if (isZero(duration)) return "0";
	const fragments = parts(duration);
	const pieces = [];
	if (fragments.days !== 0) pieces.push(`${fragments.days}d`);
	if (fragments.hours !== 0) pieces.push(`${fragments.hours}h`);
	if (fragments.minutes !== 0) pieces.push(`${fragments.minutes}m`);
	if (fragments.seconds !== 0) pieces.push(`${fragments.seconds}s`);
	if (fragments.millis !== 0) pieces.push(`${fragments.millis}ms`);
	if (fragments.nanos !== 0) pieces.push(`${fragments.nanos}ns`);
	return pieces.join(" ");
};
/** @internal */
var BUCKET_SIZE = /* @__PURE__ */ Math.pow(2, 5);
/** @internal */
var MASK = BUCKET_SIZE - 1;
/** @internal */
var MAX_INDEX_NODE = BUCKET_SIZE / 2;
/** @internal */
var MIN_ARRAY_NODE = BUCKET_SIZE / 4;
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/hashMap/bitwise.js
/**
* Hamming weight.
*
* Taken from: http://jsperf.com/hamming-weight
*
* @internal
*/
function popcount(x) {
	x -= x >> 1 & 1431655765;
	x = (x & 858993459) + (x >> 2 & 858993459);
	x = x + (x >> 4) & 252645135;
	x += x >> 8;
	x += x >> 16;
	return x & 127;
}
/** @internal */
function hashFragment(shift, h) {
	return h >>> shift & MASK;
}
/** @internal */
function toBitmap(x) {
	return 1 << x;
}
/** @internal */
function fromBitmap(bitmap, bit) {
	return popcount(bitmap & bit - 1);
}
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/stack.js
var make$16 = (value, previous) => ({
	value,
	previous
});
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/hashMap/array.js
/** @internal */
function arrayUpdate(mutate, at, v, arr) {
	let out = arr;
	if (!mutate) {
		const len = arr.length;
		out = new Array(len);
		for (let i = 0; i < len; ++i) out[i] = arr[i];
	}
	out[at] = v;
	return out;
}
/** @internal */
function arraySpliceOut(mutate, at, arr) {
	const newLen = arr.length - 1;
	let i = 0;
	let g = 0;
	let out = arr;
	if (mutate) i = g = at;
	else {
		out = new Array(newLen);
		while (i < at) out[g++] = arr[i++];
	}
	++i;
	while (i <= newLen) out[g++] = arr[i++];
	if (mutate) out.length = newLen;
	return out;
}
/** @internal */
function arraySpliceIn(mutate, at, v, arr) {
	const len = arr.length;
	if (mutate) {
		let i = len;
		while (i >= at) arr[i--] = arr[i];
		arr[at] = v;
		return arr;
	}
	let i = 0, g = 0;
	const out = new Array(len + 1);
	while (i < at) out[g++] = arr[i++];
	out[at] = v;
	while (i < len) out[++g] = arr[i++];
	return out;
}
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/hashMap/node.js
/** @internal */
var EmptyNode = class EmptyNode {
	constructor() {
		_defineProperty(this, "_tag", "EmptyNode");
	}
	modify(edit, _shift, f, hash, key, size) {
		const v = f(none$4());
		if (isNone(v)) return new EmptyNode();
		++size.value;
		return new LeafNode(edit, hash, key, v);
	}
};
/** @internal */
function isEmptyNode(a) {
	return isTagged(a, "EmptyNode");
}
/** @internal */
function isLeafNode(node) {
	return isEmptyNode(node) || node._tag === "LeafNode" || node._tag === "CollisionNode";
}
/** @internal */
function canEditNode(node, edit) {
	return isEmptyNode(node) ? false : edit === node.edit;
}
/** @internal */
var LeafNode = class LeafNode {
	constructor(edit, hash, key, value) {
		_defineProperty(this, "edit", void 0);
		_defineProperty(this, "hash", void 0);
		_defineProperty(this, "key", void 0);
		_defineProperty(this, "value", void 0);
		_defineProperty(this, "_tag", "LeafNode");
		this.edit = edit;
		this.hash = hash;
		this.key = key;
		this.value = value;
	}
	modify(edit, shift, f, hash, key, size) {
		if (equals$1(key, this.key)) {
			const v = f(this.value);
			if (v === this.value) return this;
			else if (isNone(v)) {
				--size.value;
				return new EmptyNode();
			}
			if (canEditNode(this, edit)) {
				this.value = v;
				return this;
			}
			return new LeafNode(edit, hash, key, v);
		}
		const v = f(none$4());
		if (isNone(v)) return this;
		++size.value;
		return mergeLeaves(edit, shift, this.hash, this, hash, new LeafNode(edit, hash, key, v));
	}
};
/** @internal */
var CollisionNode = class CollisionNode {
	constructor(edit, hash, children) {
		_defineProperty(this, "edit", void 0);
		_defineProperty(this, "hash", void 0);
		_defineProperty(this, "children", void 0);
		_defineProperty(this, "_tag", "CollisionNode");
		this.edit = edit;
		this.hash = hash;
		this.children = children;
	}
	modify(edit, shift, f, hash, key, size) {
		if (hash === this.hash) {
			const canEdit = canEditNode(this, edit);
			const list = this.updateCollisionList(canEdit, edit, this.hash, this.children, f, key, size);
			if (list === this.children) return this;
			return list.length > 1 ? new CollisionNode(edit, this.hash, list) : list[0];
		}
		const v = f(none$4());
		if (isNone(v)) return this;
		++size.value;
		return mergeLeaves(edit, shift, this.hash, this, hash, new LeafNode(edit, hash, key, v));
	}
	updateCollisionList(mutate, edit, hash, list, f, key, size) {
		const len = list.length;
		for (let i = 0; i < len; ++i) {
			const child = list[i];
			if ("key" in child && equals$1(key, child.key)) {
				const value = child.value;
				const newValue = f(value);
				if (newValue === value) return list;
				if (isNone(newValue)) {
					--size.value;
					return arraySpliceOut(mutate, i, list);
				}
				return arrayUpdate(mutate, i, new LeafNode(edit, hash, key, newValue), list);
			}
		}
		const newValue = f(none$4());
		if (isNone(newValue)) return list;
		++size.value;
		return arrayUpdate(mutate, len, new LeafNode(edit, hash, key, newValue), list);
	}
};
/** @internal */
var IndexedNode = class IndexedNode {
	constructor(edit, mask, children) {
		_defineProperty(this, "edit", void 0);
		_defineProperty(this, "mask", void 0);
		_defineProperty(this, "children", void 0);
		_defineProperty(this, "_tag", "IndexedNode");
		this.edit = edit;
		this.mask = mask;
		this.children = children;
	}
	modify(edit, shift, f, hash, key, size) {
		const mask = this.mask;
		const children = this.children;
		const frag = hashFragment(shift, hash);
		const bit = toBitmap(frag);
		const indx = fromBitmap(mask, bit);
		const exists = mask & bit;
		const canEdit = canEditNode(this, edit);
		if (!exists) {
			const _newChild = new EmptyNode().modify(edit, shift + 5, f, hash, key, size);
			if (!_newChild) return this;
			return children.length >= MAX_INDEX_NODE ? expand(edit, frag, _newChild, mask, children) : new IndexedNode(edit, mask | bit, arraySpliceIn(canEdit, indx, _newChild, children));
		}
		const current = children[indx];
		const child = current.modify(edit, shift + 5, f, hash, key, size);
		if (current === child) return this;
		let bitmap = mask;
		let newChildren;
		if (isEmptyNode(child)) {
			bitmap &= ~bit;
			if (!bitmap) return new EmptyNode();
			if (children.length <= 2 && isLeafNode(children[indx ^ 1])) return children[indx ^ 1];
			newChildren = arraySpliceOut(canEdit, indx, children);
		} else newChildren = arrayUpdate(canEdit, indx, child, children);
		if (canEdit) {
			this.mask = bitmap;
			this.children = newChildren;
			return this;
		}
		return new IndexedNode(edit, bitmap, newChildren);
	}
};
/** @internal */
var ArrayNode = class ArrayNode {
	constructor(edit, size, children) {
		_defineProperty(this, "edit", void 0);
		_defineProperty(this, "size", void 0);
		_defineProperty(this, "children", void 0);
		_defineProperty(this, "_tag", "ArrayNode");
		this.edit = edit;
		this.size = size;
		this.children = children;
	}
	modify(edit, shift, f, hash, key, size) {
		let count = this.size;
		const children = this.children;
		const frag = hashFragment(shift, hash);
		const child = children[frag];
		const newChild = (child || new EmptyNode()).modify(edit, shift + 5, f, hash, key, size);
		if (child === newChild) return this;
		const canEdit = canEditNode(this, edit);
		let newChildren;
		if (isEmptyNode(child) && !isEmptyNode(newChild)) {
			++count;
			newChildren = arrayUpdate(canEdit, frag, newChild, children);
		} else if (!isEmptyNode(child) && isEmptyNode(newChild)) {
			--count;
			if (count <= MIN_ARRAY_NODE) return pack(edit, count, frag, children);
			newChildren = arrayUpdate(canEdit, frag, new EmptyNode(), children);
		} else newChildren = arrayUpdate(canEdit, frag, newChild, children);
		if (canEdit) {
			this.size = count;
			this.children = newChildren;
			return this;
		}
		return new ArrayNode(edit, count, newChildren);
	}
};
function pack(edit, count, removed, elements) {
	const children = new Array(count - 1);
	let g = 0;
	let bitmap = 0;
	for (let i = 0, len = elements.length; i < len; ++i) if (i !== removed) {
		const elem = elements[i];
		if (elem && !isEmptyNode(elem)) {
			children[g++] = elem;
			bitmap |= 1 << i;
		}
	}
	return new IndexedNode(edit, bitmap, children);
}
function expand(edit, frag, child, bitmap, subNodes) {
	const arr = [];
	let bit = bitmap;
	let count = 0;
	for (let i = 0; bit; ++i) {
		if (bit & 1) arr[i] = subNodes[count++];
		bit >>>= 1;
	}
	arr[frag] = child;
	return new ArrayNode(edit, count + 1, arr);
}
function mergeLeavesInner(edit, shift, h1, n1, h2, n2) {
	if (h1 === h2) return new CollisionNode(edit, h1, [n2, n1]);
	const subH1 = hashFragment(shift, h1);
	const subH2 = hashFragment(shift, h2);
	if (subH1 === subH2) return (child) => new IndexedNode(edit, toBitmap(subH1) | toBitmap(subH2), [child]);
	else {
		const children = subH1 < subH2 ? [n1, n2] : [n2, n1];
		return new IndexedNode(edit, toBitmap(subH1) | toBitmap(subH2), children);
	}
}
function mergeLeaves(edit, shift, h1, n1, h2, n2) {
	let stack = void 0;
	let currentShift = shift;
	while (true) {
		const res = mergeLeavesInner(edit, currentShift, h1, n1, h2, n2);
		if (typeof res === "function") {
			stack = make$16(res, stack);
			currentShift = currentShift + 5;
		} else {
			let final = res;
			while (stack != null) {
				final = stack.value(final);
				stack = stack.previous;
			}
			return final;
		}
	}
}
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/hashMap.js
var _Symbol$iterator$3;
var HashMapSymbolKey = "effect/HashMap";
/** @internal */
var HashMapTypeId = /* @__PURE__ */ Symbol.for(HashMapSymbolKey);
var HashMapProto = {
	[HashMapTypeId]: HashMapTypeId,
	[Symbol.iterator]() {
		return new HashMapIterator(this, (k, v) => [k, v]);
	},
	[symbol$1]() {
		let hash$1 = hash(HashMapSymbolKey);
		for (const item of this) hash$1 ^= pipe(hash(item[0]), combine$5(hash(item[1])));
		return cached(this, hash$1);
	},
	[symbol](that) {
		if (isHashMap(that)) {
			if (that._size !== this._size) return false;
			for (const item of this) {
				const elem = pipe(that, getHash(item[0], hash(item[0])));
				if (isNone(elem)) return false;
				else if (!equals$1(item[1], elem.value)) return false;
			}
			return true;
		}
		return false;
	},
	toString() {
		return format$2(this.toJSON());
	},
	toJSON() {
		return {
			_id: "HashMap",
			values: Array.from(this).map(toJSON)
		};
	},
	[NodeInspectSymbol]() {
		return this.toJSON();
	},
	pipe() {
		return pipeArguments(this, arguments);
	}
};
var makeImpl$1 = (editable, edit, root, size) => {
	const map = Object.create(HashMapProto);
	map._editable = editable;
	map._edit = edit;
	map._root = root;
	map._size = size;
	return map;
};
_Symbol$iterator$3 = Symbol.iterator;
var HashMapIterator = class HashMapIterator {
	constructor(map, f) {
		_defineProperty(this, "map", void 0);
		_defineProperty(this, "f", void 0);
		_defineProperty(this, "v", void 0);
		this.map = map;
		this.f = f;
		this.v = visitLazy(this.map._root, this.f, void 0);
	}
	next() {
		if (isNone(this.v)) return {
			done: true,
			value: void 0
		};
		const v0 = this.v.value;
		this.v = applyCont(v0.cont);
		return {
			done: false,
			value: v0.value
		};
	}
	[_Symbol$iterator$3]() {
		return new HashMapIterator(this.map, this.f);
	}
};
var applyCont = (cont) => cont ? visitLazyChildren(cont[0], cont[1], cont[2], cont[3], cont[4]) : none$4();
var visitLazy = (node, f, cont = void 0) => {
	switch (node._tag) {
		case "LeafNode":
			if (isSome(node.value)) return some({
				value: f(node.key, node.value.value),
				cont
			});
			return applyCont(cont);
		case "CollisionNode":
		case "ArrayNode":
		case "IndexedNode": {
			const children = node.children;
			return visitLazyChildren(children.length, children, 0, f, cont);
		}
		default: return applyCont(cont);
	}
};
var visitLazyChildren = (len, children, i, f, cont) => {
	while (i < len) {
		const child = children[i++];
		if (child && !isEmptyNode(child)) return visitLazy(child, f, [
			len,
			children,
			i,
			f,
			cont
		]);
	}
	return applyCont(cont);
};
var _empty$4 = /* @__PURE__ */ makeImpl$1(false, 0, /* @__PURE__ */ new EmptyNode(), 0);
/** @internal */
var empty$15 = () => _empty$4;
/** @internal */
var fromIterable$4 = (entries) => {
	const map = beginMutation$1(empty$15());
	for (const entry of entries) set$3(map, entry[0], entry[1]);
	return endMutation$1(map);
};
/** @internal */
var isHashMap = (u) => hasProperty(u, HashMapTypeId);
/** @internal */
var isEmpty$2 = (self) => self && isEmptyNode(self._root);
/** @internal */
var get$4 = /* @__PURE__ */ dual(2, (self, key) => getHash(self, key, hash(key)));
/** @internal */
var getHash = /* @__PURE__ */ dual(3, (self, key, hash) => {
	let node = self._root;
	let shift = 0;
	while (true) switch (node._tag) {
		case "LeafNode": return equals$1(key, node.key) ? node.value : none$4();
		case "CollisionNode":
			if (hash === node.hash) {
				const children = node.children;
				for (let i = 0, len = children.length; i < len; ++i) {
					const child = children[i];
					if ("key" in child && equals$1(key, child.key)) return child.value;
				}
			}
			return none$4();
		case "IndexedNode": {
			const bit = toBitmap(hashFragment(shift, hash));
			if (node.mask & bit) {
				node = node.children[fromBitmap(node.mask, bit)];
				shift += 5;
				break;
			}
			return none$4();
		}
		case "ArrayNode":
			node = node.children[hashFragment(shift, hash)];
			if (node) {
				shift += 5;
				break;
			}
			return none$4();
		default: return none$4();
	}
});
/** @internal */
var has$3 = /* @__PURE__ */ dual(2, (self, key) => isSome(getHash(self, key, hash(key))));
/** @internal */
var set$3 = /* @__PURE__ */ dual(3, (self, key, value) => modifyAt$1(self, key, () => some(value)));
/** @internal */
var setTree = /* @__PURE__ */ dual(3, (self, newRoot, newSize) => {
	if (self._editable) {
		self._root = newRoot;
		self._size = newSize;
		return self;
	}
	return newRoot === self._root ? self : makeImpl$1(self._editable, self._edit, newRoot, newSize);
});
/** @internal */
var keys$1 = (self) => new HashMapIterator(self, (key) => key);
/** @internal */
var size$2 = (self) => self._size;
/** @internal */
var beginMutation$1 = (self) => makeImpl$1(true, self._edit + 1, self._root, self._size);
/** @internal */
var endMutation$1 = (self) => {
	self._editable = false;
	return self;
};
/** @internal */
var modifyAt$1 = /* @__PURE__ */ dual(3, (self, key, f) => modifyHash(self, key, hash(key), f));
/** @internal */
var modifyHash = /* @__PURE__ */ dual(4, (self, key, hash, f) => {
	const size = { value: self._size };
	return pipe(self, setTree(self._root.modify(self._editable ? self._edit : NaN, 0, f, hash, key, size), size.value));
});
/** @internal */
var remove$2 = /* @__PURE__ */ dual(2, (self, key) => modifyAt$1(self, key, none$4));
/**
* Maps over the entries of the `HashMap` using the specified function.
*
* @since 2.0.0
* @category mapping
*/
var map$3 = /* @__PURE__ */ dual(2, (self, f) => reduce$5(self, empty$15(), (map, value, key) => set$3(map, key, f(value, key))));
/** @internal */
var forEach$1 = /* @__PURE__ */ dual(2, (self, f) => reduce$5(self, void 0, (_, value, key) => f(value, key)));
/** @internal */
var reduce$5 = /* @__PURE__ */ dual(3, (self, zero, f) => {
	const root = self._root;
	if (root._tag === "LeafNode") return isSome(root.value) ? f(zero, root.value.value, root.key) : zero;
	if (root._tag === "EmptyNode") return zero;
	const toVisit = [root.children];
	let children;
	while (children = toVisit.pop()) for (let i = 0, len = children.length; i < len;) {
		const child = children[i++];
		if (child && !isEmptyNode(child)) if (child._tag === "LeafNode") {
			if (isSome(child.value)) zero = f(zero, child.value.value, child.key);
		} else toVisit.push(child.children);
	}
	return zero;
});
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/hashSet.js
var HashSetSymbolKey = "effect/HashSet";
/** @internal */
var HashSetTypeId = /* @__PURE__ */ Symbol.for(HashSetSymbolKey);
var HashSetProto = {
	[HashSetTypeId]: HashSetTypeId,
	[Symbol.iterator]() {
		return keys$1(this._keyMap);
	},
	[symbol$1]() {
		return cached(this, combine$5(hash(this._keyMap))(hash(HashSetSymbolKey)));
	},
	[symbol](that) {
		if (isHashSet(that)) return size$2(this._keyMap) === size$2(that._keyMap) && equals$1(this._keyMap, that._keyMap);
		return false;
	},
	toString() {
		return format$2(this.toJSON());
	},
	toJSON() {
		return {
			_id: "HashSet",
			values: Array.from(this).map(toJSON)
		};
	},
	[NodeInspectSymbol]() {
		return this.toJSON();
	},
	pipe() {
		return pipeArguments(this, arguments);
	}
};
/** @internal */
var makeImpl = (keyMap) => {
	const set = Object.create(HashSetProto);
	set._keyMap = keyMap;
	return set;
};
/** @internal */
var isHashSet = (u) => hasProperty(u, HashSetTypeId);
var _empty$3 = /* @__PURE__ */ makeImpl(/* @__PURE__ */ empty$15());
/** @internal */
var empty$14 = () => _empty$3;
/** @internal */
var fromIterable$3 = (elements) => {
	const set = beginMutation(empty$14());
	for (const value of elements) add$1(set, value);
	return endMutation(set);
};
/** @internal */
var make$15 = (...elements) => {
	const set = beginMutation(empty$14());
	for (const value of elements) add$1(set, value);
	return endMutation(set);
};
/** @internal */
var has$2 = /* @__PURE__ */ dual(2, (self, value) => has$3(self._keyMap, value));
/** @internal */
var size$1 = (self) => size$2(self._keyMap);
/** @internal */
var beginMutation = (self) => makeImpl(beginMutation$1(self._keyMap));
/** @internal */
var endMutation = (self) => {
	self._keyMap._editable = false;
	return self;
};
/** @internal */
var mutate = /* @__PURE__ */ dual(2, (self, f) => {
	const transient = beginMutation(self);
	f(transient);
	return endMutation(transient);
});
/** @internal */
var add$1 = /* @__PURE__ */ dual(2, (self, value) => self._keyMap._editable ? (set$3(value, true)(self._keyMap), self) : makeImpl(set$3(value, true)(self._keyMap)));
/** @internal */
var remove$1 = /* @__PURE__ */ dual(2, (self, value) => self._keyMap._editable ? (remove$2(value)(self._keyMap), self) : makeImpl(remove$2(value)(self._keyMap)));
/** @internal */
var difference$1 = /* @__PURE__ */ dual(2, (self, that) => mutate(self, (set) => {
	for (const value of that) remove$1(set, value);
}));
/** @internal */
var union$1 = /* @__PURE__ */ dual(2, (self, that) => mutate(empty$14(), (set) => {
	forEach(self, (value) => add$1(set, value));
	for (const value of that) add$1(set, value);
}));
/** @internal */
var forEach = /* @__PURE__ */ dual(2, (self, f) => forEach$1(self._keyMap, (_, k) => f(k)));
/** @internal */
var reduce$4 = /* @__PURE__ */ dual(3, (self, zero, f) => reduce$5(self._keyMap, zero, (z, _, a) => f(z, a)));
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/HashSet.js
/**
* # HashSet
*
* An immutable `HashSet` provides a collection of unique values with efficient
* lookup, insertion and removal. Once created, a `HashSet` cannot be modified;
* any operation that would alter the set instead returns a new `HashSet` with
* the changes. This immutability offers benefits like predictable state
* management and easier reasoning about your code.
*
* ## What Problem Does It Solve?
*
* `HashSet` solves the problem of maintaining an unsorted collection where each
* value appears exactly once, with fast operations for checking membership and
* adding/removing values.
*
* ## When to Use
*
* Use `HashSet` when you need:
*
* - A collection with no duplicate values
* - Efficient membership testing (**`O(1)`** average complexity)
* - Set operations like union, intersection, and difference
* - An immutable data structure that preserves functional programming patterns
*
* ## Advanced Features
*
* HashSet provides operations for:
*
* - Transforming sets with map and flatMap
* - Filtering elements with filter
* - Combining sets with union, intersection and difference
* - Performance optimizations via mutable operations in controlled contexts
*
* ## Performance Characteristics
*
* - **Lookup** operations ({@link module:HashSet.has}): **`O(1)`** average time
*   complexity
* - **Insertion** operations ({@link module:HashSet.add}): **`O(1)`** average time
*   complexity
* - **Removal** operations ({@link module:HashSet.remove}): **`O(1)`** average
*   time complexity
* - **Set** operations ({@link module:HashSet.union},
*   {@link module:HashSet.intersection}): **`O(n)`** where n is the size of the
*   smaller set
* - **Iteration**: **`O(n)`** where n is the size of the set
*
* The HashSet data structure implements the following traits:
*
* - {@link Iterable}: allows iterating over the values in the set
* - {@link Equal}: allows comparing two sets for value-based equality
* - {@link Pipeable}: allows chaining operations with the pipe operator
* - {@link Inspectable}: allows inspecting the contents of the set
*
* ## Operations Reference
*
* | Category     | Operation                           | Description                                 | Complexity |
* | ------------ | ----------------------------------- | ------------------------------------------- | ---------- |
* | constructors | {@link module:HashSet.empty}        | Creates an empty HashSet                    | O(1)       |
* | constructors | {@link module:HashSet.fromIterable} | Creates a HashSet from an iterable          | O(n)       |
* | constructors | {@link module:HashSet.make}         | Creates a HashSet from multiple values      | O(n)       |
* |              |                                     |                                             |            |
* | elements     | {@link module:HashSet.has}          | Checks if a value exists in the set         | O(1) avg   |
* | elements     | {@link module:HashSet.some}         | Checks if any element satisfies a predicate | O(n)       |
* | elements     | {@link module:HashSet.every}        | Checks if all elements satisfy a predicate  | O(n)       |
* | elements     | {@link module:HashSet.isSubset}     | Checks if a set is a subset of another      | O(n)       |
* |              |                                     |                                             |            |
* | getters      | {@link module:HashSet.values}       | Gets an iterator of all values              | O(1)       |
* | getters      | {@link module:HashSet.toValues}     | Gets an array of all values                 | O(n)       |
* | getters      | {@link module:HashSet.size}         | Gets the number of elements                 | O(1)       |
* |              |                                     |                                             |            |
* | mutations    | {@link module:HashSet.add}          | Adds a value to the set                     | O(1) avg   |
* | mutations    | {@link module:HashSet.remove}       | Removes a value from the set                | O(1) avg   |
* | mutations    | {@link module:HashSet.toggle}       | Toggles a value's presence                  | O(1) avg   |
* |              |                                     |                                             |            |
* | operations   | {@link module:HashSet.difference}   | Computes set difference (A - B)             | O(n)       |
* | operations   | {@link module:HashSet.intersection} | Computes set intersection (A ∩ B)           | O(n)       |
* | operations   | {@link module:HashSet.union}        | Computes set union (A ∪ B)                  | O(n)       |
* |              |                                     |                                             |            |
* | mapping      | {@link module:HashSet.map}          | Transforms each element                     | O(n)       |
* |              |                                     |                                             |            |
* | sequencing   | {@link module:HashSet.flatMap}      | Transforms and flattens elements            | O(n)       |
* |              |                                     |                                             |            |
* | traversing   | {@link module:HashSet.forEach}      | Applies a function to each element          | O(n)       |
* |              |                                     |                                             |            |
* | folding      | {@link module:HashSet.reduce}       | Reduces the set to a single value           | O(n)       |
* |              |                                     |                                             |            |
* | filtering    | {@link module:HashSet.filter}       | Keeps elements that satisfy a predicate     | O(n)       |
* |              |                                     |                                             |            |
* | partitioning | {@link module:HashSet.partition}    | Splits into two sets by a predicate         | O(n)       |
*
* ## Notes
*
* ### Composability with the Effect Ecosystem:
*
* This `HashSet` is designed to work seamlessly within the Effect ecosystem. It
* implements the {@link Iterable}, {@link Equal}, {@link Pipeable}, and
* {@link Inspectable} traits from Effect. This ensures compatibility with other
* Effect data structures and functionalities. For example, you can easily use
* Effect's `pipe` method to chain operations on the `HashSet`.
*
* **Equality of Elements with Effect's {@link Equal `Equal`} Trait:**
*
* This `HashSet` relies on Effect's {@link Equal} trait to determine the
* uniqueness of elements within the set. The way equality is checked depends on
* the type of the elements:
*
* - **Primitive Values:** For primitive JavaScript values like strings, numbers,
*   booleans, `null`, and `undefined`, equality is determined by their value
*   (similar to the `===` operator).
* - **Objects and Custom Types:** For objects and other custom types, equality is
*   determined by whether those types implement the {@link Equal} interface
*   themselves. If an element type implements `Equal`, the `HashSet` will
*   delegate to that implementation to perform the equality check. This allows
*   you to define custom logic for determining when two instances of your
*   objects should be considered equal based on their properties, rather than
*   just their object identity.
*
* ```ts
* import { Equal, Hash, HashSet } from "effect"
*
* class Person implements Equal.Equal {
*   constructor(
*     readonly id: number, // Unique identifier
*     readonly name: string,
*     readonly age: number
*   ) {}
*
*   // Define equality based on id, name, and age
*   [Equal.symbol](that: Equal.Equal): boolean {
*     if (that instanceof Person) {
*       return (
*         Equal.equals(this.id, that.id) &&
*         Equal.equals(this.name, that.name) &&
*         Equal.equals(this.age, that.age)
*       )
*     }
*     return false
*   }
*
*   // Generate a hash code based on the unique id
*   [Hash.symbol](): number {
*     return Hash.hash(this.id)
*   }
* }
*
* // Creating a HashSet with objects that implement the Equal interface
* const set = HashSet.empty().pipe(
*   HashSet.add(new Person(1, "Alice", 30)),
*   HashSet.add(new Person(1, "Alice", 30))
* )
*
* // HashSet recognizes them as equal, so only one element is stored
* console.log(HashSet.size(set))
* // Output: 1
* ```
*
* **Simplifying Equality and Hashing with `Data` and `Schema`:**
*
* Effect's {@link Data} and {@link Schema `Schema.Data`} modules offer powerful
* ways to automatically handle the implementation of both the {@link Equal} and
* {@link Hash} traits for your custom data structures.
*
* - **`Data` Module:** By using constructors like `Data.struct`, `Data.tuple`,
*   `Data.array`, or `Data.case` to define your data types, Effect
*   automatically generates the necessary implementations for value-based
*   equality and consistent hashing. This significantly reduces boilerplate and
*   ensures correctness.
*
* ```ts
* import { HashSet, Data, Equal } from "effect"
* import assert from "node:assert/strict"
*
* // Data.* implements the `Equal` traits for us
* const person1 = Data.struct({ id: 1, name: "Alice", age: 30 })
* const person2 = Data.struct({ id: 1, name: "Alice", age: 30 })
*
* assert(Equal.equals(person1, person2))
*
* const set = HashSet.empty().pipe(
*   HashSet.add(person1),
*   HashSet.add(person2)
* )
*
* // HashSet recognizes them as equal, so only one element is stored
* console.log(HashSet.size(set)) // Output: 1
* ```
*
* - **`Schema` Module:** When defining data schemas using the {@link Schema}
*   module, you can use `Schema.Data` to automatically include the `Equal` and
*   `Hash` traits in the decoded objects. This is particularly important when
*   working with `HashSet`. **For decoded objects to be correctly recognized as
*   equal within a `HashSet`, ensure that the schema for those objects is
*   defined using `Schema.Data`.**
*
* ```ts
* import { Equal, HashSet, Schema } from "effect"
* import assert from "node:assert/strict"
*
* // Schema.Data implements the `Equal` traits for us
* const PersonSchema = Schema.Data(
*   Schema.Struct({
*     id: Schema.Number,
*     name: Schema.String,
*     age: Schema.Number
*   })
* )
*
* const Person = Schema.decode(PersonSchema)
*
* const person1 = Person({ id: 1, name: "Alice", age: 30 })
* const person2 = Person({ id: 1, name: "Alice", age: 30 })
*
* assert(Equal.equals(person1, person2)) // Output: true
*
* const set = HashSet.empty().pipe(
*   HashSet.add(person1),
*   HashSet.add(person2)
* )
*
* // HashSet thanks to Schema.Data implementation of the `Equal` trait, recognizes the two Person as equal, so only one element is stored
* console.log(HashSet.size(set)) // Output: 1
* ```
*
* ### Interoperability with the JavaScript Runtime:
*
* To interoperate with the regular JavaScript runtime, Effect's `HashSet`
* provides methods to access its elements in formats readily usable by
* JavaScript APIs: {@link values `HashSet.values`},
* {@link toValues `HashSet.toValues`}
*
* ```ts
* import { HashSet } from "effect"
*
* const hashSet: HashSet.HashSet<number> = HashSet.make(1, 2, 3)
*
* // Using HashSet.values to convert HashSet.HashSet<A> to IterableIterator<A>
* const iterable: IterableIterator<number> = HashSet.values(hashSet)
*
* console.log(...iterable) // Logs:  1 2 3
*
* // Using HashSet.toValues to convert HashSet.HashSet<A> to Array<A>
* const array: Array<number> = HashSet.toValues(hashSet)
*
* console.log(array) // Logs: [ 1, 2, 3 ]
* ```
*
* Be mindful of performance implications (both time and space complexity) when
* frequently converting between Effect's immutable HashSet and mutable
* JavaScript data structures, especially for large collections.
*
* @module HashSet
* @since 2.0.0
*/
/**
* Creates an empty `HashSet`.
*
* Time complexity: **`O(1)`**
*
* @memberof HashSet
* @since 2.0.0
* @category constructors
* @example
*
* ```ts
* import { HashSet, pipe } from "effect"
*
* console.log(
*   pipe(
*     // Provide a type argument to create a HashSet of a specific type
*     HashSet.empty<number>(),
*     HashSet.add(1),
*     HashSet.add(1), // Notice the duplicate
*     HashSet.add(2),
*     HashSet.toValues
*   )
* ) // Output: [1, 2]
* ```
*
* @see Other `HashSet` constructors are {@link module:HashSet.make} {@link module:HashSet.fromIterable}
*/
var empty$13 = empty$14;
/**
* Creates a new `HashSet` from an iterable collection of values.
*
* Time complexity: **`O(n)`** where n is the number of elements in the iterable
*
* @memberof HashSet
* @since 2.0.0
* @category constructors
* @example
*
* ```ts
* // Creating a HashSet from an Array
* import { HashSet, pipe } from "effect"
*
* console.log(
*   pipe(
*     [1, 2, 3, 4, 5, 1, 2, 3], // Array<number> is an Iterable<number>;  Note the duplicates.
*     HashSet.fromIterable,
*     HashSet.toValues
*   )
* ) // Output: [1, 2, 3, 4, 5]
* ```
*
* @example
*
* ```ts
* // Creating a HashSet from a Set
* import { HashSet, pipe } from "effect"
*
* console.log(
*   pipe(
*     new Set(["apple", "banana", "orange", "apple"]), // Set<string> is an Iterable<string>
*     HashSet.fromIterable,
*     HashSet.toValues
*   )
* ) // Output: ["apple", "banana", "orange"]
* ```
*
* @example
*
* ```ts
* // Creating a HashSet from a Generator
* import { HashSet } from "effect"
*
* // Generator functions return iterables
* function* fibonacci(n: number): Generator<number, void, unknown> {
*   let [a, b] = [0, 1]
*   for (let i = 0; i < n; i++) {
*     yield a
*     ;[a, b] = [b, a + b]
*   }
* }
*
* // Create a HashSet from the first 10 Fibonacci numbers
* const fibonacciSet = HashSet.fromIterable(fibonacci(10))
*
* console.log(HashSet.toValues(fibonacciSet))
* // Outputs: [0, 1, 2, 3, 5, 8, 13, 21, 34] but in unsorted order
* ```
*
* @example
*
* ```ts
* //  Creating a HashSet from another HashSet
* import { HashSet, pipe } from "effect"
*
* console.log(
*   pipe(
*     // since HashSet implements the Iterable interface, we can use it to create a new HashSet
*     HashSet.make(1, 2, 3, 4),
*     HashSet.fromIterable,
*     HashSet.toValues // turns the HashSet back into an array
*   )
* ) // Output: [1, 2, 3, 4]
* ```
*
* @example
*
* ```ts
* // Creating a HashSet from other Effect's data structures like Chunk
* import { Chunk, HashSet, pipe } from "effect"
*
* console.log(
*   pipe(
*     Chunk.make(1, 2, 3, 4), // Iterable<number>
*     HashSet.fromIterable,
*     HashSet.toValues // turns the HashSet back into an array
*   )
* ) // Outputs: [1, 2, 3, 4]
* ```
*
* @see Other `HashSet` constructors are {@link module:HashSet.empty} {@link module:HashSet.make}
*/
var fromIterable$2 = fromIterable$3;
/**
* Construct a new `HashSet` from a variable number of values.
*
* Time complexity: **`O(n)`** where n is the number of elements
*
* @memberof HashSet
* @since 2.0.0
* @category constructors
* @example
*
* ```ts
* import { Equal, Hash, HashSet, pipe } from "effect"
* import assert from "node:assert/strict"
*
* class Character implements Equal.Equal {
*   readonly name: string
*   readonly trait: string
*
*   constructor(name: string, trait: string) {
*     this.name = name
*     this.trait = trait
*   }
*
*   // Define equality based on name, and trait
*   [Equal.symbol](that: Equal.Equal): boolean {
*     if (that instanceof Character) {
*       return (
*         Equal.equals(this.name, that.name) &&
*         Equal.equals(this.trait, that.trait)
*       )
*     }
*     return false
*   }
*
*   // Generate a hash code based on the sum of the character's name and trait
*   [Hash.symbol](): number {
*     return Hash.hash(this.name + this.trait)
*   }
*
*   static readonly of = (name: string, trait: string): Character => {
*     return new Character(name, trait)
*   }
* }
*
* assert.strictEqual(
*   Equal.equals(
*     HashSet.make(
*       Character.of("Alice", "Curious"),
*       Character.of("Alice", "Curious"),
*       Character.of("White Rabbit", "Always late"),
*       Character.of("Mad Hatter", "Tea enthusiast")
*     ),
*     // Is the same as adding each character to an empty set
*     pipe(
*       HashSet.empty(),
*       HashSet.add(Character.of("Alice", "Curious")),
*       HashSet.add(Character.of("Alice", "Curious")), // Alice tried to attend twice!
*       HashSet.add(Character.of("White Rabbit", "Always late")),
*       HashSet.add(Character.of("Mad Hatter", "Tea enthusiast"))
*     )
*   ),
*   true,
*   "`HashSet.make` and `HashSet.empty() + HashSet.add()` should be equal"
* )
*
* assert.strictEqual(
*   Equal.equals(
*     HashSet.make(
*       Character.of("Alice", "Curious"),
*       Character.of("Alice", "Curious"),
*       Character.of("White Rabbit", "Always late"),
*       Character.of("Mad Hatter", "Tea enthusiast")
*     ),
*     HashSet.fromIterable([
*       Character.of("Alice", "Curious"),
*       Character.of("Alice", "Curious"),
*       Character.of("White Rabbit", "Always late"),
*       Character.of("Mad Hatter", "Tea enthusiast")
*     ])
*   ),
*   true,
*   "`HashSet.make` and `HashSet.fromIterable` should be equal"
* )
* ```
*
* @see Other `HashSet` constructors are {@link module:HashSet.fromIterable} {@link module:HashSet.empty}
*/
var make$14 = make$15;
/**
* Checks if the specified value exists in the `HashSet`.
*
* Time complexity: **`O(1)`** average
*
* @memberof HashSet
* @since 2.0.0
* @category elements
* @example
*
* ```ts
* // Syntax
* import { HashSet, pipe } from "effect"
*
* // with `data-last`, a.k.a. `pipeable` API
* pipe(HashSet.make(0, 1, 2), HashSet.has(3)) // false
*
* // or piped with the pipe function
* HashSet.make(0, 1, 2).pipe(HashSet.has(3)) // false
*
* // or with `data-first` API
* HashSet.has(HashSet.make(0, 1, 2), 3) // false
* ```
*
* @returns A `boolean` signaling the presence of the value in the HashSet
* @see Other `HashSet` elements are {@link module:HashSet.some} {@link module:HashSet.every} {@link module:HashSet.isSubset}
*/
var has$1 = has$2;
/**
* Calculates the number of values in the `HashSet`.
*
* Time complexity: **`O(1)`**
*
* @memberof HashSet
* @since 2.0.0
* @category getters
* @example
*
* ```ts
* import { HashSet, pipe } from "effect"
* import assert from "node:assert/strict"
*
* assert.deepStrictEqual(pipe(HashSet.empty(), HashSet.size), 0)
*
* assert.deepStrictEqual(
*   pipe(HashSet.make(1, 2, 2, 3, 4, 3), HashSet.size),
*   4
* )
* ```
*
* @see Other `HashSet` getters are {@link module:HashSet.values} {@link module:HashSet.toValues}
*/
var size = size$1;
/**
* Adds a value to the `HashSet`.
*
* Time complexity: **`O(1)`** average
*
* @remarks
* Remember that a `HashSet` is a collection of unique values, so adding a value
* that already exists in the `HashSet` will not add a duplicate.
*
* Remember that HashSet is an immutable data structure, so the `add` function,
* like all other functions that modify the HashSet, will return a new HashSet
* with the added value.
* @memberof HashSet
* @since 2.0.0
* @example
*
* ```ts
* // Syntax
* import { HashSet, pipe } from "effect"
*
* // with data-last, a.k.a. pipeable API
* pipe(HashSet.empty(), HashSet.add(0), HashSet.add(0))
*
* // or piped with the pipe function
* HashSet.empty().pipe(HashSet.add(0))
*
* // or with data-first API
* HashSet.add(HashSet.empty(), 0)
* ```
*
* @see Other `HashSet` mutations are {@link module:HashSet.remove} {@link module:HashSet.toggle} {@link module:HashSet.beginMutation} {@link module:HashSet.endMutation} {@link module:HashSet.mutate}
*/
var add = add$1;
/**
* Removes a value from the `HashSet`.
*
* Time complexity: **`O(1)`** average
*
* @memberof HashSet
* @since 2.0.0
* @example
*
* ```ts
* // Syntax
* import { HashSet, pipe } from "effect"
*
* // with `data-last`, a.k.a. `pipeable` API
* pipe(HashSet.make(0, 1, 2), HashSet.remove(0))
*
* // or piped with the pipe function
* HashSet.make(0, 1, 2).pipe(HashSet.remove(0))
*
* // or with `data-first` API
* HashSet.remove(HashSet.make(0, 1, 2), 0)
* ```
*
* @see Other `HashSet` mutations are {@link module:HashSet.add} {@link module:HashSet.toggle} {@link module:HashSet.beginMutation} {@link module:HashSet.endMutation} {@link module:HashSet.mutate}
*/
var remove = remove$1;
/**
* Computes the set difference `(A - B)` between this `HashSet` and the
* specified `Iterable<A>`.
*
* Time complexity: **`O(n)`** where n is the number of elements in the set
*
* **NOTE**: the hash and equal of the values in both the set and the iterable
* must be the same; meaning we cannot compute a difference between a `HashSet
* of bananas` and a `HashSet of elephants` as they are not the same type and
* won't implement the Equal trait in the same way.
*
* @memberof HashSet
* @since 2.0.0
* @example
*
* ```ts
* // Syntax
* import { HashSet, pipe } from "effect"
*
* // with data-last, a.k.a. pipeable API
* pipe(HashSet.make(1, 2, 3), HashSet.difference(HashSet.make(3, 4, 5)))
*
* // or piped with the pipe function
* HashSet.make(1, 2, 3).pipe(HashSet.difference(HashSet.make(3, 4, 5)))
*
* // or with data-first API
* HashSet.difference(HashSet.make(1, 2, 3), HashSet.make(3, 4, 5))
* ```
*
* @see Other `HashSet` operations are {@link module:HashSet.intersection} {@link module:HashSet.union}
*/
var difference = difference$1;
/**
* Computes the set union `( self ∪ that )` between this `HashSet` and the
* specified `Iterable<A>`.
*
* Time complexity: **`O(n)`** where n is the number of elements in the set
*
* **NOTE**: the hash and equal of the values in both the set and the iterable
* must be the same.
*
* @memberof HashSet
* @since 2.0.0
* @example
*
* ```ts
* // Syntax
* import { HashSet, pipe } from "effect"
*
* // with data-last, a.k.a. pipeable API
* pipe(HashSet.make(1, 2, 3), HashSet.union(HashSet.make(3, 4, 5)))
*
* // or piped with the pipe function
* HashSet.make(1, 2, 3).pipe(HashSet.union(HashSet.make(3, 4, 5)))
*
* // or with data-first API
* HashSet.union(HashSet.make(1, 2, 3), HashSet.make(3, 4, 5))
* ```
*
* @see Other `HashSet` operations are {@link module:HashSet.difference} {@link module:HashSet.intersection}
*/
var union = union$1;
/**
* Reduces the specified state over the values of the `HashSet`.
*
* The time complexity is of **`O(n)`**.
*
* @memberof HashSet
* @since 2.0.0
* @category folding
* @example
*
* ```ts
* // Syntax
* import { HashSet, pipe } from "effect"
*
* const sum = (a: number, b: number): number => a + b
*
* // with `data-last`, a.k.a. `pipeable` API
* pipe(HashSet.make(0, 1, 2), HashSet.reduce(0, sum))
*
* // or with the pipe method
* HashSet.make(0, 1, 2).pipe(HashSet.reduce(0, sum))
*
* // or with `data-first` API
* HashSet.reduce(HashSet.make(0, 1, 2), 0, sum)
* ```
*/
var reduce$3 = reduce$4;
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/MutableRef.js
var TypeId$4 = /* @__PURE__ */ Symbol.for("effect/MutableRef");
var MutableRefProto = {
	[TypeId$4]: TypeId$4,
	toString() {
		return format$2(this.toJSON());
	},
	toJSON() {
		return {
			_id: "MutableRef",
			current: toJSON(this.current)
		};
	},
	[NodeInspectSymbol]() {
		return this.toJSON();
	},
	pipe() {
		return pipeArguments(this, arguments);
	}
};
/**
* @since 2.0.0
* @category constructors
*/
var make$13 = (value) => {
	const ref = Object.create(MutableRefProto);
	ref.current = value;
	return ref;
};
/**
* @since 2.0.0
* @category general
*/
var get$3 = (self) => self.current;
/**
* @since 2.0.0
* @category general
*/
var set$2 = /* @__PURE__ */ dual(2, (self, value) => {
	self.current = value;
	return self;
}), _Hash$symbol$7, _Equal$symbol$7, _Hash$symbol2$4, _Equal$symbol2$4;
/** @internal */
var FiberIdSymbolKey = "effect/FiberId";
/** @internal */
var FiberIdTypeId = /* @__PURE__ */ Symbol.for(FiberIdSymbolKey);
/** @internal */
var OP_NONE = "None";
/** @internal */
var OP_RUNTIME = "Runtime";
/** @internal */
var OP_COMPOSITE = "Composite";
var emptyHash = /* @__PURE__ */ string(`${FiberIdSymbolKey}-${OP_NONE}`);
_Hash$symbol$7 = symbol$1;
_Equal$symbol$7 = symbol;
/** @internal */
var None$2 = class {
	constructor() {
		_defineProperty(this, FiberIdTypeId, FiberIdTypeId);
		_defineProperty(this, "_tag", OP_NONE);
		_defineProperty(this, "id", -1);
		_defineProperty(this, "startTimeMillis", -1);
	}
	[_Hash$symbol$7]() {
		return emptyHash;
	}
	[_Equal$symbol$7](that) {
		return isFiberId(that) && that._tag === OP_NONE;
	}
	toString() {
		return format$2(this.toJSON());
	}
	toJSON() {
		return {
			_id: "FiberId",
			_tag: this._tag
		};
	}
	[NodeInspectSymbol]() {
		return this.toJSON();
	}
};
_Hash$symbol2$4 = symbol$1;
_Equal$symbol2$4 = symbol;
/** @internal */
var Runtime = class {
	constructor(id, startTimeMillis) {
		_defineProperty(this, "id", void 0);
		_defineProperty(this, "startTimeMillis", void 0);
		_defineProperty(this, FiberIdTypeId, FiberIdTypeId);
		_defineProperty(this, "_tag", OP_RUNTIME);
		this.id = id;
		this.startTimeMillis = startTimeMillis;
	}
	[_Hash$symbol2$4]() {
		return cached(this, string(`${FiberIdSymbolKey}-${this._tag}-${this.id}-${this.startTimeMillis}`));
	}
	[_Equal$symbol2$4](that) {
		return isFiberId(that) && that._tag === OP_RUNTIME && this.id === that.id && this.startTimeMillis === that.startTimeMillis;
	}
	toString() {
		return format$2(this.toJSON());
	}
	toJSON() {
		return {
			_id: "FiberId",
			_tag: this._tag,
			id: this.id,
			startTimeMillis: this.startTimeMillis
		};
	}
	[NodeInspectSymbol]() {
		return this.toJSON();
	}
};
/** @internal */
var none$3 = /* @__PURE__ */ new None$2();
/** @internal */
var isFiberId = (self) => hasProperty(self, FiberIdTypeId);
/** @internal */
var ids = (self) => {
	switch (self._tag) {
		case OP_NONE: return empty$13();
		case OP_RUNTIME: return make$14(self.id);
		case OP_COMPOSITE: return pipe(ids(self.left), union(ids(self.right)));
	}
};
var _fiberCounter = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Fiber/Id/_fiberCounter"), () => make$13(0));
/** @internal */
var threadName$1 = (self) => {
	return Array.from(ids(self)).map((n) => `#${n}`).join(",");
};
/** @internal */
var unsafeMake$4 = () => {
	const id = get$3(_fiberCounter);
	pipe(_fiberCounter, set$2(id + 1));
	return new Runtime(id, Date.now());
};
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/FiberId.js
/**
* @since 2.0.0
* @category constructors
*/
var none$2 = none$3;
/**
* Creates a string representing the name of the current thread of execution
* represented by the specified `FiberId`.
*
* @since 2.0.0
* @category destructors
*/
var threadName = threadName$1;
/**
* Unsafely creates a new `FiberId`.
*
* @since 2.0.0
* @category unsafe
*/
var unsafeMake$3 = unsafeMake$4;
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/HashMap.js
/**
* @since 2.0.0
*/
/**
* Creates a new `HashMap`.
*
* @since 2.0.0
* @category constructors
*/
var empty$12 = empty$15;
/**
* Creates a new `HashMap` from an iterable collection of key/value pairs.
*
* @since 2.0.0
* @category constructors
*/
var fromIterable$1 = fromIterable$4;
/**
* Checks if the `HashMap` contains any entries.
*
* @since 2.0.0
* @category elements
*/
var isEmpty$1 = isEmpty$2;
/**
* Safely lookup the value for the specified key in the `HashMap` using the
* internal hashing function.
*
* @since 2.0.0
* @category elements
*/
var get$2 = get$4;
/**
* Sets the specified key to the specified value using the internal hashing
* function.
*
* @since 2.0.0
*/
var set$1 = set$3;
/**
* Returns an `IterableIterator` of the keys within the `HashMap`.
*
* @since 2.0.0
* @category getters
*/
var keys = keys$1;
/**
* Set or remove the specified key in the `HashMap` using the specified
* update function. The value of the specified key will be computed using the
* provided hash.
*
* The update function will be invoked with the current value of the key if it
* exists, or `None` if no such value exists.
*
* @since 2.0.0
*/
var modifyAt = modifyAt$1;
/**
* Maps over the entries of the `HashMap` using the specified function.
*
* @since 2.0.0
* @category mapping
*/
var map$2 = map$3;
/**
* Reduces the specified state over the entries of the `HashMap`.
*
* @since 2.0.0
* @category folding
*/
var reduce$2 = reduce$5;
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/List.js
/**
* A data type for immutable linked lists representing ordered collections of elements of type `A`.
*
* This data type is optimal for last-in-first-out (LIFO), stack-like access patterns. If you need another access pattern, for example, random access or FIFO, consider using a collection more suited to this than `List`.
*
* **Performance**
*
* - Time: `List` has `O(1)` prepend and head/tail access. Most other operations are `O(n)` on the number of elements in the list. This includes the index-based lookup of elements, `length`, `append` and `reverse`.
* - Space: `List` implements structural sharing of the tail list. This means that many operations are either zero- or constant-memory cost.
*
* @since 2.0.0
*/
/**
* This file is ported from
*
* Scala (https://www.scala-lang.org)
*
* Copyright EPFL and Lightbend, Inc.
*
* Licensed under Apache License 2.0
* (http://www.apache.org/licenses/LICENSE-2.0).
*/
/**
* @since 2.0.0
* @category symbol
*/
var TypeId$3 = /* @__PURE__ */ Symbol.for("effect/List");
/**
* Converts the specified `List` to an `Array`.
*
* @category conversions
* @since 2.0.0
*/
var toArray = (self) => fromIterable$6(self);
/**
* @category equivalence
* @since 2.0.0
*/
var getEquivalence = (isEquivalent) => mapInput$1(getEquivalence$2(isEquivalent), toArray);
var _equivalence = /* @__PURE__ */ getEquivalence(equals$1);
var ConsProto = {
	[TypeId$3]: TypeId$3,
	_tag: "Cons",
	toString() {
		return format$2(this.toJSON());
	},
	toJSON() {
		return {
			_id: "List",
			_tag: "Cons",
			values: toArray(this).map(toJSON)
		};
	},
	[NodeInspectSymbol]() {
		return this.toJSON();
	},
	[symbol](that) {
		return isList(that) && this._tag === that._tag && _equivalence(this, that);
	},
	[symbol$1]() {
		return cached(this, array(toArray(this)));
	},
	[Symbol.iterator]() {
		let done = false;
		let self = this;
		return {
			next() {
				if (done) return this.return();
				if (self._tag === "Nil") {
					done = true;
					return this.return();
				}
				const value = self.head;
				self = self.tail;
				return {
					done,
					value
				};
			},
			return(value) {
				if (!done) done = true;
				return {
					done: true,
					value
				};
			}
		};
	},
	pipe() {
		return pipeArguments(this, arguments);
	}
};
var makeCons = (head, tail) => {
	const cons = Object.create(ConsProto);
	cons.head = head;
	cons.tail = tail;
	return cons;
};
var NilHash = /* @__PURE__ */ string("Nil");
var _Nil = /* @__PURE__ */ Object.create({
	[TypeId$3]: TypeId$3,
	_tag: "Nil",
	toString() {
		return format$2(this.toJSON());
	},
	toJSON() {
		return {
			_id: "List",
			_tag: "Nil"
		};
	},
	[NodeInspectSymbol]() {
		return this.toJSON();
	},
	[symbol$1]() {
		return NilHash;
	},
	[symbol](that) {
		return isList(that) && this._tag === that._tag;
	},
	[Symbol.iterator]() {
		return { next() {
			return {
				done: true,
				value: void 0
			};
		} };
	},
	pipe() {
		return pipeArguments(this, arguments);
	}
});
/**
* Returns `true` if the specified value is a `List`, `false` otherwise.
*
* @since 2.0.0
* @category refinements
*/
var isList = (u) => hasProperty(u, TypeId$3);
/**
* Returns `true` if the specified value is a `List.Nil<A>`, `false` otherwise.
*
* @since 2.0.0
* @category refinements
*/
var isNil = (self) => self._tag === "Nil";
/**
* Returns `true` if the specified value is a `List.Cons<A>`, `false` otherwise.
*
* @since 2.0.0
* @category refinements
*/
var isCons = (self) => self._tag === "Cons";
/**
* Constructs a new empty `List<A>`.
*
* @since 2.0.0
* @category constructors
*/
var nil = () => _Nil;
/**
* Constructs a new `List.Cons<A>` from the specified `head` and `tail` values.
*
* @since 2.0.0
* @category constructors
*/
var cons = (head, tail) => makeCons(head, tail);
/**
* Constructs a new empty `List<A>`.
*
* Alias of {@link nil}.
*
* @since 2.0.0
* @category constructors
*/
var empty$11 = nil;
/**
* Constructs a new `List<A>` from the specified value.
*
* @since 2.0.0
* @category constructors
*/
var of = (value) => makeCons(value, _Nil);
/**
* Concatenates two lists, combining their elements.
* If either list is non-empty, the result is also a non-empty list.
*
* @example
* ```ts
* import * as assert from "node:assert"
* import { List } from "effect"
*
* assert.deepStrictEqual(
*   List.make(1, 2).pipe(List.appendAll(List.make("a", "b")), List.toArray),
*   [1, 2, "a", "b"]
* )
* ```
*
* @category concatenating
* @since 2.0.0
*/
var appendAll = /* @__PURE__ */ dual(2, (self, that) => prependAll(that, self));
/**
* Prepends the specified element to the beginning of the list.
*
* @category concatenating
* @since 2.0.0
*/
var prepend = /* @__PURE__ */ dual(2, (self, element) => cons(element, self));
/**
* Prepends the specified prefix list to the beginning of the specified list.
* If either list is non-empty, the result is also a non-empty list.
*
* @example
* ```ts
* import * as assert from "node:assert"
* import { List } from "effect"
*
* assert.deepStrictEqual(
*   List.make(1, 2).pipe(List.prependAll(List.make("a", "b")), List.toArray),
*   ["a", "b", 1, 2]
* )
* ```
*
* @category concatenating
* @since 2.0.0
*/
var prependAll = /* @__PURE__ */ dual(2, (self, prefix) => {
	if (isNil(self)) return prefix;
	else if (isNil(prefix)) return self;
	else {
		const result = makeCons(prefix.head, self);
		let curr = result;
		let that = prefix.tail;
		while (!isNil(that)) {
			const temp = makeCons(that.head, self);
			curr.tail = temp;
			curr = temp;
			that = that.tail;
		}
		return result;
	}
});
/**
* Folds over the elements of the list using the specified function, using the
* specified initial value.
*
* @since 2.0.0
* @category folding
*/
var reduce$1 = /* @__PURE__ */ dual(3, (self, zero, f) => {
	let acc = zero;
	let these = self;
	while (!isNil(these)) {
		acc = f(acc, these.head);
		these = these.tail;
	}
	return acc;
});
/**
* Returns a new list with the elements of the specified list in reverse order.
*
* @since 2.0.0
* @category elements
*/
var reverse = (self) => {
	let result = empty$11();
	let these = self;
	while (!isNil(these)) {
		result = prepend(result, these.head);
		these = these.tail;
	}
	return result;
};
Array.prototype;
/** @internal */
var Structural = /* @__PURE__ */ function() {
	function Structural(args) {
		if (args) Object.assign(this, args);
	}
	Structural.prototype = StructuralPrototype;
	return Structural;
}();
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/differ/contextPatch.js
/** @internal */
var ContextPatchTypeId = /* @__PURE__ */ Symbol.for("effect/DifferContextPatch");
function variance$3(a) {
	return a;
}
/** @internal */
var PatchProto$2 = {
	...Structural.prototype,
	[ContextPatchTypeId]: {
		_Value: variance$3,
		_Patch: variance$3
	}
};
var _empty$2 = /* @__PURE__ */ Object.create(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto$2), { _tag: "Empty" }));
/**
* @internal
*/
var empty$10 = () => _empty$2;
var AndThenProto$2 = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto$2), { _tag: "AndThen" });
var makeAndThen$2 = (first, second) => {
	const o = Object.create(AndThenProto$2);
	o.first = first;
	o.second = second;
	return o;
};
var AddServiceProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto$2), { _tag: "AddService" });
var makeAddService = (key, service) => {
	const o = Object.create(AddServiceProto);
	o.key = key;
	o.service = service;
	return o;
};
var RemoveServiceProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto$2), { _tag: "RemoveService" });
var makeRemoveService = (key) => {
	const o = Object.create(RemoveServiceProto);
	o.key = key;
	return o;
};
var UpdateServiceProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto$2), { _tag: "UpdateService" });
var makeUpdateService = (key, update) => {
	const o = Object.create(UpdateServiceProto);
	o.key = key;
	o.update = update;
	return o;
};
/** @internal */
var diff$6 = (oldValue, newValue) => {
	const missingServices = new Map(oldValue.unsafeMap);
	let patch = empty$10();
	for (const [tag, newService] of newValue.unsafeMap.entries()) if (missingServices.has(tag)) {
		const old = missingServices.get(tag);
		missingServices.delete(tag);
		if (!equals$1(old, newService)) patch = combine$4(makeUpdateService(tag, () => newService))(patch);
	} else {
		missingServices.delete(tag);
		patch = combine$4(makeAddService(tag, newService))(patch);
	}
	for (const [tag] of missingServices.entries()) patch = combine$4(makeRemoveService(tag))(patch);
	return patch;
};
/** @internal */
var combine$4 = /* @__PURE__ */ dual(2, (self, that) => makeAndThen$2(self, that));
/** @internal */
var patch$7 = /* @__PURE__ */ dual(2, (self, context) => {
	if (self._tag === "Empty") return context;
	let wasServiceUpdated = false;
	let patches = of$1(self);
	const updatedContext = new Map(context.unsafeMap);
	while (isNonEmpty(patches)) {
		const head = headNonEmpty(patches);
		const tail = tailNonEmpty(patches);
		switch (head._tag) {
			case "Empty":
				patches = tail;
				break;
			case "AddService":
				updatedContext.set(head.key, head.service);
				patches = tail;
				break;
			case "AndThen":
				patches = prepend$1(prepend$1(tail, head.second), head.first);
				break;
			case "RemoveService":
				updatedContext.delete(head.key);
				patches = tail;
				break;
			case "UpdateService":
				updatedContext.set(head.key, head.update(updatedContext.get(head.key)));
				wasServiceUpdated = true;
				patches = tail;
				break;
		}
	}
	if (!wasServiceUpdated) return makeContext(updatedContext);
	const map = /* @__PURE__ */ new Map();
	for (const [tag] of context.unsafeMap) if (updatedContext.has(tag)) {
		map.set(tag, updatedContext.get(tag));
		updatedContext.delete(tag);
	}
	for (const [tag, s] of updatedContext) map.set(tag, s);
	return makeContext(map);
});
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/differ/hashSetPatch.js
/** @internal */
var HashSetPatchTypeId = /* @__PURE__ */ Symbol.for("effect/DifferHashSetPatch");
function variance$2(a) {
	return a;
}
/** @internal */
var PatchProto$1 = {
	...Structural.prototype,
	[HashSetPatchTypeId]: {
		_Value: variance$2,
		_Key: variance$2,
		_Patch: variance$2
	}
};
var _empty$1 = /* @__PURE__ */ Object.create(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto$1), { _tag: "Empty" }));
/** @internal */
var empty$9 = () => _empty$1;
var AndThenProto$1 = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto$1), { _tag: "AndThen" });
/** @internal */
var makeAndThen$1 = (first, second) => {
	const o = Object.create(AndThenProto$1);
	o.first = first;
	o.second = second;
	return o;
};
var AddProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto$1), { _tag: "Add" });
/** @internal */
var makeAdd = (value) => {
	const o = Object.create(AddProto);
	o.value = value;
	return o;
};
var RemoveProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto$1), { _tag: "Remove" });
/** @internal */
var makeRemove = (value) => {
	const o = Object.create(RemoveProto);
	o.value = value;
	return o;
};
/** @internal */
var diff$5 = (oldValue, newValue) => {
	const [removed, patch] = reduce$3([oldValue, empty$9()], ([set, patch], value) => {
		if (has$1(value)(set)) return [remove(value)(set), patch];
		return [set, combine$3(makeAdd(value))(patch)];
	})(newValue);
	return reduce$3(patch, (patch, value) => combine$3(makeRemove(value))(patch))(removed);
};
/** @internal */
var combine$3 = /* @__PURE__ */ dual(2, (self, that) => makeAndThen$1(self, that));
/** @internal */
var patch$6 = /* @__PURE__ */ dual(2, (self, oldValue) => {
	if (self._tag === "Empty") return oldValue;
	let set = oldValue;
	let patches = of$1(self);
	while (isNonEmpty(patches)) {
		const head = headNonEmpty(patches);
		const tail = tailNonEmpty(patches);
		switch (head._tag) {
			case "Empty":
				patches = tail;
				break;
			case "AndThen":
				patches = prepend$1(head.first)(prepend$1(head.second)(tail));
				break;
			case "Add":
				set = add(head.value)(set);
				patches = tail;
				break;
			case "Remove":
				set = remove(head.value)(set);
				patches = tail;
		}
	}
	return set;
});
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/differ/readonlyArrayPatch.js
/** @internal */
var ReadonlyArrayPatchTypeId = /* @__PURE__ */ Symbol.for("effect/DifferReadonlyArrayPatch");
function variance$1(a) {
	return a;
}
var PatchProto = {
	...Structural.prototype,
	[ReadonlyArrayPatchTypeId]: {
		_Value: variance$1,
		_Patch: variance$1
	}
};
var _empty = /* @__PURE__ */ Object.create(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto), { _tag: "Empty" }));
/**
* @internal
*/
var empty$8 = () => _empty;
var AndThenProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto), { _tag: "AndThen" });
var makeAndThen = (first, second) => {
	const o = Object.create(AndThenProto);
	o.first = first;
	o.second = second;
	return o;
};
var AppendProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto), { _tag: "Append" });
var makeAppend = (values) => {
	const o = Object.create(AppendProto);
	o.values = values;
	return o;
};
var SliceProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto), { _tag: "Slice" });
var makeSlice = (from, until) => {
	const o = Object.create(SliceProto);
	o.from = from;
	o.until = until;
	return o;
};
var UpdateProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto), { _tag: "Update" });
var makeUpdate = (index, patch) => {
	const o = Object.create(UpdateProto);
	o.index = index;
	o.patch = patch;
	return o;
};
/** @internal */
var diff$4 = (options) => {
	let i = 0;
	let patch = empty$8();
	while (i < options.oldValue.length && i < options.newValue.length) {
		const oldElement = options.oldValue[i];
		const newElement = options.newValue[i];
		const valuePatch = options.differ.diff(oldElement, newElement);
		if (!equals$1(valuePatch, options.differ.empty)) patch = combine$2(patch, makeUpdate(i, valuePatch));
		i = i + 1;
	}
	if (i < options.oldValue.length) patch = combine$2(patch, makeSlice(0, i));
	if (i < options.newValue.length) patch = combine$2(patch, makeAppend(drop$1(i)(options.newValue)));
	return patch;
};
/** @internal */
var combine$2 = /* @__PURE__ */ dual(2, (self, that) => makeAndThen(self, that));
/** @internal */
var patch$5 = /* @__PURE__ */ dual(3, (self, oldValue, differ) => {
	if (self._tag === "Empty") return oldValue;
	let readonlyArray = oldValue.slice();
	let patches = of$2(self);
	while (isNonEmptyArray(patches)) {
		const head = headNonEmpty$1(patches);
		const tail = tailNonEmpty$1(patches);
		switch (head._tag) {
			case "Empty":
				patches = tail;
				break;
			case "AndThen":
				tail.unshift(head.first, head.second);
				patches = tail;
				break;
			case "Append":
				for (const value of head.values) readonlyArray.push(value);
				patches = tail;
				break;
			case "Slice":
				readonlyArray = readonlyArray.slice(head.from, head.until);
				patches = tail;
				break;
			case "Update":
				readonlyArray[head.index] = differ.patch(head.patch, readonlyArray[head.index]);
				patches = tail;
				break;
		}
	}
	return readonlyArray;
});
/** @internal */
var DifferProto = {
	[/* @__PURE__ */ Symbol.for("effect/Differ")]: {
		_P: identity,
		_V: identity
	},
	pipe() {
		return pipeArguments(this, arguments);
	}
};
/** @internal */
var make$12 = (params) => {
	const differ = Object.create(DifferProto);
	differ.empty = params.empty;
	differ.diff = params.diff;
	differ.combine = params.combine;
	differ.patch = params.patch;
	return differ;
};
/** @internal */
var environment = () => make$12({
	empty: empty$10(),
	combine: (first, second) => combine$4(second)(first),
	diff: (oldValue, newValue) => diff$6(oldValue, newValue),
	patch: (patch, oldValue) => patch$7(oldValue)(patch)
});
/** @internal */
var hashSet = () => make$12({
	empty: empty$9(),
	combine: (first, second) => combine$3(second)(first),
	diff: (oldValue, newValue) => diff$5(oldValue, newValue),
	patch: (patch, oldValue) => patch$6(oldValue)(patch)
});
/** @internal */
var readonlyArray = (differ) => make$12({
	empty: empty$8(),
	combine: (first, second) => combine$2(first, second),
	diff: (oldValue, newValue) => diff$4({
		oldValue,
		newValue,
		differ
	}),
	patch: (patch, oldValue) => patch$5(patch, oldValue, differ)
});
/** @internal */
var update$1 = () => updateWith((_, a) => a);
/** @internal */
var updateWith = (f) => make$12({
	empty: identity,
	combine: (first, second) => {
		if (first === identity) return second;
		if (second === identity) return first;
		return (a) => second(first(a));
	},
	diff: (oldValue, newValue) => {
		if (equals$1(oldValue, newValue)) return identity;
		return constant(newValue);
	},
	patch: (patch, oldValue) => f(oldValue, patch(oldValue))
});
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/runtimeFlagsPatch.js
/** @internal */
var BIT_MASK = 255;
/** @internal */
var BIT_SHIFT = 8;
/** @internal */
var active = (patch) => patch & BIT_MASK;
/** @internal */
var enabled = (patch) => patch >> BIT_SHIFT & BIT_MASK;
/** @internal */
var make$11 = (active, enabled) => (active & BIT_MASK) + ((enabled & active & BIT_MASK) << BIT_SHIFT);
/** @internal */
var empty$7 = /* @__PURE__ */ make$11(0, 0);
/** @internal */
var enable$2 = (flag) => make$11(flag, flag);
/** @internal */
var disable$1 = (flag) => make$11(flag, 0);
/** @internal */
var exclude$1 = /* @__PURE__ */ dual(2, (self, flag) => make$11(active(self) & ~flag, enabled(self)));
/** @internal */
var andThen = /* @__PURE__ */ dual(2, (self, that) => self | that);
/** @internal */
var invert = (n) => ~n >>> 0 & BIT_MASK;
/** @internal */
var cooperativeYielding = (self) => isEnabled(self, 32);
/** @internal */
var enable$1 = /* @__PURE__ */ dual(2, (self, flag) => self | flag);
/** @internal */
var interruptible$2 = (self) => interruption(self) && !windDown(self);
/** @internal */
var interruption = (self) => isEnabled(self, 1);
/** @internal */
var isEnabled = /* @__PURE__ */ dual(2, (self, flag) => (self & flag) !== 0);
/** @internal */
var make$10 = (...flags) => flags.reduce((a, b) => a | b, 0);
/** @internal */
var none$1 = /* @__PURE__ */ make$10(0);
/** @internal */
var runtimeMetrics = (self) => isEnabled(self, 4);
var windDown = (self) => isEnabled(self, 16);
/** @internal */
var diff$3 = /* @__PURE__ */ dual(2, (self, that) => make$11(self ^ that, that));
/** @internal */
var patch$4 = /* @__PURE__ */ dual(2, (self, patch) => self & (invert(active(patch)) | enabled(patch)) | active(patch) & enabled(patch));
/** @internal */
var differ$1 = /* @__PURE__ */ make$12({
	empty: empty$7,
	diff: (oldValue, newValue) => diff$3(oldValue, newValue),
	combine: (first, second) => andThen(second)(first),
	patch: (_patch, oldValue) => patch$4(oldValue, _patch)
});
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/RuntimeFlagsPatch.js
/**
* Creates a `RuntimeFlagsPatch` describing enabling the provided `RuntimeFlag`.
*
* @since 2.0.0
* @category constructors
*/
var enable = enable$2;
/**
* Creates a `RuntimeFlagsPatch` describing disabling the provided `RuntimeFlag`.
*
* @since 2.0.0
* @category constructors
*/
var disable = disable$1;
/**
* Creates a `RuntimeFlagsPatch` which describes exclusion of the specified
* `RuntimeFlag` from the set of `RuntimeFlags`.
*
* @category utils
* @since 2.0.0
*/
var exclude = exclude$1;
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/blockedRequests.js
/**
* Combines this collection of blocked requests with the specified collection
* of blocked requests, in parallel.
*
* @internal
*/
var par = (self, that) => ({
	_tag: "Par",
	left: self,
	right: that
});
/**
* Combines this collection of blocked requests with the specified collection
* of blocked requests, in sequence.
*
* @internal
*/
var seq = (self, that) => ({
	_tag: "Seq",
	left: self,
	right: that
});
/**
* Flattens a collection of blocked requests into a collection of pipelined
* and batched requests that can be submitted for execution.
*
* @internal
*/
var flatten$1 = (self) => {
	let current = of(self);
	let updated = empty$11();
	while (1) {
		const [parallel, sequential] = reduce$1(current, [parallelCollectionEmpty(), empty$11()], ([parallel, sequential], blockedRequest) => {
			const [par, seq] = step$1(blockedRequest);
			return [parallelCollectionCombine(parallel, par), appendAll(sequential, seq)];
		});
		updated = merge(updated, parallel);
		if (isNil(sequential)) return reverse(updated);
		current = sequential;
	}
	throw new Error("BUG: BlockedRequests.flatten - please report an issue at https://github.com/Effect-TS/effect/issues");
};
/**
* Takes one step in evaluating a collection of blocked requests, returning a
* collection of blocked requests that can be performed in parallel and a list
* of blocked requests that must be performed sequentially after those
* requests.
*/
var step$1 = (requests) => {
	let current = requests;
	let parallel = parallelCollectionEmpty();
	let stack = empty$11();
	let sequential = empty$11();
	while (1) switch (current._tag) {
		case "Empty":
			if (isNil(stack)) return [parallel, sequential];
			current = stack.head;
			stack = stack.tail;
			break;
		case "Par":
			stack = cons(current.right, stack);
			current = current.left;
			break;
		case "Seq": {
			const left = current.left;
			const right = current.right;
			switch (left._tag) {
				case "Empty":
					current = right;
					break;
				case "Par": {
					const l = left.left;
					const r = left.right;
					current = par(seq(l, right), seq(r, right));
					break;
				}
				case "Seq": {
					const l = left.left;
					const r = left.right;
					current = seq(l, seq(r, right));
					break;
				}
				case "Single":
					current = left;
					sequential = cons(right, sequential);
					break;
			}
			break;
		}
		case "Single":
			parallel = parallelCollectionAdd(parallel, current);
			if (isNil(stack)) return [parallel, sequential];
			current = stack.head;
			stack = stack.tail;
			break;
	}
	throw new Error("BUG: BlockedRequests.step - please report an issue at https://github.com/Effect-TS/effect/issues");
};
/**
* Merges a collection of requests that must be executed sequentially with a
* collection of requests that can be executed in parallel. If the collections
* are both from the same single data source then the requests can be
* pipelined while preserving ordering guarantees.
*/
var merge = (sequential, parallel) => {
	if (isNil(sequential)) return of(parallelCollectionToSequentialCollection(parallel));
	if (parallelCollectionIsEmpty(parallel)) return sequential;
	const seqHeadKeys = sequentialCollectionKeys(sequential.head);
	const parKeys = parallelCollectionKeys(parallel);
	if (seqHeadKeys.length === 1 && parKeys.length === 1 && equals$1(seqHeadKeys[0], parKeys[0])) return cons(sequentialCollectionCombine(sequential.head, parallelCollectionToSequentialCollection(parallel)), sequential.tail);
	return cons(parallelCollectionToSequentialCollection(parallel), sequential);
};
/** @internal */
var RequestBlockParallelTypeId = /* @__PURE__ */ Symbol.for("effect/RequestBlock/RequestBlockParallel");
var parallelVariance = { 
/* c8 ignore next */
_R: (_) => _ };
var ParallelImpl = class {
	constructor(map) {
		_defineProperty(this, "map", void 0);
		_defineProperty(this, RequestBlockParallelTypeId, parallelVariance);
		this.map = map;
	}
};
/** @internal */
var parallelCollectionEmpty = () => new ParallelImpl(empty$12());
/** @internal */
var parallelCollectionAdd = (self, blockedRequest) => new ParallelImpl(modifyAt(self.map, blockedRequest.dataSource, (_) => orElseSome(map$5(_, append(blockedRequest.blockedRequest)), () => of$1(blockedRequest.blockedRequest))));
/** @internal */
var parallelCollectionCombine = (self, that) => new ParallelImpl(reduce$2(self.map, that.map, (map, value, key) => set$1(map, key, match$2(get$2(map, key), {
	onNone: () => value,
	onSome: (other) => appendAll$1(value, other)
}))));
/** @internal */
var parallelCollectionIsEmpty = (self) => isEmpty$1(self.map);
/** @internal */
var parallelCollectionKeys = (self) => Array.from(keys(self.map));
/** @internal */
var parallelCollectionToSequentialCollection = (self) => sequentialCollectionMake(map$2(self.map, (x) => of$1(x)));
/** @internal */
var SequentialCollectionTypeId = /* @__PURE__ */ Symbol.for("effect/RequestBlock/RequestBlockSequential");
var sequentialVariance = { 
/* c8 ignore next */
_R: (_) => _ };
var SequentialImpl = class {
	constructor(map) {
		_defineProperty(this, "map", void 0);
		_defineProperty(this, SequentialCollectionTypeId, sequentialVariance);
		this.map = map;
	}
};
/** @internal */
var sequentialCollectionMake = (map) => new SequentialImpl(map);
/** @internal */
var sequentialCollectionCombine = (self, that) => new SequentialImpl(reduce$2(that.map, self.map, (map, value, key) => set$1(map, key, match$2(get$2(map, key), {
	onNone: () => empty$16(),
	onSome: (a) => appendAll$1(a, value)
}))));
/** @internal */
var sequentialCollectionKeys = (self) => Array.from(keys(self.map));
/** @internal */
var sequentialCollectionToChunk = (self) => Array.from(self.map);
/** @internal */
var OP_EMPTY$2 = "Empty";
/** @internal */
var OP_FAIL$1 = "Fail";
/** @internal */
var OP_INTERRUPT = "Interrupt";
/** @internal */
var OP_PARALLEL$1 = "Parallel";
/** @internal */
var OP_SEQUENTIAL$1 = "Sequential";
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/cause.js
/** @internal */
var CauseSymbolKey = "effect/Cause";
/** @internal */
var CauseTypeId = /* @__PURE__ */ Symbol.for(CauseSymbolKey);
var variance = { 
/* c8 ignore next */
_E: (_) => _ };
/** @internal */
var proto$1 = {
	[CauseTypeId]: variance,
	[symbol$1]() {
		return pipe(hash(CauseSymbolKey), combine$5(hash(flattenCause(this))), cached(this));
	},
	[symbol](that) {
		return isCause(that) && causeEquals(this, that);
	},
	pipe() {
		return pipeArguments(this, arguments);
	},
	toJSON() {
		switch (this._tag) {
			case "Empty": return {
				_id: "Cause",
				_tag: this._tag
			};
			case "Die": return {
				_id: "Cause",
				_tag: this._tag,
				defect: toJSON(this.defect)
			};
			case "Interrupt": return {
				_id: "Cause",
				_tag: this._tag,
				fiberId: this.fiberId.toJSON()
			};
			case "Fail": return {
				_id: "Cause",
				_tag: this._tag,
				failure: toJSON(this.error)
			};
			case "Sequential":
			case "Parallel": return {
				_id: "Cause",
				_tag: this._tag,
				left: toJSON(this.left),
				right: toJSON(this.right)
			};
		}
	},
	toString() {
		return pretty(this);
	},
	[NodeInspectSymbol]() {
		return this.toJSON();
	}
};
/** @internal */
var empty$6 = /* @__PURE__ */ (() => {
	const o = /* @__PURE__ */ Object.create(proto$1);
	o._tag = OP_EMPTY$2;
	return o;
})();
/** @internal */
var fail$2 = (error) => {
	const o = Object.create(proto$1);
	o._tag = OP_FAIL$1;
	o.error = error;
	return o;
};
/** @internal */
var die$1 = (defect) => {
	const o = Object.create(proto$1);
	o._tag = "Die";
	o.defect = defect;
	return o;
};
/** @internal */
var interrupt = (fiberId) => {
	const o = Object.create(proto$1);
	o._tag = OP_INTERRUPT;
	o.fiberId = fiberId;
	return o;
};
/** @internal */
var parallel = (left, right) => {
	const o = Object.create(proto$1);
	o._tag = OP_PARALLEL$1;
	o.left = left;
	o.right = right;
	return o;
};
/** @internal */
var sequential$1 = (left, right) => {
	const o = Object.create(proto$1);
	o._tag = OP_SEQUENTIAL$1;
	o.left = left;
	o.right = right;
	return o;
};
/** @internal */
var isCause = (u) => hasProperty(u, CauseTypeId);
/** @internal */
var isEmptyType = (self) => self._tag === OP_EMPTY$2;
/** @internal */
var isEmpty = (self) => {
	if (self._tag === "Empty") return true;
	return reduce(self, true, (acc, cause) => {
		switch (cause._tag) {
			case OP_EMPTY$2: return some(acc);
			case "Die":
			case OP_FAIL$1:
			case OP_INTERRUPT: return some(false);
			default: return none$4();
		}
	});
};
/** @internal */
var isInterrupted = (self) => isSome(interruptOption(self));
/** @internal */
var isInterruptedOnly = (self) => reduceWithContext(void 0, IsInterruptedOnlyCauseReducer)(self);
/** @internal */
var failures = (self) => reverse$1(reduce(self, empty$16(), (list, cause) => cause._tag === "Fail" ? some(pipe(list, prepend$1(cause.error))) : none$4()));
/** @internal */
var defects = (self) => reverse$1(reduce(self, empty$16(), (list, cause) => cause._tag === "Die" ? some(pipe(list, prepend$1(cause.defect))) : none$4()));
/** @internal */
var interruptors = (self) => reduce(self, empty$13(), (set, cause) => cause._tag === "Interrupt" ? some(pipe(set, add(cause.fiberId))) : none$4());
/** @internal */
var failureOption = (self) => find(self, (cause) => cause._tag === "Fail" ? some(cause.error) : none$4());
/** @internal */
var failureOrCause = (self) => {
	const option = failureOption(self);
	switch (option._tag) {
		case "None": return right(self);
		case "Some": return left(option.value);
	}
};
/** @internal */
var interruptOption = (self) => find(self, (cause) => cause._tag === "Interrupt" ? some(cause.fiberId) : none$4());
/** @internal */
var stripFailures = (self) => match(self, {
	onEmpty: empty$6,
	onFail: () => empty$6,
	onDie: die$1,
	onInterrupt: interrupt,
	onSequential: sequential$1,
	onParallel: parallel
});
/** @internal */
var electFailures = (self) => match(self, {
	onEmpty: empty$6,
	onFail: die$1,
	onDie: die$1,
	onInterrupt: interrupt,
	onSequential: sequential$1,
	onParallel: parallel
});
/** @internal */
var causeEquals = (left, right) => {
	let leftStack = of$1(left);
	let rightStack = of$1(right);
	while (isNonEmpty(leftStack) && isNonEmpty(rightStack)) {
		const [leftParallel, leftSequential] = pipe(headNonEmpty(leftStack), reduce([empty$13(), empty$16()], ([parallel, sequential], cause) => {
			const [par, seq] = evaluateCause(cause);
			return some([pipe(parallel, union(par)), pipe(sequential, appendAll$1(seq))]);
		}));
		const [rightParallel, rightSequential] = pipe(headNonEmpty(rightStack), reduce([empty$13(), empty$16()], ([parallel, sequential], cause) => {
			const [par, seq] = evaluateCause(cause);
			return some([pipe(parallel, union(par)), pipe(sequential, appendAll$1(seq))]);
		}));
		if (!equals$1(leftParallel, rightParallel)) return false;
		leftStack = leftSequential;
		rightStack = rightSequential;
	}
	return true;
};
/**
* Flattens a cause to a sequence of sets of causes, where each set represents
* causes that fail in parallel and sequential sets represent causes that fail
* after each other.
*
* @internal
*/
var flattenCause = (cause) => {
	return flattenCauseLoop(of$1(cause), empty$16());
};
/** @internal */
var flattenCauseLoop = (causes, flattened) => {
	while (1) {
		const [parallel, sequential] = pipe(causes, reduce$6([empty$13(), empty$16()], ([parallel, sequential], cause) => {
			const [par, seq] = evaluateCause(cause);
			return [pipe(parallel, union(par)), pipe(sequential, appendAll$1(seq))];
		}));
		const updated = size(parallel) > 0 ? pipe(flattened, prepend$1(parallel)) : flattened;
		if (isEmpty$3(sequential)) return reverse$1(updated);
		causes = sequential;
		flattened = updated;
	}
	throw new Error(getBugErrorMessage("Cause.flattenCauseLoop"));
};
/** @internal */
var find = /* @__PURE__ */ dual(2, (self, pf) => {
	const stack = [self];
	while (stack.length > 0) {
		const item = stack.pop();
		const option = pf(item);
		switch (option._tag) {
			case "None":
				switch (item._tag) {
					case OP_SEQUENTIAL$1:
					case OP_PARALLEL$1:
						stack.push(item.right);
						stack.push(item.left);
						break;
				}
				break;
			case "Some": return option;
		}
	}
	return none$4();
});
/**
* Takes one step in evaluating a cause, returning a set of causes that fail
* in parallel and a list of causes that fail sequentially after those causes.
*
* @internal
*/
var evaluateCause = (self) => {
	let cause = self;
	const stack = [];
	let _parallel = empty$13();
	let _sequential = empty$16();
	while (cause !== void 0) switch (cause._tag) {
		case OP_EMPTY$2:
			if (stack.length === 0) return [_parallel, _sequential];
			cause = stack.pop();
			break;
		case OP_FAIL$1:
			_parallel = add(_parallel, make$18(cause._tag, cause.error));
			if (stack.length === 0) return [_parallel, _sequential];
			cause = stack.pop();
			break;
		case "Die":
			_parallel = add(_parallel, make$18(cause._tag, cause.defect));
			if (stack.length === 0) return [_parallel, _sequential];
			cause = stack.pop();
			break;
		case OP_INTERRUPT:
			_parallel = add(_parallel, make$18(cause._tag, cause.fiberId));
			if (stack.length === 0) return [_parallel, _sequential];
			cause = stack.pop();
			break;
		case OP_SEQUENTIAL$1:
			switch (cause.left._tag) {
				case OP_EMPTY$2:
					cause = cause.right;
					break;
				case OP_SEQUENTIAL$1:
					cause = sequential$1(cause.left.left, sequential$1(cause.left.right, cause.right));
					break;
				case OP_PARALLEL$1:
					cause = parallel(sequential$1(cause.left.left, cause.right), sequential$1(cause.left.right, cause.right));
					break;
				default:
					_sequential = prepend$1(_sequential, cause.right);
					cause = cause.left;
					break;
			}
			break;
		case OP_PARALLEL$1:
			stack.push(cause.right);
			cause = cause.left;
			break;
	}
	throw new Error(getBugErrorMessage("Cause.evaluateCauseLoop"));
};
/** @internal */
var IsInterruptedOnlyCauseReducer = {
	emptyCase: constTrue,
	failCase: constFalse,
	dieCase: constFalse,
	interruptCase: constTrue,
	sequentialCase: (_, left, right) => left && right,
	parallelCase: (_, left, right) => left && right
};
var OP_SEQUENTIAL_CASE = "SequentialCase";
var OP_PARALLEL_CASE = "ParallelCase";
/** @internal */
var match = /* @__PURE__ */ dual(2, (self, { onDie, onEmpty, onFail, onInterrupt, onParallel, onSequential }) => {
	return reduceWithContext(self, void 0, {
		emptyCase: () => onEmpty,
		failCase: (_, error) => onFail(error),
		dieCase: (_, defect) => onDie(defect),
		interruptCase: (_, fiberId) => onInterrupt(fiberId),
		sequentialCase: (_, left, right) => onSequential(left, right),
		parallelCase: (_, left, right) => onParallel(left, right)
	});
});
/** @internal */
var reduce = /* @__PURE__ */ dual(3, (self, zero, pf) => {
	let accumulator = zero;
	let cause = self;
	const causes = [];
	while (cause !== void 0) {
		const option = pf(accumulator, cause);
		accumulator = isSome(option) ? option.value : accumulator;
		switch (cause._tag) {
			case OP_SEQUENTIAL$1:
				causes.push(cause.right);
				cause = cause.left;
				break;
			case OP_PARALLEL$1:
				causes.push(cause.right);
				cause = cause.left;
				break;
			default:
				cause = void 0;
				break;
		}
		if (cause === void 0 && causes.length > 0) cause = causes.pop();
	}
	return accumulator;
});
/** @internal */
var reduceWithContext = /* @__PURE__ */ dual(3, (self, context, reducer) => {
	const input = [self];
	const output = [];
	while (input.length > 0) {
		const cause = input.pop();
		switch (cause._tag) {
			case OP_EMPTY$2:
				output.push(right(reducer.emptyCase(context)));
				break;
			case OP_FAIL$1:
				output.push(right(reducer.failCase(context, cause.error)));
				break;
			case "Die":
				output.push(right(reducer.dieCase(context, cause.defect)));
				break;
			case OP_INTERRUPT:
				output.push(right(reducer.interruptCase(context, cause.fiberId)));
				break;
			case OP_SEQUENTIAL$1:
				input.push(cause.right);
				input.push(cause.left);
				output.push(left({ _tag: OP_SEQUENTIAL_CASE }));
				break;
			case OP_PARALLEL$1:
				input.push(cause.right);
				input.push(cause.left);
				output.push(left({ _tag: OP_PARALLEL_CASE }));
				break;
		}
	}
	const accumulator = [];
	while (output.length > 0) {
		const either = output.pop();
		switch (either._tag) {
			case "Left":
				switch (either.left._tag) {
					case OP_SEQUENTIAL_CASE: {
						const left = accumulator.pop();
						const right = accumulator.pop();
						const value = reducer.sequentialCase(context, left, right);
						accumulator.push(value);
						break;
					}
					case OP_PARALLEL_CASE: {
						const left = accumulator.pop();
						const right = accumulator.pop();
						const value = reducer.parallelCase(context, left, right);
						accumulator.push(value);
						break;
					}
				}
				break;
			case "Right":
				accumulator.push(either.right);
				break;
		}
	}
	if (accumulator.length === 0) throw new Error("BUG: Cause.reduceWithContext - please report an issue at https://github.com/Effect-TS/effect/issues");
	return accumulator.pop();
});
/** @internal */
var pretty = (cause, options) => {
	if (isInterruptedOnly(cause)) return "All fibers interrupted without errors.";
	return prettyErrors(cause).map(function(e) {
		if (options?.renderErrorCause !== true || e.cause === void 0) return e.stack;
		return `${e.stack} {\n${renderErrorCause(e.cause, "  ")}\n}`;
	}).join("\n");
};
var renderErrorCause = (cause, prefix) => {
	const lines = cause.stack.split("\n");
	let stack = `${prefix}[cause]: ${lines[0]}`;
	for (let i = 1, len = lines.length; i < len; i++) stack += `\n${prefix}${lines[i]}`;
	if (cause.cause) stack += ` {\n${renderErrorCause(cause.cause, `${prefix}  `)}\n${prefix}}`;
	return stack;
};
/** @internal */
var makePrettyError = (originalError) => {
	const originalErrorIsObject = typeof originalError === "object" && originalError !== null;
	const prevLimit = Error.stackTraceLimit;
	Error.stackTraceLimit = 1;
	const error = new Error(prettyErrorMessage(originalError), originalErrorIsObject && "cause" in originalError && typeof originalError.cause !== "undefined" ? { cause: makePrettyError(originalError.cause) } : void 0);
	Error.stackTraceLimit = prevLimit;
	if (error.message === "") error.message = "An error has occurred";
	Error.stackTraceLimit = prevLimit;
	error.name = originalError instanceof Error ? originalError.name : "Error";
	if (originalErrorIsObject) {
		if (spanSymbol in originalError) error.span = originalError[spanSymbol];
		Object.keys(originalError).forEach((key) => {
			if (!(key in error)) error[key] = originalError[key];
		});
	}
	error.stack = prettyErrorStack(`${error.name}: ${error.message}`, originalError instanceof Error && originalError.stack ? originalError.stack : "", error.span);
	return error;
};
/**
* A utility function for generating human-readable error messages from a generic error of type `unknown`.
*
* Rules:
*
* 1) If the input `u` is already a string, it's considered a message.
* 2) If `u` is an Error instance with a message defined, it uses the message.
* 3) If `u` has a user-defined `toString()` method, it uses that method.
* 4) Otherwise, it uses `Inspectable.stringifyCircular` to produce a string representation and uses it as the error message,
*   with "Error" added as a prefix.
*
* @internal
*/
var prettyErrorMessage = (u) => {
	if (typeof u === "string") return u;
	if (typeof u === "object" && u !== null && u instanceof Error) return u.message;
	try {
		if (hasProperty(u, "toString") && isFunction(u["toString"]) && u["toString"] !== Object.prototype.toString && u["toString"] !== globalThis.Array.prototype.toString) return u["toString"]();
	} catch {}
	return stringifyCircular(u);
};
var locationRegex = /\((.*)\)/g;
/** @internal */
var spanToTrace = /* @__PURE__ */ globalValue("effect/Tracer/spanToTrace", () => /* @__PURE__ */ new WeakMap());
var prettyErrorStack = (message, stack, span) => {
	const out = [message];
	const lines = stack.startsWith(message) ? stack.slice(message.length).split("\n") : stack.split("\n");
	for (let i = 1; i < lines.length; i++) {
		if (lines[i].includes(" at new BaseEffectError") || lines[i].includes(" at new YieldableError")) {
			i++;
			continue;
		}
		if (lines[i].includes("Generator.next")) break;
		if (lines[i].includes("effect_internal_function")) break;
		out.push(lines[i].replace(/at .*effect_instruction_i.*\((.*)\)/, "at $1").replace(/EffectPrimitive\.\w+/, "<anonymous>"));
	}
	if (span) {
		let current = span;
		let i = 0;
		while (current && current._tag === "Span" && i < 10) {
			const stackFn = spanToTrace.get(current);
			if (typeof stackFn === "function") {
				const stack = stackFn();
				if (typeof stack === "string") {
					const locationMatchAll = stack.matchAll(locationRegex);
					let match = false;
					for (const [, location] of locationMatchAll) {
						match = true;
						out.push(`    at ${current.name} (${location})`);
					}
					if (!match) out.push(`    at ${current.name} (${stack.replace(/^at /, "")})`);
				} else out.push(`    at ${current.name}`);
			} else out.push(`    at ${current.name}`);
			current = getOrUndefined(current.parent);
			i++;
		}
	}
	return out.join("\n");
};
/** @internal */
var spanSymbol = /* @__PURE__ */ Symbol.for("effect/SpanAnnotation");
/** @internal */
var prettyErrors = (cause) => reduceWithContext(cause, void 0, {
	emptyCase: () => [],
	dieCase: (_, unknownError) => {
		return [makePrettyError(unknownError)];
	},
	failCase: (_, error) => {
		return [makePrettyError(error)];
	},
	interruptCase: () => [],
	parallelCase: (_, l, r) => [...l, ...r],
	sequentialCase: (_, l, r) => [...l, ...r]
});
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/opCodes/deferred.js
/** @internal */
var OP_STATE_PENDING = "Pending";
/** @internal */
var OP_STATE_DONE = "Done";
/** @internal */
var DeferredTypeId = /* @__PURE__ */ Symbol.for("effect/Deferred");
/** @internal */
var deferredVariance = {
	/* c8 ignore next */
	_E: (_) => _,
	/* c8 ignore next */
	_A: (_) => _
};
/** @internal */
var pending = (joiners) => {
	return {
		_tag: OP_STATE_PENDING,
		joiners
	};
};
/** @internal */
var done$2 = (effect) => {
	return {
		_tag: OP_STATE_DONE,
		effect
	};
};
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/singleShotGen.js
var _Symbol$iterator$2 = Symbol.iterator;
/** @internal */
var SingleShotGen = class SingleShotGen {
	constructor(self) {
		_defineProperty(this, "self", void 0);
		_defineProperty(this, "called", false);
		this.self = self;
	}
	next(a) {
		return this.called ? {
			value: a,
			done: true
		} : (this.called = true, {
			value: this.self,
			done: false
		});
	}
	return(a) {
		return {
			value: a,
			done: true
		};
	}
	throw(e) {
		throw e;
	}
	[_Symbol$iterator$2]() {
		return new SingleShotGen(this.self);
	}
}, _Equal$symbol$6, _Hash$symbol$6, _Symbol$iterator$1, _Equal$symbol2$3, _Hash$symbol2$3, _Symbol$iterator2, _Equal$symbol3$3, _Hash$symbol3$3, _Symbol$iterator3;
/**
* @internal
*/
var blocked = (blockedRequests, _continue) => {
	const effect = new EffectPrimitive("Blocked");
	effect.effect_instruction_i0 = blockedRequests;
	effect.effect_instruction_i1 = _continue;
	return effect;
};
/**
* @internal
*/
var runRequestBlock = (blockedRequests) => {
	const effect = new EffectPrimitive("RunBlocked");
	effect.effect_instruction_i0 = blockedRequests;
	return effect;
};
/** @internal */
var EffectTypeId = /* @__PURE__ */ Symbol.for("effect/Effect");
/** @internal */
var RevertFlags = class {
	constructor(patch, op) {
		_defineProperty(this, "patch", void 0);
		_defineProperty(this, "op", void 0);
		_defineProperty(this, "_op", OP_REVERT_FLAGS);
		this.patch = patch;
		this.op = op;
	}
};
_Equal$symbol$6 = symbol;
_Hash$symbol$6 = symbol$1;
_Symbol$iterator$1 = Symbol.iterator;
var EffectPrimitive = class {
	constructor(_op) {
		_defineProperty(this, "_op", void 0);
		_defineProperty(this, "effect_instruction_i0", void 0);
		_defineProperty(this, "effect_instruction_i1", void 0);
		_defineProperty(this, "effect_instruction_i2", void 0);
		_defineProperty(this, "trace", void 0);
		_defineProperty(this, EffectTypeId, effectVariance);
		this._op = _op;
	}
	[_Equal$symbol$6](that) {
		return this === that;
	}
	[_Hash$symbol$6]() {
		return cached(this, random(this));
	}
	pipe() {
		return pipeArguments(this, arguments);
	}
	toJSON() {
		return {
			_id: "Effect",
			_op: this._op,
			effect_instruction_i0: toJSON(this.effect_instruction_i0),
			effect_instruction_i1: toJSON(this.effect_instruction_i1),
			effect_instruction_i2: toJSON(this.effect_instruction_i2)
		};
	}
	toString() {
		return format$2(this.toJSON());
	}
	[NodeInspectSymbol]() {
		return this.toJSON();
	}
	[_Symbol$iterator$1]() {
		return new SingleShotGen(new YieldWrap(this));
	}
};
_Equal$symbol2$3 = symbol;
_Hash$symbol2$3 = symbol$1;
_Symbol$iterator2 = Symbol.iterator;
/** @internal */
var EffectPrimitiveFailure = class {
	constructor(_op) {
		_defineProperty(this, "_op", void 0);
		_defineProperty(this, "effect_instruction_i0", void 0);
		_defineProperty(this, "effect_instruction_i1", void 0);
		_defineProperty(this, "effect_instruction_i2", void 0);
		_defineProperty(this, "trace", void 0);
		_defineProperty(this, EffectTypeId, effectVariance);
		this._op = _op;
		this._tag = _op;
	}
	[_Equal$symbol2$3](that) {
		return exitIsExit(that) && that._op === "Failure" && equals$1(this.effect_instruction_i0, that.effect_instruction_i0);
	}
	[_Hash$symbol2$3]() {
		return pipe(string(this._tag), combine$5(hash(this.effect_instruction_i0)), cached(this));
	}
	get cause() {
		return this.effect_instruction_i0;
	}
	pipe() {
		return pipeArguments(this, arguments);
	}
	toJSON() {
		return {
			_id: "Exit",
			_tag: this._op,
			cause: this.cause.toJSON()
		};
	}
	toString() {
		return format$2(this.toJSON());
	}
	[NodeInspectSymbol]() {
		return this.toJSON();
	}
	[_Symbol$iterator2]() {
		return new SingleShotGen(new YieldWrap(this));
	}
};
_Equal$symbol3$3 = symbol;
_Hash$symbol3$3 = symbol$1;
_Symbol$iterator3 = Symbol.iterator;
/** @internal */
var EffectPrimitiveSuccess = class {
	constructor(_op) {
		_defineProperty(this, "_op", void 0);
		_defineProperty(this, "effect_instruction_i0", void 0);
		_defineProperty(this, "effect_instruction_i1", void 0);
		_defineProperty(this, "effect_instruction_i2", void 0);
		_defineProperty(this, "trace", void 0);
		_defineProperty(this, EffectTypeId, effectVariance);
		this._op = _op;
		this._tag = _op;
	}
	[_Equal$symbol3$3](that) {
		return exitIsExit(that) && that._op === "Success" && equals$1(this.effect_instruction_i0, that.effect_instruction_i0);
	}
	[_Hash$symbol3$3]() {
		return pipe(string(this._tag), combine$5(hash(this.effect_instruction_i0)), cached(this));
	}
	get value() {
		return this.effect_instruction_i0;
	}
	pipe() {
		return pipeArguments(this, arguments);
	}
	toJSON() {
		return {
			_id: "Exit",
			_tag: this._op,
			value: toJSON(this.value)
		};
	}
	toString() {
		return format$2(this.toJSON());
	}
	[NodeInspectSymbol]() {
		return this.toJSON();
	}
	[_Symbol$iterator3]() {
		return new SingleShotGen(new YieldWrap(this));
	}
};
/** @internal */
var isEffect = (u) => hasProperty(u, EffectTypeId);
var withFiberRuntime = (withRuntime) => {
	const effect = new EffectPrimitive(OP_WITH_RUNTIME);
	effect.effect_instruction_i0 = withRuntime;
	return effect;
};
var acquireUseRelease = /* @__PURE__ */ dual(3, (acquire, use, release) => uninterruptibleMask$1((restore) => flatMap$2(acquire, (a) => flatMap$2(exit(suspend(() => restore(use(a)))), (exit) => {
	return suspend(() => release(a, exit)).pipe(matchCauseEffect$1({
		onFailure: (cause) => {
			switch (exit._tag) {
				case OP_FAILURE: return failCause$1(sequential$1(exit.effect_instruction_i0, cause));
				case OP_SUCCESS: return failCause$1(cause);
			}
		},
		onSuccess: () => exit
	}));
}))));
var as = /* @__PURE__ */ dual(2, (self, value) => flatMap$2(self, () => succeed$1(value)));
var asVoid = (self) => as(self, void 0);
var custom = function() {
	const wrapper = new EffectPrimitive(OP_COMMIT);
	switch (arguments.length) {
		case 2:
			wrapper.effect_instruction_i0 = arguments[0];
			wrapper.commit = arguments[1];
			break;
		case 3:
			wrapper.effect_instruction_i0 = arguments[0];
			wrapper.effect_instruction_i1 = arguments[1];
			wrapper.commit = arguments[2];
			break;
		case 4:
			wrapper.effect_instruction_i0 = arguments[0];
			wrapper.effect_instruction_i1 = arguments[1];
			wrapper.effect_instruction_i2 = arguments[2];
			wrapper.commit = arguments[3];
			break;
		default: throw new Error(getBugErrorMessage("you're not supposed to end up here"));
	}
	return wrapper;
};
var unsafeAsync = (register, blockingOn = none$2) => {
	const effect = new EffectPrimitive(OP_ASYNC);
	let cancelerRef = void 0;
	effect.effect_instruction_i0 = (resume) => {
		cancelerRef = register(resume);
	};
	effect.effect_instruction_i1 = blockingOn;
	return onInterrupt(effect, (_) => isEffect(cancelerRef) ? cancelerRef : void_$1);
};
var asyncInterrupt = (register, blockingOn = none$2) => suspend(() => unsafeAsync(register, blockingOn));
var async_ = (resume, blockingOn = none$2) => {
	return custom(resume, function() {
		let backingResume = void 0;
		let pendingEffect = void 0;
		function proxyResume(effect) {
			if (backingResume) backingResume(effect);
			else if (pendingEffect === void 0) pendingEffect = effect;
		}
		const effect = new EffectPrimitive(OP_ASYNC);
		effect.effect_instruction_i0 = (resume) => {
			backingResume = resume;
			if (pendingEffect) resume(pendingEffect);
		};
		effect.effect_instruction_i1 = blockingOn;
		let cancelerRef = void 0;
		let controllerRef = void 0;
		if (this.effect_instruction_i0.length !== 1) {
			controllerRef = new AbortController();
			cancelerRef = internalCall(() => this.effect_instruction_i0(proxyResume, controllerRef.signal));
		} else cancelerRef = internalCall(() => this.effect_instruction_i0(proxyResume));
		return cancelerRef || controllerRef ? onInterrupt(effect, (_) => {
			if (controllerRef) controllerRef.abort();
			return cancelerRef ?? void_$1;
		}) : effect;
	});
};
var catchAll$1 = /* @__PURE__ */ dual(2, (self, f) => matchEffect(self, {
	onFailure: f,
	onSuccess: succeed$1
}));
var originalSymbol = /* @__PURE__ */ Symbol.for("effect/OriginalAnnotation");
var capture = (obj, span) => {
	if (isSome(span)) return new Proxy(obj, {
		has(target, p) {
			return p === spanSymbol || p === originalSymbol || p in target;
		},
		get(target, p) {
			if (p === spanSymbol) return span.value;
			if (p === originalSymbol) return obj;
			return target[p];
		}
	});
	return obj;
};
var die = (defect) => isObject(defect) && !(spanSymbol in defect) ? withFiberRuntime((fiber) => failCause$1(die$1(capture(defect, currentSpanFromFiber(fiber))))) : failCause$1(die$1(defect));
var dieMessage = (message) => failCauseSync(() => die$1(new RuntimeException(message)));
var either = (self) => matchEffect(self, {
	onFailure: (e) => succeed$1(left(e)),
	onSuccess: (a) => succeed$1(right(a))
});
var exit = (self) => matchCause(self, {
	onFailure: exitFailCause$1,
	onSuccess: exitSucceed$1
});
var fail$1 = (error) => isObject(error) && !(spanSymbol in error) ? withFiberRuntime((fiber) => failCause$1(fail$2(capture(error, currentSpanFromFiber(fiber))))) : failCause$1(fail$2(error));
var failSync = (evaluate) => flatMap$2(sync$1(evaluate), fail$1);
var failCause$1 = (cause) => {
	const effect = new EffectPrimitiveFailure(OP_FAILURE);
	effect.effect_instruction_i0 = cause;
	return effect;
};
var failCauseSync = (evaluate) => flatMap$2(sync$1(evaluate), failCause$1);
var fiberId = /* @__PURE__ */ withFiberRuntime((state) => succeed$1(state.id()));
var fiberIdWith = (f) => withFiberRuntime((state) => f(state.id()));
var flatMap$2 = /* @__PURE__ */ dual(2, (self, f) => {
	const effect = new EffectPrimitive(OP_ON_SUCCESS);
	effect.effect_instruction_i0 = self;
	effect.effect_instruction_i1 = f;
	return effect;
});
var step = (self) => {
	const effect = new EffectPrimitive("OnStep");
	effect.effect_instruction_i0 = self;
	return effect;
};
var flatten = (self) => flatMap$2(self, identity);
var matchCause = /* @__PURE__ */ dual(2, (self, options) => matchCauseEffect$1(self, {
	onFailure: (cause) => succeed$1(options.onFailure(cause)),
	onSuccess: (a) => succeed$1(options.onSuccess(a))
}));
var matchCauseEffect$1 = /* @__PURE__ */ dual(2, (self, options) => {
	const effect = new EffectPrimitive(OP_ON_SUCCESS_AND_FAILURE);
	effect.effect_instruction_i0 = self;
	effect.effect_instruction_i1 = options.onFailure;
	effect.effect_instruction_i2 = options.onSuccess;
	return effect;
});
var matchEffect = /* @__PURE__ */ dual(2, (self, options) => matchCauseEffect$1(self, {
	onFailure: (cause) => {
		if (defects(cause).length > 0) return failCause$1(electFailures(cause));
		const failures$1 = failures(cause);
		if (failures$1.length > 0) return options.onFailure(unsafeHead(failures$1));
		return failCause$1(cause);
	},
	onSuccess: options.onSuccess
}));
var forEachSequential = /* @__PURE__ */ dual(2, (self, f) => suspend(() => {
	const arr = fromIterable$6(self);
	const ret = allocate(arr.length);
	let i = 0;
	return as(whileLoop({
		while: () => i < arr.length,
		body: () => f(arr[i], i),
		step: (b) => {
			ret[i++] = b;
		}
	}), ret);
}));
var forEachSequentialDiscard = /* @__PURE__ */ dual(2, (self, f) => suspend(() => {
	const arr = fromIterable$6(self);
	let i = 0;
	return whileLoop({
		while: () => i < arr.length,
		body: () => f(arr[i], i),
		step: () => {
			i++;
		}
	});
}));
var interruptible$1 = (self) => {
	const effect = new EffectPrimitive(OP_UPDATE_RUNTIME_FLAGS);
	effect.effect_instruction_i0 = enable(1);
	effect.effect_instruction_i1 = () => self;
	return effect;
};
var map$1 = /* @__PURE__ */ dual(2, (self, f) => flatMap$2(self, (a) => sync$1(() => f(a))));
var mapBoth = /* @__PURE__ */ dual(2, (self, options) => matchEffect(self, {
	onFailure: (e) => failSync(() => options.onFailure(e)),
	onSuccess: (a) => sync$1(() => options.onSuccess(a))
}));
var mapError = /* @__PURE__ */ dual(2, (self, f) => matchCauseEffect$1(self, {
	onFailure: (cause) => {
		const either = failureOrCause(cause);
		switch (either._tag) {
			case "Left": return failSync(() => f(either.left));
			case "Right": return failCause$1(either.right);
		}
	},
	onSuccess: succeed$1
}));
var onExit$1 = /* @__PURE__ */ dual(2, (self, cleanup) => uninterruptibleMask$1((restore) => matchCauseEffect$1(restore(self), {
	onFailure: (cause1) => {
		const result = exitFailCause$1(cause1);
		return matchCauseEffect$1(cleanup(result), {
			onFailure: (cause2) => exitFailCause$1(sequential$1(cause1, cause2)),
			onSuccess: () => result
		});
	},
	onSuccess: (success) => {
		const result = exitSucceed$1(success);
		return zipRight(cleanup(result), result);
	}
})));
var onInterrupt = /* @__PURE__ */ dual(2, (self, cleanup) => onExit$1(self, exitMatch({
	onFailure: (cause) => isInterruptedOnly(cause) ? asVoid(cleanup(interruptors(cause))) : void_$1,
	onSuccess: () => void_$1
})));
var succeed$1 = (value) => {
	const effect = new EffectPrimitiveSuccess(OP_SUCCESS);
	effect.effect_instruction_i0 = value;
	return effect;
};
var suspend = (evaluate) => {
	const effect = new EffectPrimitive(OP_COMMIT);
	effect.commit = evaluate;
	return effect;
};
var sync$1 = (thunk) => {
	const effect = new EffectPrimitive(OP_SYNC);
	effect.effect_instruction_i0 = thunk;
	return effect;
};
var tap = /* @__PURE__ */ dual((args) => args.length === 3 || args.length === 2 && !(isObject(args[1]) && "onlyEffect" in args[1]), (self, f) => flatMap$2(self, (a) => {
	const b = typeof f === "function" ? f(a) : f;
	if (isEffect(b)) return as(b, a);
	else if (isPromiseLike(b)) return unsafeAsync((resume) => {
		b.then((_) => resume(succeed$1(a)), (e) => resume(fail$1(new UnknownException(e, "An unknown error occurred in Effect.tap"))));
	});
	return succeed$1(a);
}));
var transplant = (f) => withFiberRuntime((state) => {
	return f(fiberRefLocally(currentForkScopeOverride, some(pipe(state.getFiberRef(currentForkScopeOverride), getOrElse(() => state.scope())))));
});
var uninterruptible = (self) => {
	const effect = new EffectPrimitive(OP_UPDATE_RUNTIME_FLAGS);
	effect.effect_instruction_i0 = disable(1);
	effect.effect_instruction_i1 = () => self;
	return effect;
};
var uninterruptibleMask$1 = (f) => custom(f, function() {
	const effect = new EffectPrimitive(OP_UPDATE_RUNTIME_FLAGS);
	effect.effect_instruction_i0 = disable(1);
	effect.effect_instruction_i1 = (oldFlags) => interruption(oldFlags) ? internalCall(() => this.effect_instruction_i0(interruptible$1)) : internalCall(() => this.effect_instruction_i0(uninterruptible));
	return effect;
});
var void_$1 = /* @__PURE__ */ succeed$1(void 0);
var updateRuntimeFlags = (patch) => {
	const effect = new EffectPrimitive(OP_UPDATE_RUNTIME_FLAGS);
	effect.effect_instruction_i0 = patch;
	effect.effect_instruction_i1 = void 0;
	return effect;
};
var whileLoop = (options) => {
	const effect = new EffectPrimitive(OP_WHILE);
	effect.effect_instruction_i0 = options.while;
	effect.effect_instruction_i1 = options.body;
	effect.effect_instruction_i2 = options.step;
	return effect;
};
var yieldNow$2 = (options) => {
	const effect = new EffectPrimitive(OP_YIELD);
	return typeof options?.priority !== "undefined" ? withSchedulingPriority(effect, options.priority) : effect;
};
var zip = /* @__PURE__ */ dual(2, (self, that) => flatMap$2(self, (a) => map$1(that, (b) => [a, b])));
var zipLeft = /* @__PURE__ */ dual(2, (self, that) => flatMap$2(self, (a) => as(that, a)));
var zipRight = /* @__PURE__ */ dual(2, (self, that) => flatMap$2(self, () => that));
var interruptFiber = (self) => flatMap$2(fiberId, (fiberId) => pipe(self, interruptAsFiber(fiberId)));
var interruptAsFiber = /* @__PURE__ */ dual(2, (self, fiberId) => flatMap$2(self.interruptAsFork(fiberId), () => self.await));
/** @internal */
var logLevelAll = {
	_tag: "All",
	syslog: 0,
	label: "ALL",
	ordinal: Number.MIN_SAFE_INTEGER,
	pipe() {
		return pipeArguments(this, arguments);
	}
};
/** @internal */
var logLevelFatal = {
	_tag: "Fatal",
	syslog: 2,
	label: "FATAL",
	ordinal: 5e4,
	pipe() {
		return pipeArguments(this, arguments);
	}
};
/** @internal */
var logLevelError = {
	_tag: "Error",
	syslog: 3,
	label: "ERROR",
	ordinal: 4e4,
	pipe() {
		return pipeArguments(this, arguments);
	}
};
/** @internal */
var logLevelWarning = {
	_tag: "Warning",
	syslog: 4,
	label: "WARN",
	ordinal: 3e4,
	pipe() {
		return pipeArguments(this, arguments);
	}
};
/** @internal */
var logLevelInfo = {
	_tag: "Info",
	syslog: 6,
	label: "INFO",
	ordinal: 2e4,
	pipe() {
		return pipeArguments(this, arguments);
	}
};
/** @internal */
var logLevelDebug = {
	_tag: "Debug",
	syslog: 7,
	label: "DEBUG",
	ordinal: 1e4,
	pipe() {
		return pipeArguments(this, arguments);
	}
};
/** @internal */
var logLevelTrace = {
	_tag: "Trace",
	syslog: 7,
	label: "TRACE",
	ordinal: 0,
	pipe() {
		return pipeArguments(this, arguments);
	}
};
/** @internal */
var logLevelNone = {
	_tag: "None",
	syslog: 7,
	label: "OFF",
	ordinal: Number.MAX_SAFE_INTEGER,
	pipe() {
		return pipeArguments(this, arguments);
	}
};
/** @internal */
var FiberRefTypeId = /* @__PURE__ */ Symbol.for("effect/FiberRef");
var fiberRefVariance = { 
/* c8 ignore next */
_A: (_) => _ };
var fiberRefGet = (self) => withFiberRuntime((fiber) => exitSucceed$1(fiber.getFiberRef(self)));
var fiberRefGetWith = /* @__PURE__ */ dual(2, (self, f) => flatMap$2(fiberRefGet(self), f));
var fiberRefSet = /* @__PURE__ */ dual(2, (self, value) => fiberRefModify(self, () => [void 0, value]));
var fiberRefModify = /* @__PURE__ */ dual(2, (self, f) => withFiberRuntime((state) => {
	const [b, a] = f(state.getFiberRef(self));
	state.setFiberRef(self, a);
	return succeed$1(b);
}));
var fiberRefLocally = /* @__PURE__ */ dual(3, (use, self, value) => acquireUseRelease(zipLeft(fiberRefGet(self), fiberRefSet(self, value)), () => use, (oldValue) => fiberRefSet(self, oldValue)));
/** @internal */
var fiberRefUnsafeMake = (initial, options) => fiberRefUnsafeMakePatch(initial, {
	differ: update$1(),
	fork: options?.fork ?? identity,
	join: options?.join
});
/** @internal */
var fiberRefUnsafeMakeHashSet = (initial) => {
	const differ = hashSet();
	return fiberRefUnsafeMakePatch(initial, {
		differ,
		fork: differ.empty
	});
};
/** @internal */
var fiberRefUnsafeMakeReadonlyArray = (initial) => {
	const differ = readonlyArray(update$1());
	return fiberRefUnsafeMakePatch(initial, {
		differ,
		fork: differ.empty
	});
};
/** @internal */
var fiberRefUnsafeMakeContext = (initial) => {
	const differ = environment();
	return fiberRefUnsafeMakePatch(initial, {
		differ,
		fork: differ.empty
	});
};
/** @internal */
var fiberRefUnsafeMakePatch = (initial, options) => {
	return {
		...CommitPrototype,
		[FiberRefTypeId]: fiberRefVariance,
		initial,
		commit() {
			return fiberRefGet(this);
		},
		diff: (oldValue, newValue) => options.differ.diff(oldValue, newValue),
		combine: (first, second) => options.differ.combine(first, second),
		patch: (patch) => (oldValue) => options.differ.patch(patch, oldValue),
		fork: options.fork,
		join: options.join ?? ((_, n) => n)
	};
};
/** @internal */
var fiberRefUnsafeMakeRuntimeFlags = (initial) => fiberRefUnsafeMakePatch(initial, {
	differ: differ$1,
	fork: differ$1.empty
});
/** @internal */
var currentContext = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentContext"), () => fiberRefUnsafeMakeContext(empty$17()));
/** @internal */
var currentSchedulingPriority = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentSchedulingPriority"), () => fiberRefUnsafeMake(0));
/** @internal */
var currentMaxOpsBeforeYield = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentMaxOpsBeforeYield"), () => fiberRefUnsafeMake(2048));
/** @internal */
var currentLogAnnotations = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentLogAnnotation"), () => fiberRefUnsafeMake(empty$12()));
/** @internal */
var currentLogLevel = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentLogLevel"), () => fiberRefUnsafeMake(logLevelInfo));
/** @internal */
var currentLogSpan = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentLogSpan"), () => fiberRefUnsafeMake(empty$11()));
/** @internal */
var withSchedulingPriority = /* @__PURE__ */ dual(2, (self, scheduler) => fiberRefLocally(self, currentSchedulingPriority, scheduler));
/** @internal */
var currentUnhandledErrorLogLevel = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentUnhandledErrorLogLevel"), () => fiberRefUnsafeMake(some(logLevelDebug)));
/** @internal */
var currentVersionMismatchErrorLogLevel = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/versionMismatchErrorLogLevel"), () => fiberRefUnsafeMake(some(logLevelWarning)));
/** @internal */
var currentMetricLabels = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentMetricLabels"), () => fiberRefUnsafeMakeReadonlyArray(empty$19()));
/** @internal */
var currentForkScopeOverride = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentForkScopeOverride"), () => fiberRefUnsafeMake(none$4(), {
	fork: () => none$4(),
	join: (parent, _) => parent
}));
/** @internal */
var currentInterruptedCause = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentInterruptedCause"), () => fiberRefUnsafeMake(empty$6, {
	fork: () => empty$6,
	join: (parent, _) => parent
}));
/** @internal */
var ScopeTypeId = /* @__PURE__ */ Symbol.for("effect/Scope");
/** @internal */
var CloseableScopeTypeId = /* @__PURE__ */ Symbol.for("effect/CloseableScope");
var scopeAddFinalizer = (self, finalizer) => self.addFinalizer(() => asVoid(finalizer));
var scopeClose = (self, exit) => self.close(exit);
var scopeFork = (self, strategy) => self.fork(strategy);
/** @internal */
var YieldableError$1 = /* @__PURE__ */ function() {
	class YieldableError extends globalThis.Error {
		commit() {
			return fail$1(this);
		}
		toJSON() {
			const obj = { ...this };
			if (this.message) obj.message = this.message;
			if (this.cause) obj.cause = this.cause;
			return obj;
		}
		[NodeInspectSymbol]() {
			if (this.toString !== globalThis.Error.prototype.toString) return this.stack ? `${this.toString()}\n${this.stack.split("\n").slice(1).join("\n")}` : this.toString();
			else if ("Bun" in globalThis) return pretty(fail$2(this), { renderErrorCause: true });
			return this;
		}
	}
	Object.assign(YieldableError.prototype, StructuralCommitPrototype);
	return YieldableError;
}();
var makeException = (proto, tag) => {
	class Base extends YieldableError$1 {
		constructor(..._args) {
			super(..._args);
			_defineProperty(this, "_tag", tag);
		}
	}
	Object.assign(Base.prototype, proto);
	Base.prototype.name = tag;
	return Base;
};
/** @internal */
var RuntimeExceptionTypeId = /* @__PURE__ */ Symbol.for("effect/Cause/errors/RuntimeException");
/** @internal */
var RuntimeException = /* @__PURE__ */ makeException({ [RuntimeExceptionTypeId]: RuntimeExceptionTypeId }, "RuntimeException");
/** @internal */
var InterruptedExceptionTypeId = /* @__PURE__ */ Symbol.for("effect/Cause/errors/InterruptedException");
/** @internal */
var isInterruptedException = (u) => hasProperty(u, InterruptedExceptionTypeId);
/** @internal */
var NoSuchElementExceptionTypeId = /* @__PURE__ */ Symbol.for("effect/Cause/errors/NoSuchElement");
/** @internal */
var NoSuchElementException$1 = /* @__PURE__ */ makeException({ [NoSuchElementExceptionTypeId]: NoSuchElementExceptionTypeId }, "NoSuchElementException");
/** @internal */
var UnknownExceptionTypeId = /* @__PURE__ */ Symbol.for("effect/Cause/errors/UnknownException");
/** @internal */
var UnknownException = /* @__PURE__ */ function() {
	class UnknownException extends YieldableError$1 {
		constructor(cause, message) {
			super(message ?? "An unknown error occurred", { cause });
			_defineProperty(this, "_tag", "UnknownException");
			_defineProperty(this, "error", void 0);
			this.error = cause;
		}
	}
	Object.assign(UnknownException.prototype, {
		[UnknownExceptionTypeId]: UnknownExceptionTypeId,
		name: "UnknownException"
	});
	return UnknownException;
}();
/** @internal */
var exitIsExit = (u) => isEffect(u) && "_tag" in u && (u._tag === "Success" || u._tag === "Failure");
/** @internal */
var exitAs = /* @__PURE__ */ dual(2, (self, value) => {
	switch (self._tag) {
		case OP_FAILURE: return exitFailCause$1(self.effect_instruction_i0);
		case OP_SUCCESS: return exitSucceed$1(value);
	}
});
/** @internal */
var exitAsVoid = (self) => exitAs(self, void 0);
/** @internal */
var exitCollectAll = (exits, options) => exitCollectAllInternal(exits, options?.parallel ? parallel : sequential$1);
/** @internal */
var exitDie$1 = (defect) => exitFailCause$1(die$1(defect));
/** @internal */
var exitFail = (error) => exitFailCause$1(fail$2(error));
/** @internal */
var exitFailCause$1 = (cause) => {
	const effect = new EffectPrimitiveFailure(OP_FAILURE);
	effect.effect_instruction_i0 = cause;
	return effect;
};
/** @internal */
var exitInterrupt$1 = (fiberId) => exitFailCause$1(interrupt(fiberId));
/** @internal */
var exitMap = /* @__PURE__ */ dual(2, (self, f) => {
	switch (self._tag) {
		case OP_FAILURE: return exitFailCause$1(self.effect_instruction_i0);
		case OP_SUCCESS: return exitSucceed$1(f(self.effect_instruction_i0));
	}
});
/** @internal */
var exitMatch = /* @__PURE__ */ dual(2, (self, { onFailure, onSuccess }) => {
	switch (self._tag) {
		case OP_FAILURE: return onFailure(self.effect_instruction_i0);
		case OP_SUCCESS: return onSuccess(self.effect_instruction_i0);
	}
});
/** @internal */
var exitSucceed$1 = (value) => {
	const effect = new EffectPrimitiveSuccess(OP_SUCCESS);
	effect.effect_instruction_i0 = value;
	return effect;
};
/** @internal */
var exitVoid$1 = /* @__PURE__ */ exitSucceed$1(void 0);
/** @internal */
var exitZipWith = /* @__PURE__ */ dual(3, (self, that, { onFailure, onSuccess }) => {
	switch (self._tag) {
		case OP_FAILURE: switch (that._tag) {
			case OP_SUCCESS: return exitFailCause$1(self.effect_instruction_i0);
			case OP_FAILURE: return exitFailCause$1(onFailure(self.effect_instruction_i0, that.effect_instruction_i0));
		}
		case OP_SUCCESS: switch (that._tag) {
			case OP_SUCCESS: return exitSucceed$1(onSuccess(self.effect_instruction_i0, that.effect_instruction_i0));
			case OP_FAILURE: return exitFailCause$1(that.effect_instruction_i0);
		}
	}
});
var exitCollectAllInternal = (exits, combineCauses) => {
	const list = fromIterable$5(exits);
	if (!isNonEmpty(list)) return none$4();
	return pipe(tailNonEmpty(list), reduce$6(pipe(headNonEmpty(list), exitMap(of$1)), (accumulator, current) => pipe(accumulator, exitZipWith(current, {
		onSuccess: (list, value) => pipe(list, prepend$1(value)),
		onFailure: combineCauses
	}))), exitMap(reverse$1), exitMap((chunk) => toReadonlyArray(chunk)), some);
};
/** @internal */
var deferredUnsafeMake = (fiberId) => {
	return {
		...CommitPrototype,
		[DeferredTypeId]: deferredVariance,
		state: make$13(pending([])),
		commit() {
			return deferredAwait(this);
		},
		blockingOn: fiberId
	};
};
var deferredAwait = (self) => asyncInterrupt((resume) => {
	const state = get$3(self.state);
	switch (state._tag) {
		case OP_STATE_DONE: return resume(state.effect);
		case OP_STATE_PENDING:
			state.joiners.push(resume);
			return deferredInterruptJoiner(self, resume);
	}
}, self.blockingOn);
/** @internal */
var deferredUnsafeDone = (self, effect) => {
	const state = get$3(self.state);
	if (state._tag === "Pending") {
		set$2(self.state, done$2(effect));
		for (let i = 0, len = state.joiners.length; i < len; i++) state.joiners[i](effect);
	}
};
var deferredInterruptJoiner = (self, joiner) => sync$1(() => {
	const state = get$3(self.state);
	if (state._tag === "Pending") {
		const index = state.joiners.indexOf(joiner);
		if (index >= 0) state.joiners.splice(index, 1);
	}
});
/** @internal */
var currentSpanFromFiber = (fiber) => {
	const span = fiber.currentSpan;
	return span !== void 0 && span._tag === "Span" ? some(span) : none$4();
};
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/MutableHashMap.js
var _Symbol$iterator;
var TypeId$2 = /* @__PURE__ */ Symbol.for("effect/MutableHashMap");
var MutableHashMapProto = {
	[TypeId$2]: TypeId$2,
	[Symbol.iterator]() {
		return new MutableHashMapIterator(this);
	},
	toString() {
		return format$2(this.toJSON());
	},
	toJSON() {
		return {
			_id: "MutableHashMap",
			values: Array.from(this).map(toJSON)
		};
	},
	[NodeInspectSymbol]() {
		return this.toJSON();
	},
	pipe() {
		return pipeArguments(this, arguments);
	}
};
_Symbol$iterator = Symbol.iterator;
var MutableHashMapIterator = class MutableHashMapIterator {
	constructor(self) {
		_defineProperty(this, "self", void 0);
		_defineProperty(this, "referentialIterator", void 0);
		_defineProperty(this, "bucketIterator", void 0);
		this.self = self;
		this.referentialIterator = self.referential[Symbol.iterator]();
	}
	next() {
		if (this.bucketIterator !== void 0) return this.bucketIterator.next();
		const result = this.referentialIterator.next();
		if (result.done) {
			this.bucketIterator = new BucketIterator(this.self.buckets.values());
			return this.next();
		}
		return result;
	}
	[_Symbol$iterator]() {
		return new MutableHashMapIterator(this.self);
	}
};
var BucketIterator = class {
	constructor(backing) {
		_defineProperty(this, "backing", void 0);
		_defineProperty(this, "currentBucket", void 0);
		this.backing = backing;
	}
	next() {
		if (this.currentBucket === void 0) {
			const result = this.backing.next();
			if (result.done) return result;
			this.currentBucket = result.value[Symbol.iterator]();
		}
		const result = this.currentBucket.next();
		if (result.done) {
			this.currentBucket = void 0;
			return this.next();
		}
		return result;
	}
};
/**
* @since 2.0.0
* @category constructors
*/
var empty$5 = () => {
	const self = Object.create(MutableHashMapProto);
	self.referential = /* @__PURE__ */ new Map();
	self.buckets = /* @__PURE__ */ new Map();
	self.bucketsSize = 0;
	return self;
};
/**
* @since 2.0.0
* @category elements
*/
var get$1 = /* @__PURE__ */ dual(2, (self, key) => {
	if (isEqual(key) === false) return self.referential.has(key) ? some(self.referential.get(key)) : none$4();
	const hash = key[symbol$1]();
	const bucket = self.buckets.get(hash);
	if (bucket === void 0) return none$4();
	return getFromBucket(self, bucket, key);
});
var getFromBucket = (self, bucket, key, remove = false) => {
	for (let i = 0, len = bucket.length; i < len; i++) if (key[symbol](bucket[i][0])) {
		const value = bucket[i][1];
		if (remove) {
			bucket.splice(i, 1);
			self.bucketsSize--;
		}
		return some(value);
	}
	return none$4();
};
/**
* @since 2.0.0
* @category elements
*/
var has = /* @__PURE__ */ dual(2, (self, key) => isSome(get$1(self, key)));
/**
* @since 2.0.0
*/
var set = /* @__PURE__ */ dual(3, (self, key, value) => {
	if (isEqual(key) === false) {
		self.referential.set(key, value);
		return self;
	}
	const hash = key[symbol$1]();
	const bucket = self.buckets.get(hash);
	if (bucket === void 0) {
		self.buckets.set(hash, [[key, value]]);
		self.bucketsSize++;
		return self;
	}
	removeFromBucket(self, bucket, key);
	bucket.push([key, value]);
	self.bucketsSize++;
	return self;
});
var removeFromBucket = (self, bucket, key) => {
	for (let i = 0, len = bucket.length; i < len; i++) if (key[symbol](bucket[i][0])) {
		bucket.splice(i, 1);
		self.bucketsSize--;
		return;
	}
};
/** @internal */
var ClockTypeId = /* @__PURE__ */ Symbol.for("effect/Clock");
/** @internal */
var clockTag = /* @__PURE__ */ GenericTag("effect/Clock");
/** @internal */
var MAX_TIMER_MILLIS = 2 ** 31 - 1;
/** @internal */
var globalClockScheduler = { unsafeSchedule(task, duration) {
	const millis = toMillis(duration);
	if (millis > MAX_TIMER_MILLIS) return constFalse;
	let completed = false;
	const handle = setTimeout(() => {
		completed = true;
		task();
	}, millis);
	return () => {
		clearTimeout(handle);
		return !completed;
	};
} };
var performanceNowNanos = /* @__PURE__ */ function() {
	const bigint1e6 = /* @__PURE__ */ BigInt(1e6);
	if (typeof performance === "undefined" || typeof performance.now !== "function") return () => BigInt(Date.now()) * bigint1e6;
	let origin;
	return () => {
		if (origin === void 0) origin = BigInt(Date.now()) * bigint1e6 - BigInt(Math.round(performance.now() * 1e6));
		return origin + BigInt(Math.round(performance.now() * 1e6));
	};
}();
var processOrPerformanceNow = /* @__PURE__ */ function() {
	const processHrtime = typeof process === "object" && "hrtime" in process && typeof process.hrtime.bigint === "function" ? process.hrtime : void 0;
	if (!processHrtime) return performanceNowNanos;
	const origin = /* @__PURE__ */ performanceNowNanos() - /* @__PURE__ */ processHrtime.bigint();
	return () => origin + processHrtime.bigint();
}();
/** @internal */
var ClockImpl = class {
	constructor() {
		_defineProperty(this, ClockTypeId, ClockTypeId);
		_defineProperty(this, "currentTimeMillis", /* @__PURE__ */ sync$1(() => this.unsafeCurrentTimeMillis()));
		_defineProperty(this, "currentTimeNanos", /* @__PURE__ */ sync$1(() => this.unsafeCurrentTimeNanos()));
	}
	unsafeCurrentTimeMillis() {
		return Date.now();
	}
	unsafeCurrentTimeNanos() {
		return processOrPerformanceNow();
	}
	scheduler() {
		return succeed$1(globalClockScheduler);
	}
	sleep(duration) {
		return async_((resume) => {
			return asVoid(sync$1(globalClockScheduler.unsafeSchedule(() => resume(void_$1), duration)));
		});
	}
};
/** @internal */
var make$9 = () => new ClockImpl();
/** @internal */
var OP_INVALID_DATA = "InvalidData";
/** @internal */
var OP_MISSING_DATA = "MissingData";
/** @internal */
var OP_SOURCE_UNAVAILABLE = "SourceUnavailable";
/** @internal */
var OP_UNSUPPORTED = "Unsupported";
/** @internal */
var ConfigErrorTypeId = /* @__PURE__ */ Symbol.for("effect/ConfigError");
/** @internal */
var proto = {
	_tag: "ConfigError",
	[ConfigErrorTypeId]: ConfigErrorTypeId
};
/** @internal */
var And = (self, that) => {
	const error = Object.create(proto);
	error._op = "And";
	error.left = self;
	error.right = that;
	Object.defineProperty(error, "toString", {
		enumerable: false,
		value() {
			return `${this.left} and ${this.right}`;
		}
	});
	Object.defineProperty(error, "message", {
		enumerable: false,
		get() {
			return this.toString();
		}
	});
	return error;
};
/** @internal */
var Or = (self, that) => {
	const error = Object.create(proto);
	error._op = "Or";
	error.left = self;
	error.right = that;
	Object.defineProperty(error, "toString", {
		enumerable: false,
		value() {
			return `${this.left} or ${this.right}`;
		}
	});
	Object.defineProperty(error, "message", {
		enumerable: false,
		get() {
			return this.toString();
		}
	});
	return error;
};
/** @internal */
var InvalidData = (path, message, options = { pathDelim: "." }) => {
	const error = Object.create(proto);
	error._op = OP_INVALID_DATA;
	error.path = path;
	error.message = message;
	Object.defineProperty(error, "toString", {
		enumerable: false,
		value() {
			return `(Invalid data at ${pipe(this.path, join$1(options.pathDelim))}: "${this.message}")`;
		}
	});
	return error;
};
/** @internal */
var MissingData = (path, message, options = { pathDelim: "." }) => {
	const error = Object.create(proto);
	error._op = OP_MISSING_DATA;
	error.path = path;
	error.message = message;
	Object.defineProperty(error, "toString", {
		enumerable: false,
		value() {
			return `(Missing data at ${pipe(this.path, join$1(options.pathDelim))}: "${this.message}")`;
		}
	});
	return error;
};
/** @internal */
var SourceUnavailable = (path, message, cause, options = { pathDelim: "." }) => {
	const error = Object.create(proto);
	error._op = OP_SOURCE_UNAVAILABLE;
	error.path = path;
	error.message = message;
	error.cause = cause;
	Object.defineProperty(error, "toString", {
		enumerable: false,
		value() {
			return `(Source unavailable at ${pipe(this.path, join$1(options.pathDelim))}: "${this.message}")`;
		}
	});
	return error;
};
/** @internal */
var Unsupported = (path, message, options = { pathDelim: "." }) => {
	const error = Object.create(proto);
	error._op = OP_UNSUPPORTED;
	error.path = path;
	error.message = message;
	Object.defineProperty(error, "toString", {
		enumerable: false,
		value() {
			return `(Unsupported operation at ${pipe(this.path, join$1(options.pathDelim))}: "${this.message}")`;
		}
	});
	return error;
};
/** @internal */
var prefixed = /* @__PURE__ */ dual(2, (self, prefix) => {
	switch (self._op) {
		case "And": return And(prefixed(self.left, prefix), prefixed(self.right, prefix));
		case "Or": return Or(prefixed(self.left, prefix), prefixed(self.right, prefix));
		case OP_INVALID_DATA: return InvalidData([...prefix, ...self.path], self.message);
		case OP_MISSING_DATA: return MissingData([...prefix, ...self.path], self.message);
		case OP_SOURCE_UNAVAILABLE: return SourceUnavailable([...prefix, ...self.path], self.message, self.cause);
		case OP_UNSUPPORTED: return Unsupported([...prefix, ...self.path], self.message);
	}
});
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/configProvider/pathPatch.js
/** @internal */
var empty$4 = { _tag: "Empty" };
/** @internal */
var patch$3 = /* @__PURE__ */ dual(2, (path, patch) => {
	let input = of(patch);
	let output = path;
	while (isCons(input)) {
		const patch = input.head;
		switch (patch._tag) {
			case "Empty":
				input = input.tail;
				break;
			case "AndThen":
				input = cons(patch.first, cons(patch.second, input.tail));
				break;
			case "MapName":
				output = map$4(output, patch.f);
				input = input.tail;
				break;
			case "Nested":
				output = prepend$2(output, patch.name);
				input = input.tail;
				break;
			case "Unnested":
				if (pipe(head(output), contains(patch.name))) {
					output = tailNonEmpty$1(output);
					input = input.tail;
				} else return left(MissingData(output, `Expected ${patch.name} to be in path in ConfigProvider#unnested`));
				break;
		}
	}
	return right(output);
});
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/opCodes/config.js
/** @internal */
var OP_CONSTANT = "Constant";
/** @internal */
var OP_FAIL = "Fail";
/** @internal */
var OP_FALLBACK = "Fallback";
/** @internal */
var OP_DESCRIBED = "Described";
/** @internal */
var OP_LAZY = "Lazy";
/** @internal */
var OP_MAP_OR_FAIL = "MapOrFail";
/** @internal */
var OP_NESTED = "Nested";
/** @internal */
var OP_PRIMITIVE = "Primitive";
/** @internal */
var OP_SEQUENCE = "Sequence";
/** @internal */
var OP_HASHMAP = "HashMap";
/** @internal */
var OP_ZIP_WITH = "ZipWith";
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/configProvider.js
var concat = (l, r) => [...l, ...r];
/** @internal */
var ConfigProviderTypeId = /* @__PURE__ */ Symbol.for("effect/ConfigProvider");
/** @internal */
var configProviderTag = /* @__PURE__ */ GenericTag("effect/ConfigProvider");
/** @internal */
var FlatConfigProviderTypeId = /* @__PURE__ */ Symbol.for("effect/ConfigProviderFlat");
/** @internal */
var make$8 = (options) => ({
	[ConfigProviderTypeId]: ConfigProviderTypeId,
	pipe() {
		return pipeArguments(this, arguments);
	},
	...options
});
/** @internal */
var makeFlat = (options) => ({
	[FlatConfigProviderTypeId]: FlatConfigProviderTypeId,
	patch: options.patch,
	load: (path, config, split = true) => options.load(path, config, split),
	enumerateChildren: options.enumerateChildren
});
/** @internal */
var fromFlat = (flat) => make$8({
	load: (config) => flatMap$2(fromFlatLoop(flat, empty$19(), config, false), (chunk) => match$2(head(chunk), {
		onNone: () => fail$1(MissingData(empty$19(), `Expected a single value having structure: ${config}`)),
		onSome: succeed$1
	})),
	flattened: flat
});
/** @internal */
var fromEnv = (options) => {
	const { pathDelim, seqDelim } = Object.assign({}, {
		pathDelim: "_",
		seqDelim: ","
	}, options);
	const makePathString = (path) => pipe(path, join$1(pathDelim));
	const unmakePathString = (pathString) => pathString.split(pathDelim);
	const getEnv = () => typeof process !== "undefined" && "env" in process && typeof process.env === "object" ? process.env : {};
	const load = (path, primitive, split = true) => {
		const pathString = makePathString(path);
		const current = getEnv();
		return pipe(pathString in current ? some(current[pathString]) : none$4(), mapError(() => MissingData(path, `Expected ${pathString} to exist in the process context`)), flatMap$2((value) => parsePrimitive(value, path, primitive, seqDelim, split)));
	};
	const enumerateChildren = (path) => sync$1(() => {
		const current = getEnv();
		return fromIterable$2(Object.keys(current).map((value) => unmakePathString(value.toUpperCase())).filter((keyPath) => {
			for (let i = 0; i < path.length; i++) {
				const pathComponent = pipe(path, unsafeGet$3(i));
				const currentElement = keyPath[i];
				if (currentElement === void 0 || pathComponent !== currentElement) return false;
			}
			return true;
		}).flatMap((keyPath) => keyPath.slice(path.length, path.length + 1)));
	});
	return fromFlat(makeFlat({
		load,
		enumerateChildren,
		patch: empty$4
	}));
};
var extend = (leftDef, rightDef, left, right) => {
	const leftPad = unfold(left.length, (index) => index >= right.length ? none$4() : some([leftDef(index), index + 1]));
	const rightPad = unfold(right.length, (index) => index >= left.length ? none$4() : some([rightDef(index), index + 1]));
	return [concat(left, leftPad), concat(right, rightPad)];
};
var appendConfigPath = (path, config) => {
	let op = config;
	if (op._tag === "Nested") {
		const out = path.slice();
		while (op._tag === "Nested") {
			out.push(op.name);
			op = op.config;
		}
		return out;
	}
	return path;
};
var fromFlatLoop = (flat, prefix, config, split) => {
	const op = config;
	switch (op._tag) {
		case OP_CONSTANT: return succeed$1(of$2(op.value));
		case OP_DESCRIBED: return suspend(() => fromFlatLoop(flat, prefix, op.config, split));
		case OP_FAIL: return fail$1(MissingData(prefix, op.message));
		case OP_FALLBACK: return pipe(suspend(() => fromFlatLoop(flat, prefix, op.first, split)), catchAll$1((error1) => {
			if (op.condition(error1)) return pipe(fromFlatLoop(flat, prefix, op.second, split), catchAll$1((error2) => fail$1(Or(error1, error2))));
			return fail$1(error1);
		}));
		case OP_LAZY: return suspend(() => fromFlatLoop(flat, prefix, op.config(), split));
		case OP_MAP_OR_FAIL: return suspend(() => pipe(fromFlatLoop(flat, prefix, op.original, split), flatMap$2(forEachSequential((a) => pipe(op.mapOrFail(a), mapError(prefixed(appendConfigPath(prefix, op.original))))))));
		case OP_NESTED: return suspend(() => fromFlatLoop(flat, concat(prefix, of$2(op.name)), op.config, split));
		case OP_PRIMITIVE: return pipe(patch$3(prefix, flat.patch), flatMap$2((prefix) => pipe(flat.load(prefix, op, split), flatMap$2((values) => {
			if (values.length === 0) {
				const name = pipe(last(prefix), getOrElse(() => "<n/a>"));
				return fail$1(MissingData([], `Expected ${op.description} with name ${name}`));
			}
			return succeed$1(values);
		}))));
		case OP_SEQUENCE: return pipe(patch$3(prefix, flat.patch), flatMap$2((patchedPrefix) => pipe(flat.enumerateChildren(patchedPrefix), flatMap$2(indicesFrom), flatMap$2((indices) => {
			if (indices.length === 0) return suspend(() => map$1(fromFlatLoop(flat, prefix, op.config, true), of$2));
			return pipe(forEachSequential(indices, (index) => fromFlatLoop(flat, append$1(prefix, `[${index}]`), op.config, true)), map$1((chunkChunk) => {
				const flattened = flatten$2(chunkChunk);
				if (flattened.length === 0) return of$2(empty$19());
				return of$2(flattened);
			}));
		}))));
		case OP_HASHMAP: return suspend(() => pipe(patch$3(prefix, flat.patch), flatMap$2((prefix) => pipe(flat.enumerateChildren(prefix), flatMap$2((keys) => {
			return pipe(keys, forEachSequential((key) => fromFlatLoop(flat, concat(prefix, of$2(key)), op.valueConfig, split)), map$1((matrix) => {
				if (matrix.length === 0) return of$2(empty$12());
				return pipe(transpose(matrix), map$4((values) => fromIterable$1(zip$1(fromIterable$6(keys), values))));
			}));
		})))));
		case OP_ZIP_WITH: return suspend(() => pipe(fromFlatLoop(flat, prefix, op.left, split), either, flatMap$2((left) => pipe(fromFlatLoop(flat, prefix, op.right, split), either, flatMap$2((right$2) => {
			if (isLeft(left) && isLeft(right$2)) return fail$1(And(left.left, right$2.left));
			if (isLeft(left) && isRight(right$2)) return fail$1(left.left);
			if (isRight(left) && isLeft(right$2)) return fail$1(right$2.left);
			if (isRight(left) && isRight(right$2)) {
				const fail = fromFlatLoopFail(prefix, pipe(prefix, join$1(".")));
				const [lefts, rights] = extend(fail, fail, pipe(left.right, map$4(right)), pipe(right$2.right, map$4(right)));
				return pipe(lefts, zip$1(rights), forEachSequential(([left, right]) => pipe(zip(left, right), map$1(([left, right]) => op.zip(left, right)))));
			}
			throw new Error("BUG: ConfigProvider.fromFlatLoop - please report an issue at https://github.com/Effect-TS/effect/issues");
		})))));
	}
};
var fromFlatLoopFail = (prefix, path) => (index) => left(MissingData(prefix, `The element at index ${index} in a sequence at path "${path}" was missing`));
var splitPathString = (text, delim) => {
	return text.split(new RegExp(`\\s*${escape(delim)}\\s*`));
};
var parsePrimitive = (text, path, primitive, delimiter, split) => {
	if (!split) return pipe(primitive.parse(text), mapBoth({
		onFailure: prefixed(path),
		onSuccess: of$2
	}));
	return pipe(splitPathString(text, delimiter), forEachSequential((char) => primitive.parse(char.trim())), mapError(prefixed(path)));
};
var transpose = (array) => {
	return Object.keys(array[0]).map((column) => array.map((row) => row[column]));
};
var indicesFrom = (quotedIndices) => pipe(forEachSequential(quotedIndices, parseQuotedIndex), mapBoth({
	onFailure: () => empty$19(),
	onSuccess: sort(Order$1)
}), either, map$1(merge$3));
var QUOTED_INDEX_REGEX = /^(\[(\d+)\])$/;
var parseQuotedIndex = (str) => {
	const match = str.match(QUOTED_INDEX_REGEX);
	if (match !== null) {
		const matchedIndex = match[2];
		return pipe(matchedIndex !== void 0 && matchedIndex.length > 0 ? some(matchedIndex) : none$4(), flatMap$4(parseInteger));
	}
	return none$4();
};
var parseInteger = (str) => {
	const parsedIndex = Number.parseInt(str);
	return Number.isNaN(parsedIndex) ? none$4() : some(parsedIndex);
};
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/defaultServices/console.js
/** @internal */
var TypeId$1 = /* @__PURE__ */ Symbol.for("effect/Console");
/** @internal */
var consoleTag = /* @__PURE__ */ GenericTag("effect/Console");
/** @internal */
var defaultConsole = {
	[TypeId$1]: TypeId$1,
	assert(condition, ...args) {
		return sync$1(() => {
			console.assert(condition, ...args);
		});
	},
	clear: /* @__PURE__ */ sync$1(() => {
		console.clear();
	}),
	count(label) {
		return sync$1(() => {
			console.count(label);
		});
	},
	countReset(label) {
		return sync$1(() => {
			console.countReset(label);
		});
	},
	debug(...args) {
		return sync$1(() => {
			console.debug(...args);
		});
	},
	dir(item, options) {
		return sync$1(() => {
			console.dir(item, options);
		});
	},
	dirxml(...args) {
		return sync$1(() => {
			console.dirxml(...args);
		});
	},
	error(...args) {
		return sync$1(() => {
			console.error(...args);
		});
	},
	group(options) {
		return options?.collapsed ? sync$1(() => console.groupCollapsed(options?.label)) : sync$1(() => console.group(options?.label));
	},
	groupEnd: /* @__PURE__ */ sync$1(() => {
		console.groupEnd();
	}),
	info(...args) {
		return sync$1(() => {
			console.info(...args);
		});
	},
	log(...args) {
		return sync$1(() => {
			console.log(...args);
		});
	},
	table(tabularData, properties) {
		return sync$1(() => {
			console.table(tabularData, properties);
		});
	},
	time(label) {
		return sync$1(() => console.time(label));
	},
	timeEnd(label) {
		return sync$1(() => console.timeEnd(label));
	},
	timeLog(label, ...args) {
		return sync$1(() => {
			console.timeLog(label, ...args);
		});
	},
	trace(...args) {
		return sync$1(() => {
			console.trace(...args);
		});
	},
	warn(...args) {
		return sync$1(() => {
			console.warn(...args);
		});
	},
	unsafe: console
};
/** @internal */
var RandomTypeId = /* @__PURE__ */ Symbol.for("effect/Random");
/** @internal */
var randomTag = /* @__PURE__ */ GenericTag("effect/Random");
/** @internal */
var RandomImpl = class {
	constructor(seed) {
		_defineProperty(this, "seed", void 0);
		_defineProperty(this, RandomTypeId, RandomTypeId);
		_defineProperty(this, "PRNG", void 0);
		this.seed = seed;
		this.PRNG = new PCGRandom(seed);
	}
	get next() {
		return sync$1(() => this.PRNG.number());
	}
	get nextBoolean() {
		return map$1(this.next, (n) => n > .5);
	}
	get nextInt() {
		return sync$1(() => this.PRNG.integer(Number.MAX_SAFE_INTEGER));
	}
	nextRange(min, max) {
		return map$1(this.next, (n) => (max - min) * n + min);
	}
	nextIntBetween(min, max) {
		return sync$1(() => this.PRNG.integer(max - min) + min);
	}
	shuffle(elements) {
		return shuffleWith(elements, (n) => this.nextIntBetween(0, n));
	}
};
var shuffleWith = (elements, nextIntBounded) => {
	return suspend(() => pipe(sync$1(() => Array.from(elements)), flatMap$2((buffer) => {
		const numbers = [];
		for (let i = buffer.length; i >= 2; i = i - 1) numbers.push(i);
		return pipe(numbers, forEachSequentialDiscard((n) => pipe(nextIntBounded(n), map$1((k) => swap(buffer, n - 1, k)))), as(fromIterable$5(buffer)));
	})));
};
var swap = (buffer, index1, index2) => {
	const tmp = buffer[index1];
	buffer[index1] = buffer[index2];
	buffer[index2] = tmp;
	return buffer;
};
var make$7 = (seed) => new RandomImpl(hash(seed));
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/tracer.js
/**
* @since 2.0.0
*/
/** @internal */
var TracerTypeId = /* @__PURE__ */ Symbol.for("effect/Tracer");
/** @internal */
var make$6 = (options) => ({
	[TracerTypeId]: TracerTypeId,
	...options
});
/** @internal */
var tracerTag = /* @__PURE__ */ GenericTag("effect/Tracer");
/** @internal */
var spanTag = /* @__PURE__ */ GenericTag("effect/ParentSpan");
var randomHexString = /* @__PURE__ */ function() {
	const characters = "abcdef0123456789";
	const charactersLength = 16;
	return function(length) {
		let result = "";
		for (let i = 0; i < length; i++) result += characters.charAt(Math.floor(Math.random() * charactersLength));
		return result;
	};
}();
/** @internal */
var NativeSpan = class {
	constructor(name, parent, context, links, startTime, kind) {
		_defineProperty(this, "name", void 0);
		_defineProperty(this, "parent", void 0);
		_defineProperty(this, "context", void 0);
		_defineProperty(this, "startTime", void 0);
		_defineProperty(this, "kind", void 0);
		_defineProperty(this, "_tag", "Span");
		_defineProperty(this, "spanId", void 0);
		_defineProperty(this, "traceId", "native");
		_defineProperty(this, "sampled", true);
		_defineProperty(this, "status", void 0);
		_defineProperty(this, "attributes", void 0);
		_defineProperty(this, "events", []);
		_defineProperty(this, "links", void 0);
		this.name = name;
		this.parent = parent;
		this.context = context;
		this.startTime = startTime;
		this.kind = kind;
		this.status = {
			_tag: "Started",
			startTime
		};
		this.attributes = /* @__PURE__ */ new Map();
		this.traceId = parent._tag === "Some" ? parent.value.traceId : randomHexString(32);
		this.spanId = randomHexString(16);
		this.links = Array.from(links);
	}
	end(endTime, exit) {
		this.status = {
			_tag: "Ended",
			endTime,
			exit,
			startTime: this.status.startTime
		};
	}
	attribute(key, value) {
		this.attributes.set(key, value);
	}
	event(name, startTime, attributes) {
		this.events.push([
			name,
			startTime,
			attributes ?? {}
		]);
	}
	addLinks(links) {
		this.links.push(...links);
	}
};
/** @internal */
var nativeTracer = /* @__PURE__ */ make$6({
	span: (name, parent, context, links, startTime, kind) => new NativeSpan(name, parent, context, links, startTime, kind),
	context: (f) => f()
});
/** @internal */
var DisablePropagation = /* @__PURE__ */ Reference()("effect/Tracer/DisablePropagation", { defaultValue: constFalse });
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/defaultServices.js
/** @internal */
var liveServices = /* @__PURE__ */ pipe(/* @__PURE__ */ empty$17(), /* @__PURE__ */ add$2(clockTag, /* @__PURE__ */ make$9()), /* @__PURE__ */ add$2(consoleTag, defaultConsole), /* @__PURE__ */ add$2(randomTag, /* @__PURE__ */ make$7(/* @__PURE__ */ Math.random())), /* @__PURE__ */ add$2(configProviderTag, /* @__PURE__ */ fromEnv()), /* @__PURE__ */ add$2(tracerTag, nativeTracer));
/**
* The `FiberRef` holding the default `Effect` services.
*
* @since 2.0.0
* @category fiberRefs
*/
var currentServices = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/DefaultServices/currentServices"), () => fiberRefUnsafeMakeContext(liveServices));
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/fiberRefs.js
/** @internal */
function unsafeMake$2(fiberRefLocals) {
	return new FiberRefsImpl(fiberRefLocals);
}
/** @internal */
function empty$3() {
	return unsafeMake$2(/* @__PURE__ */ new Map());
}
/** @internal */
var FiberRefsSym = /* @__PURE__ */ Symbol.for("effect/FiberRefs");
/** @internal */
var FiberRefsImpl = class {
	constructor(locals) {
		_defineProperty(this, "locals", void 0);
		_defineProperty(this, FiberRefsSym, FiberRefsSym);
		this.locals = locals;
	}
	pipe() {
		return pipeArguments(this, arguments);
	}
};
/** @internal */
var findAncestor = (_ref, _parentStack, _childStack, _childModified = false) => {
	const ref = _ref;
	let parentStack = _parentStack;
	let childStack = _childStack;
	let childModified = _childModified;
	let ret = void 0;
	while (ret === void 0) if (isNonEmptyReadonlyArray(parentStack) && isNonEmptyReadonlyArray(childStack)) {
		const parentFiberId = headNonEmpty$1(parentStack)[0];
		const parentAncestors = tailNonEmpty$1(parentStack);
		const childFiberId = headNonEmpty$1(childStack)[0];
		const childRefValue = headNonEmpty$1(childStack)[1];
		const childAncestors = tailNonEmpty$1(childStack);
		if (parentFiberId.startTimeMillis < childFiberId.startTimeMillis) {
			childStack = childAncestors;
			childModified = true;
		} else if (parentFiberId.startTimeMillis > childFiberId.startTimeMillis) parentStack = parentAncestors;
		else if (parentFiberId.id < childFiberId.id) {
			childStack = childAncestors;
			childModified = true;
		} else if (parentFiberId.id > childFiberId.id) parentStack = parentAncestors;
		else ret = [childRefValue, childModified];
	} else ret = [ref.initial, true];
	return ret;
};
/** @internal */
var joinAs = /* @__PURE__ */ dual(3, (self, fiberId, that) => {
	const parentFiberRefs = new Map(self.locals);
	that.locals.forEach((childStack, fiberRef) => {
		const childValue = childStack[0][1];
		if (!childStack[0][0][symbol](fiberId)) {
			if (!parentFiberRefs.has(fiberRef)) {
				if (equals$1(childValue, fiberRef.initial)) return;
				parentFiberRefs.set(fiberRef, [[fiberId, fiberRef.join(fiberRef.initial, childValue)]]);
				return;
			}
			const parentStack = parentFiberRefs.get(fiberRef);
			const [ancestor, wasModified] = findAncestor(fiberRef, parentStack, childStack);
			if (wasModified) {
				const patch = fiberRef.diff(ancestor, childValue);
				const oldValue = parentStack[0][1];
				const newValue = fiberRef.join(oldValue, fiberRef.patch(patch)(oldValue));
				if (!equals$1(oldValue, newValue)) {
					let newStack;
					const parentFiberId = parentStack[0][0];
					if (parentFiberId[symbol](fiberId)) newStack = [[parentFiberId, newValue], ...parentStack.slice(1)];
					else newStack = [[fiberId, newValue], ...parentStack];
					parentFiberRefs.set(fiberRef, newStack);
				}
			}
		}
	});
	return new FiberRefsImpl(parentFiberRefs);
});
/** @internal */
var forkAs = /* @__PURE__ */ dual(2, (self, childId) => {
	const map = /* @__PURE__ */ new Map();
	unsafeForkAs(self, map, childId);
	return new FiberRefsImpl(map);
});
var unsafeForkAs = (self, map, fiberId) => {
	self.locals.forEach((stack, fiberRef) => {
		const oldValue = stack[0][1];
		const newValue = fiberRef.patch(fiberRef.fork)(oldValue);
		if (equals$1(oldValue, newValue)) map.set(fiberRef, stack);
		else map.set(fiberRef, [[fiberId, newValue], ...stack]);
	});
};
/** @internal */
var delete_ = /* @__PURE__ */ dual(2, (self, fiberRef) => {
	const locals = new Map(self.locals);
	locals.delete(fiberRef);
	return new FiberRefsImpl(locals);
});
/** @internal */
var get = /* @__PURE__ */ dual(2, (self, fiberRef) => {
	if (!self.locals.has(fiberRef)) return none$4();
	return some(headNonEmpty$1(self.locals.get(fiberRef))[1]);
});
/** @internal */
var getOrDefault$1 = /* @__PURE__ */ dual(2, (self, fiberRef) => pipe(get(self, fiberRef), getOrElse(() => fiberRef.initial)));
/** @internal */
var updateAs = /* @__PURE__ */ dual(2, (self, { fiberId, fiberRef, value }) => {
	if (self.locals.size === 0) return new FiberRefsImpl(new Map([[fiberRef, [[fiberId, value]]]]));
	const locals = new Map(self.locals);
	unsafeUpdateAs(locals, fiberId, fiberRef, value);
	return new FiberRefsImpl(locals);
});
var unsafeUpdateAs = (locals, fiberId, fiberRef, value) => {
	const oldStack = locals.get(fiberRef) ?? [];
	let newStack;
	if (isNonEmptyReadonlyArray(oldStack)) {
		const [currentId, currentValue] = headNonEmpty$1(oldStack);
		if (currentId[symbol](fiberId)) if (equals$1(currentValue, value)) return;
		else newStack = [[fiberId, value], ...oldStack.slice(1)];
		else newStack = [[fiberId, value], ...oldStack];
	} else newStack = [[fiberId, value]];
	locals.set(fiberRef, newStack);
};
/** @internal */
var updateManyAs$1 = /* @__PURE__ */ dual(2, (self, { entries, forkAs }) => {
	if (self.locals.size === 0) return new FiberRefsImpl(new Map(entries));
	const locals = new Map(self.locals);
	if (forkAs !== void 0) unsafeForkAs(self, locals, forkAs);
	entries.forEach(([fiberRef, values]) => {
		if (values.length === 1) unsafeUpdateAs(locals, values[0][0], fiberRef, values[0][1]);
		else values.forEach(([fiberId, value]) => {
			unsafeUpdateAs(locals, fiberId, fiberRef, value);
		});
	});
	return new FiberRefsImpl(locals);
});
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/FiberRefs.js
/**
* Gets the value of the specified `FiberRef` in this collection of `FiberRef`
* values if it exists or the `initial` value of the `FiberRef` otherwise.
*
* @since 2.0.0
* @category getters
*/
var getOrDefault = getOrDefault$1;
/**
* Updates the values of the specified `FiberRef` & value pairs using the provided `FiberId`
*
* @since 2.0.0
* @category utils
*/
var updateManyAs = updateManyAs$1;
/**
* The empty collection of `FiberRef` values.
*
* @category constructors
* @since 2.0.0
*/
var empty$2 = empty$3;
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/LogLevel.js
/**
* @since 2.0.0
* @category constructors
*/
var All = logLevelAll;
/**
* @since 2.0.0
* @category constructors
*/
var Fatal = logLevelFatal;
/**
* @since 2.0.0
* @category constructors
*/
var Error$2 = logLevelError;
/**
* @since 2.0.0
* @category constructors
*/
var Warning = logLevelWarning;
/**
* @since 2.0.0
* @category constructors
*/
var Info = logLevelInfo;
/**
* @since 2.0.0
* @category constructors
*/
var Debug = logLevelDebug;
/**
* @since 2.0.0
* @category constructors
*/
var Trace = logLevelTrace;
/**
* @since 2.0.0
* @category constructors
*/
var None = logLevelNone;
/**
* @since 2.0.0
* @category ordering
*/
var greaterThan = /* @__PURE__ */ greaterThan$1(/* @__PURE__ */ pipe(Order$1, /* @__PURE__ */ mapInput((level) => level.ordinal)));
/**
* @since 2.0.0
* @category conversions
*/
var fromLiteral = (literal) => {
	switch (literal) {
		case "All": return All;
		case "Debug": return Debug;
		case "Error": return Error$2;
		case "Fatal": return Fatal;
		case "Info": return Info;
		case "Trace": return Trace;
		case "None": return None;
		case "Warning": return Warning;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/logSpan.js
/**
* Sanitize a given string by replacing spaces, equal signs, and double quotes with underscores.
*
* @internal
*/
var formatLabel = (key) => key.replace(/[\s="]/g, "_");
/** @internal */
var render = (now) => (self) => {
	return `${formatLabel(self.label)}=${now - self.startTime}ms`;
};
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/Effectable.js
/**
* @since 2.0.0
* @category prototypes
*/
var EffectPrototype = EffectPrototype$1;
var Base = Base$1;
/**
* @since 2.0.0
* @category constructors
*/
var Class = class extends Base {};
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/fiberRefs/patch.js
/** @internal */
var OP_EMPTY$1 = "Empty";
/** @internal */
var OP_REMOVE = "Remove";
/** @internal */
var OP_UPDATE = "Update";
/** @internal */
var OP_AND_THEN$1 = "AndThen";
/** @internal */
var empty$1 = { _tag: OP_EMPTY$1 };
/** @internal */
var diff$2 = (oldValue, newValue) => {
	const missingLocals = new Map(oldValue.locals);
	let patch = empty$1;
	for (const [fiberRef, pairs] of newValue.locals.entries()) {
		const newValue = headNonEmpty$1(pairs)[1];
		const old = missingLocals.get(fiberRef);
		if (old !== void 0) {
			const oldValue = headNonEmpty$1(old)[1];
			if (!equals$1(oldValue, newValue)) patch = combine$1({
				_tag: OP_UPDATE,
				fiberRef,
				patch: fiberRef.diff(oldValue, newValue)
			})(patch);
		} else patch = combine$1({
			_tag: "Add",
			fiberRef,
			value: newValue
		})(patch);
		missingLocals.delete(fiberRef);
	}
	for (const [fiberRef] of missingLocals.entries()) patch = combine$1({
		_tag: OP_REMOVE,
		fiberRef
	})(patch);
	return patch;
};
/** @internal */
var combine$1 = /* @__PURE__ */ dual(2, (self, that) => ({
	_tag: OP_AND_THEN$1,
	first: self,
	second: that
}));
/** @internal */
var patch$2 = /* @__PURE__ */ dual(3, (self, fiberId, oldValue) => {
	let fiberRefs = oldValue;
	let patches = of$2(self);
	while (isNonEmptyReadonlyArray(patches)) {
		const head = headNonEmpty$1(patches);
		const tail = tailNonEmpty$1(patches);
		switch (head._tag) {
			case OP_EMPTY$1:
				patches = tail;
				break;
			case "Add":
				fiberRefs = updateAs(fiberRefs, {
					fiberId,
					fiberRef: head.fiberRef,
					value: head.value
				});
				patches = tail;
				break;
			case OP_REMOVE:
				fiberRefs = delete_(fiberRefs, head.fiberRef);
				patches = tail;
				break;
			case OP_UPDATE: {
				const value = getOrDefault$1(fiberRefs, head.fiberRef);
				fiberRefs = updateAs(fiberRefs, {
					fiberId,
					fiberRef: head.fiberRef,
					value: head.fiberRef.patch(head.patch)(value)
				});
				patches = tail;
				break;
			}
			case OP_AND_THEN$1:
				patches = prepend$2(head.first)(prepend$2(head.second)(tail));
				break;
		}
	}
	return fiberRefs;
});
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/metric/label.js
var _Hash$symbol$5, _Equal$symbol$5;
/** @internal */
var MetricLabelSymbolKey = "effect/MetricLabel";
/** @internal */
var MetricLabelTypeId = /* @__PURE__ */ Symbol.for(MetricLabelSymbolKey);
_Hash$symbol$5 = symbol$1;
_Equal$symbol$5 = symbol;
/** @internal */
var MetricLabelImpl = class {
	constructor(key, value) {
		_defineProperty(this, "key", void 0);
		_defineProperty(this, "value", void 0);
		_defineProperty(this, MetricLabelTypeId, MetricLabelTypeId);
		_defineProperty(this, "_hash", void 0);
		this.key = key;
		this.value = value;
		this._hash = string(MetricLabelSymbolKey + this.key + this.value);
	}
	[_Hash$symbol$5]() {
		return this._hash;
	}
	[_Equal$symbol$5](that) {
		return isMetricLabel(that) && this.key === that.key && this.value === that.value;
	}
	pipe() {
		return pipeArguments(this, arguments);
	}
};
/** @internal */
var make$5 = (key, value) => {
	return new MetricLabelImpl(key, value);
};
/** @internal */
var isMetricLabel = (u) => hasProperty(u, MetricLabelTypeId);
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/core-effect.js
var try_$1 = (arg) => {
	let evaluate;
	let onFailure = void 0;
	if (typeof arg === "function") evaluate = arg;
	else {
		evaluate = arg.try;
		onFailure = arg.catch;
	}
	return suspend(() => {
		try {
			return succeed$1(internalCall(evaluate));
		} catch (error) {
			return fail$1(onFailure ? internalCall(() => onFailure(error)) : new UnknownException(error, "An unknown error occurred in Effect.try"));
		}
	});
};
var filterDisablePropagation = /* @__PURE__ */ flatMap$4((span) => get$5(span.context, DisablePropagation) ? span._tag === "Span" ? filterDisablePropagation(span.parent) : none$4() : some(span));
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/executionStrategy.js
/** @internal */
var OP_SEQUENTIAL = "Sequential";
/** @internal */
var OP_PARALLEL = "Parallel";
/** @internal */
var sequential = { _tag: OP_SEQUENTIAL };
/** @internal */
var isSequential = (self) => self._tag === OP_SEQUENTIAL;
/** @internal */
var isParallel = (self) => self._tag === OP_PARALLEL;
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/FiberRefsPatch.js
/**
* Constructs a patch that describes the changes between the specified
* collections of `FiberRef`
*
* @since 2.0.0
* @category constructors
*/
var diff$1 = diff$2;
/**
* Applies the changes described by this patch to the specified collection
* of `FiberRef` values.
*
* @since 2.0.0
* @category destructors
*/
var patch$1 = patch$2;
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/fiberStatus.js
var _Hash$symbol$4, _Equal$symbol$4, _Hash$symbol2$2, _Equal$symbol2$2, _Hash$symbol3$2, _Equal$symbol3$2;
var FiberStatusSymbolKey = "effect/FiberStatus";
/** @internal */
var FiberStatusTypeId = /* @__PURE__ */ Symbol.for(FiberStatusSymbolKey);
/** @internal */
var OP_DONE = "Done";
/** @internal */
var OP_RUNNING = "Running";
/** @internal */
var OP_SUSPENDED = "Suspended";
var DoneHash = /* @__PURE__ */ string(`${FiberStatusSymbolKey}-${OP_DONE}`);
_Hash$symbol$4 = symbol$1;
_Equal$symbol$4 = symbol;
/** @internal */
var Done = class {
	constructor() {
		_defineProperty(this, FiberStatusTypeId, FiberStatusTypeId);
		_defineProperty(this, "_tag", OP_DONE);
	}
	[_Hash$symbol$4]() {
		return DoneHash;
	}
	[_Equal$symbol$4](that) {
		return isFiberStatus(that) && that._tag === "Done";
	}
};
_Hash$symbol2$2 = symbol$1;
_Equal$symbol2$2 = symbol;
/** @internal */
var Running = class {
	constructor(runtimeFlags) {
		_defineProperty(this, "runtimeFlags", void 0);
		_defineProperty(this, FiberStatusTypeId, FiberStatusTypeId);
		_defineProperty(this, "_tag", OP_RUNNING);
		this.runtimeFlags = runtimeFlags;
	}
	[_Hash$symbol2$2]() {
		return pipe(hash(FiberStatusSymbolKey), combine$5(hash(this._tag)), combine$5(hash(this.runtimeFlags)), cached(this));
	}
	[_Equal$symbol2$2](that) {
		return isFiberStatus(that) && that._tag === "Running" && this.runtimeFlags === that.runtimeFlags;
	}
};
_Hash$symbol3$2 = symbol$1;
_Equal$symbol3$2 = symbol;
/** @internal */
var Suspended = class {
	constructor(runtimeFlags, blockingOn) {
		_defineProperty(this, "runtimeFlags", void 0);
		_defineProperty(this, "blockingOn", void 0);
		_defineProperty(this, FiberStatusTypeId, FiberStatusTypeId);
		_defineProperty(this, "_tag", OP_SUSPENDED);
		this.runtimeFlags = runtimeFlags;
		this.blockingOn = blockingOn;
	}
	[_Hash$symbol3$2]() {
		return pipe(hash(FiberStatusSymbolKey), combine$5(hash(this._tag)), combine$5(hash(this.runtimeFlags)), combine$5(hash(this.blockingOn)), cached(this));
	}
	[_Equal$symbol3$2](that) {
		return isFiberStatus(that) && that._tag === "Suspended" && this.runtimeFlags === that.runtimeFlags && equals$1(this.blockingOn, that.blockingOn);
	}
};
/** @internal */
var done$1 = /* @__PURE__ */ new Done();
/** @internal */
var running$1 = (runtimeFlags) => new Running(runtimeFlags);
/** @internal */
var suspended$1 = (runtimeFlags, blockingOn) => new Suspended(runtimeFlags, blockingOn);
/** @internal */
var isFiberStatus = (u) => hasProperty(u, FiberStatusTypeId);
/** @internal */
var isDone$1 = (self) => self._tag === OP_DONE;
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/FiberStatus.js
/**
* @since 2.0.0
* @category constructors
*/
var done = done$1;
/**
* @since 2.0.0
* @category constructors
*/
var running = running$1;
/**
* @since 2.0.0
* @category constructors
*/
var suspended = suspended$1;
/**
* Returns `true` if the specified `FiberStatus` is `Done`, `false` otherwise.
*
* @since 2.0.0
* @category refinements
*/
var isDone = isDone$1;
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/Micro.js
/**
* @since 3.4.0
* @experimental
* @category type ids
*/
var TypeId = /* @__PURE__ */ Symbol.for("effect/Micro");
/**
* @since 3.4.0
* @experimental
* @category MicroExit
*/
var MicroExitTypeId = /* @__PURE__ */ Symbol.for("effect/Micro/MicroExit");
/**
* @since 3.4.6
* @experimental
* @category MicroCause
*/
var MicroCauseTypeId = /* @__PURE__ */ Symbol.for("effect/Micro/MicroCause");
var microCauseVariance = { _E: identity };
var MicroCauseImpl = class extends globalThis.Error {
	constructor(_tag, originalError, traces) {
		const causeName = `MicroCause.${_tag}`;
		let name;
		let message;
		let stack;
		if (originalError instanceof globalThis.Error) {
			name = `(${causeName}) ${originalError.name}`;
			message = originalError.message;
			const messageLines = message.split("\n").length;
			stack = originalError.stack ? `(${causeName}) ${originalError.stack.split("\n").slice(0, messageLines + 3).join("\n")}` : `${name}: ${message}`;
		} else {
			name = causeName;
			message = toStringUnknown(originalError, 0);
			stack = `${name}: ${message}`;
		}
		if (traces.length > 0) stack += `\n    ${traces.join("\n    ")}`;
		super(message);
		_defineProperty(this, "_tag", void 0);
		_defineProperty(this, "traces", void 0);
		_defineProperty(this, MicroCauseTypeId, void 0);
		this._tag = _tag;
		this.traces = traces;
		this[MicroCauseTypeId] = microCauseVariance;
		this.name = name;
		this.stack = stack;
	}
	pipe() {
		return pipeArguments(this, arguments);
	}
	toString() {
		return this.stack;
	}
	[NodeInspectSymbol]() {
		return this.stack;
	}
};
var Fail = class extends MicroCauseImpl {
	constructor(error, traces = []) {
		super("Fail", error, traces);
		_defineProperty(this, "error", void 0);
		this.error = error;
	}
};
/**
* @since 3.4.6
* @experimental
* @category MicroCause
*/
var causeFail = (error, traces = []) => new Fail(error, traces);
var Die = class extends MicroCauseImpl {
	constructor(defect, traces = []) {
		super("Die", defect, traces);
		_defineProperty(this, "defect", void 0);
		this.defect = defect;
	}
};
/**
* @since 3.4.6
* @experimental
* @category MicroCause
*/
var causeDie = (defect, traces = []) => new Die(defect, traces);
var Interrupt = class extends MicroCauseImpl {
	constructor(traces = []) {
		super("Interrupt", "interrupted", traces);
	}
};
/**
* @since 3.4.6
* @experimental
* @category MicroCause
*/
var causeInterrupt = (traces = []) => new Interrupt(traces);
/**
* @since 3.4.6
* @experimental
* @category MicroCause
*/
var causeIsInterrupt = (self) => self._tag === "Interrupt";
/**
* @since 3.11.0
* @experimental
* @category MicroFiber
*/
var MicroFiberTypeId = /* @__PURE__ */ Symbol.for("effect/Micro/MicroFiber");
var fiberVariance$1 = {
	_A: identity,
	_E: identity
};
var MicroFiberImpl = class {
	constructor(context, interruptible = true) {
		_defineProperty(this, "context", void 0);
		_defineProperty(this, "interruptible", void 0);
		_defineProperty(this, MicroFiberTypeId, void 0);
		_defineProperty(this, "_stack", []);
		_defineProperty(this, "_observers", []);
		_defineProperty(this, "_exit", void 0);
		_defineProperty(this, "_children", void 0);
		_defineProperty(this, "currentOpCount", 0);
		_defineProperty(this, "_interrupted", false);
		_defineProperty(this, "_yielded", void 0);
		this.context = context;
		this.interruptible = interruptible;
		this[MicroFiberTypeId] = fiberVariance$1;
	}
	getRef(ref) {
		return unsafeGetReference(this.context, ref);
	}
	addObserver(cb) {
		if (this._exit) {
			cb(this._exit);
			return constVoid;
		}
		this._observers.push(cb);
		return () => {
			const index = this._observers.indexOf(cb);
			if (index >= 0) this._observers.splice(index, 1);
		};
	}
	unsafeInterrupt() {
		if (this._exit) return;
		this._interrupted = true;
		if (this.interruptible) this.evaluate(exitInterrupt);
	}
	unsafePoll() {
		return this._exit;
	}
	evaluate(effect) {
		if (this._exit) return;
		else if (this._yielded !== void 0) {
			const yielded = this._yielded;
			this._yielded = void 0;
			yielded();
		}
		const exit = this.runLoop(effect);
		if (exit === Yield) return;
		const interruptChildren = fiberMiddleware.interruptChildren && fiberMiddleware.interruptChildren(this);
		if (interruptChildren !== void 0) return this.evaluate(flatMap$1(interruptChildren, () => exit));
		this._exit = exit;
		for (let i = 0; i < this._observers.length; i++) this._observers[i](exit);
		this._observers.length = 0;
	}
	runLoop(effect) {
		let yielding = false;
		let current = effect;
		this.currentOpCount = 0;
		try {
			while (true) {
				this.currentOpCount++;
				if (!yielding && this.getRef(CurrentScheduler).shouldYield(this)) {
					yielding = true;
					const prev = current;
					current = flatMap$1(yieldNow$1, () => prev);
				}
				current = current[evaluate](this);
				if (current === Yield) {
					const yielded = this._yielded;
					if (MicroExitTypeId in yielded) {
						this._yielded = void 0;
						return yielded;
					}
					return Yield;
				}
			}
		} catch (error) {
			if (!hasProperty(current, evaluate)) return exitDie(`MicroFiber.runLoop: Not a valid effect: ${String(current)}`);
			return exitDie(error);
		}
	}
	getCont(symbol) {
		while (true) {
			const op = this._stack.pop();
			if (!op) return void 0;
			const cont = op[ensureCont] && op[ensureCont](this);
			if (cont) return { [symbol]: cont };
			if (op[symbol]) return op;
		}
	}
	yieldWith(value) {
		this._yielded = value;
		return Yield;
	}
	children() {
		return this._children ?? (this._children = /* @__PURE__ */ new Set());
	}
};
var fiberMiddleware = /* @__PURE__ */ globalValue("effect/Micro/fiberMiddleware", () => ({ interruptChildren: void 0 }));
var identifier = /* @__PURE__ */ Symbol.for("effect/Micro/identifier");
var args = /* @__PURE__ */ Symbol.for("effect/Micro/args");
var evaluate = /* @__PURE__ */ Symbol.for("effect/Micro/evaluate");
var successCont = /* @__PURE__ */ Symbol.for("effect/Micro/successCont");
var failureCont = /* @__PURE__ */ Symbol.for("effect/Micro/failureCont");
var ensureCont = /* @__PURE__ */ Symbol.for("effect/Micro/ensureCont");
var Yield = /* @__PURE__ */ Symbol.for("effect/Micro/Yield");
var microVariance = {
	_A: identity,
	_E: identity,
	_R: identity
};
var MicroProto = {
	...EffectPrototype,
	_op: "Micro",
	[TypeId]: microVariance,
	pipe() {
		return pipeArguments(this, arguments);
	},
	[Symbol.iterator]() {
		return new SingleShotGen$1(new YieldWrap(this));
	},
	toJSON() {
		return {
			_id: "Micro",
			op: this[identifier],
			...args in this ? { args: this[args] } : void 0
		};
	},
	toString() {
		return format$2(this);
	},
	[NodeInspectSymbol]() {
		return format$2(this);
	}
};
function defaultEvaluate(_fiber) {
	return exitDie(`Micro.evaluate: Not implemented`);
}
var makePrimitiveProto = (options) => ({
	...MicroProto,
	[identifier]: options.op,
	[evaluate]: options.eval ?? defaultEvaluate,
	[successCont]: options.contA,
	[failureCont]: options.contE,
	[ensureCont]: options.ensure
});
var makePrimitive = (options) => {
	const Proto = makePrimitiveProto(options);
	return function() {
		const self = Object.create(Proto);
		self[args] = options.single === false ? arguments : arguments[0];
		return self;
	};
};
var makeExit = (options) => {
	const Proto = {
		...makePrimitiveProto(options),
		[MicroExitTypeId]: MicroExitTypeId,
		_tag: options.op,
		get [options.prop]() {
			return this[args];
		},
		toJSON() {
			return {
				_id: "MicroExit",
				_tag: options.op,
				[options.prop]: this[args]
			};
		},
		[symbol](that) {
			return isMicroExit(that) && that._tag === options.op && equals$1(this[args], that[args]);
		},
		[symbol$1]() {
			return cached(this, combine$5(string(options.op))(hash(this[args])));
		}
	};
	return function(value) {
		const self = Object.create(Proto);
		self[args] = value;
		self[successCont] = void 0;
		self[failureCont] = void 0;
		self[ensureCont] = void 0;
		return self;
	};
};
/**
* Creates a `Micro` effect that will succeed with the specified constant value.
*
* @since 3.4.0
* @experimental
* @category constructors
*/
var succeed = /* @__PURE__ */ makeExit({
	op: "Success",
	prop: "value",
	eval(fiber) {
		const cont = fiber.getCont(successCont);
		return cont ? cont[successCont](this[args], fiber) : fiber.yieldWith(this);
	}
});
/**
* Creates a `Micro` effect that will fail with the specified `MicroCause`.
*
* @since 3.4.6
* @experimental
* @category constructors
*/
var failCause = /* @__PURE__ */ makeExit({
	op: "Failure",
	prop: "cause",
	eval(fiber) {
		let cont = fiber.getCont(failureCont);
		while (causeIsInterrupt(this[args]) && cont && fiber.interruptible) cont = fiber.getCont(failureCont);
		return cont ? cont[failureCont](this[args], fiber) : fiber.yieldWith(this);
	}
});
/**
* Creates a `Micro` effect that fails with the given error.
*
* This results in a `Fail` variant of the `MicroCause` type, where the error is
* tracked at the type level.
*
* @since 3.4.0
* @experimental
* @category constructors
*/
var fail = (error) => failCause(causeFail(error));
/**
* Pause the execution of the current `Micro` effect, and resume it on the next
* scheduler tick.
*
* @since 3.4.0
* @experimental
* @category constructors
*/
var yieldNow$1 = /* @__PURE__ */ (/* @__PURE__ */ makePrimitive({
	op: "Yield",
	eval(fiber) {
		let resumed = false;
		fiber.getRef(CurrentScheduler).scheduleTask(() => {
			if (resumed) return;
			fiber.evaluate(exitVoid);
		}, this[args] ?? 0);
		return fiber.yieldWith(() => {
			resumed = true;
		});
	}
}))(0);
var void_ = /* @__PURE__ */ succeed(void 0);
/**
* Create a `Micro` effect using the current `MicroFiber`.
*
* @since 3.4.0
* @experimental
* @category constructors
*/
var withMicroFiber = /* @__PURE__ */ makePrimitive({
	op: "WithMicroFiber",
	eval(fiber) {
		return this[args](fiber);
	}
});
/**
* Map the success value of this `Micro` effect to another `Micro` effect, then
* flatten the result.
*
* @since 3.4.0
* @experimental
* @category mapping & sequencing
*/
var flatMap$1 = /* @__PURE__ */ dual(2, (self, f) => {
	const onSuccess = Object.create(OnSuccessProto);
	onSuccess[args] = self;
	onSuccess[successCont] = f;
	return onSuccess;
});
var OnSuccessProto = /* @__PURE__ */ makePrimitiveProto({
	op: "OnSuccess",
	eval(fiber) {
		fiber._stack.push(this);
		return this[args];
	}
});
/**
* @since 3.4.6
* @experimental
* @category MicroExit
*/
var isMicroExit = (u) => hasProperty(u, MicroExitTypeId);
/**
* @since 3.4.6
* @experimental
* @category MicroExit
*/
var exitSucceed = succeed;
/**
* @since 3.4.6
* @experimental
* @category MicroExit
*/
var exitFailCause = failCause;
/**
* @since 3.4.6
* @experimental
* @category MicroExit
*/
var exitInterrupt = /* @__PURE__ */ exitFailCause(/* @__PURE__ */ causeInterrupt());
/**
* @since 3.4.6
* @experimental
* @category MicroExit
*/
var exitDie = (defect) => exitFailCause(causeDie(defect));
/**
* @since 3.4.6
* @experimental
* @category MicroExit
*/
var exitVoid = /* @__PURE__ */ exitSucceed(void 0);
var setImmediate = "setImmediate" in globalThis ? globalThis.setImmediate : (f) => setTimeout(f, 0);
/**
* @since 3.5.9
* @experimental
* @category scheduler
*/
var MicroSchedulerDefault = class {
	constructor() {
		_defineProperty(this, "tasks", []);
		_defineProperty(this, "running", false);
		_defineProperty(
			this,
			/**
			* @since 3.5.9
			*/
			"afterScheduled",
			() => {
				this.running = false;
				this.runTasks();
			}
		);
	}
	/**
	* @since 3.5.9
	*/
	scheduleTask(task, _priority) {
		this.tasks.push(task);
		if (!this.running) {
			this.running = true;
			setImmediate(this.afterScheduled);
		}
	}
	/**
	* @since 3.5.9
	*/
	runTasks() {
		const tasks = this.tasks;
		this.tasks = [];
		for (let i = 0, len = tasks.length; i < len; i++) tasks[i]();
	}
	/**
	* @since 3.5.9
	*/
	shouldYield(fiber) {
		return fiber.currentOpCount >= fiber.getRef(MaxOpsBeforeYield);
	}
	/**
	* @since 3.5.9
	*/
	flush() {
		while (this.tasks.length > 0) this.runTasks();
	}
};
/**
* Update the Context with the given mapping function.
*
* @since 3.11.0
* @experimental
* @category environment
*/
var updateContext = /* @__PURE__ */ dual(2, (self, f) => withMicroFiber((fiber) => {
	const prev = fiber.context;
	fiber.context = f(prev);
	return onExit(self, () => {
		fiber.context = prev;
		return void_;
	});
}));
/**
* Merge the given `Context` with the current context.
*
* @since 3.4.0
* @experimental
* @category environment
*/
var provideContext = /* @__PURE__ */ dual(2, (self, provided) => updateContext(self, merge$1(provided)));
/**
* @since 3.11.0
* @experimental
* @category references
*/
var MaxOpsBeforeYield = class extends Reference()("effect/Micro/currentMaxOpsBeforeYield", { defaultValue: () => 2048 }) {};
Reference()("effect/Micro/currentConcurrency", { defaultValue: () => "unbounded" });
/**
* @since 3.11.0
* @experimental
* @category environment refs
*/
var CurrentScheduler = class extends Reference()("effect/Micro/currentScheduler", { defaultValue: () => new MicroSchedulerDefault() }) {};
/**
* @since 3.4.6
* @experimental
* @category pattern matching
*/
var matchCauseEffect = /* @__PURE__ */ dual(2, (self, options) => {
	const primitive = Object.create(OnSuccessAndFailureProto);
	primitive[args] = self;
	primitive[successCont] = options.onSuccess;
	primitive[failureCont] = options.onFailure;
	return primitive;
});
var OnSuccessAndFailureProto = /* @__PURE__ */ makePrimitiveProto({
	op: "OnSuccessAndFailure",
	eval(fiber) {
		fiber._stack.push(this);
		return this[args];
	}
});
/**
* When the `Micro` effect is completed, run the given finalizer effect with the
* `MicroExit` of the executed effect.
*
* @since 3.4.6
* @experimental
* @category resources & finalization
*/
var onExit = /* @__PURE__ */ dual(2, (self, f) => uninterruptibleMask((restore) => matchCauseEffect(restore(self), {
	onFailure: (cause) => flatMap$1(f(exitFailCause(cause)), () => failCause(cause)),
	onSuccess: (a) => flatMap$1(f(exitSucceed(a)), () => succeed(a))
})));
var setInterruptible = /* @__PURE__ */ makePrimitive({
	op: "SetInterruptible",
	ensure(fiber) {
		fiber.interruptible = this[args];
		if (fiber._interrupted && fiber.interruptible) return () => exitInterrupt;
	}
});
/**
* Flag the effect as interruptible, which means that when the effect is
* interrupted, it will be interrupted immediately.
*
* @since 3.4.0
* @experimental
* @category flags
*/
var interruptible = (self) => withMicroFiber((fiber) => {
	if (fiber.interruptible) return self;
	fiber.interruptible = true;
	fiber._stack.push(setInterruptible(false));
	if (fiber._interrupted) return exitInterrupt;
	return self;
});
/**
* Wrap the given `Micro` effect in an uninterruptible region, preventing the
* effect from being aborted.
*
* You can use the `restore` function to restore a `Micro` effect to the
* interruptibility state before the `uninterruptibleMask` was applied.
*
* @example
* ```ts
* import * as Micro from "effect/Micro"
*
* Micro.uninterruptibleMask((restore) =>
*   Micro.sleep(1000).pipe( // uninterruptible
*     Micro.andThen(restore(Micro.sleep(1000))) // interruptible
*   )
* )
* ```
*
* @since 3.4.0
* @experimental
* @category interruption
*/
var uninterruptibleMask = (f) => withMicroFiber((fiber) => {
	if (!fiber.interruptible) return f(identity);
	fiber.interruptible = false;
	fiber._stack.push(setInterruptible(true));
	return f(interruptible);
});
/**
* Execute the `Micro` effect and return a `MicroFiber` that can be awaited, joined,
* or aborted.
*
* You can listen for the result by adding an observer using the handle's
* `addObserver` method.
*
* @example
* ```ts
* import * as Micro from "effect/Micro"
*
* const handle = Micro.succeed(42).pipe(
*   Micro.delay(1000),
*   Micro.runFork
* )
*
* handle.addObserver((exit) => {
*   console.log(exit)
* })
* ```
*
* @since 3.4.0
* @experimental
* @category execution
*/
var runFork = (effect, options) => {
	const fiber = new MicroFiberImpl(CurrentScheduler.context(options?.scheduler ?? new MicroSchedulerDefault()));
	fiber.evaluate(effect);
	if (options?.signal) if (options.signal.aborted) fiber.unsafeInterrupt();
	else {
		const abort = () => fiber.unsafeInterrupt();
		options.signal.addEventListener("abort", abort, { once: true });
		fiber.addObserver(() => options.signal.removeEventListener("abort", abort));
	}
	return fiber;
};
var YieldableError = /* @__PURE__ */ function() {
	class YieldableError extends globalThis.Error {}
	Object.assign(YieldableError.prototype, MicroProto, StructuralPrototype, {
		[identifier]: "Failure",
		[evaluate]() {
			return fail(this);
		},
		toString() {
			return this.message ? `${this.name}: ${this.message}` : this.name;
		},
		toJSON() {
			return { ...this };
		},
		[NodeInspectSymbol]() {
			const stack = this.stack;
			if (stack) return `${this.toString()}\n${stack.split("\n").slice(1).join("\n")}`;
			return this.toString();
		}
	});
	return YieldableError;
}();
/**
* @since 3.4.0
* @experimental
* @category errors
*/
var Error$1 = /* @__PURE__ */ function() {
	return class extends YieldableError {
		constructor(args) {
			super();
			if (args) Object.assign(this, args);
		}
	};
}();
/**
* @since 3.4.0
* @experimental
* @category errors
*/
var TaggedError = (tag) => {
	class Base extends Error$1 {
		constructor(..._args) {
			super(..._args);
			_defineProperty(this, "_tag", tag);
		}
	}
	Base.prototype.name = tag;
	return Base;
};
TaggedError("NoSuchElementException");
TaggedError("TimeoutException");
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/Scheduler.js
/**
* @since 3.20.0
* @category models
*/
var SchedulerRunner = class SchedulerRunner {
	constructor(scheduleDrain) {
		_defineProperty(this, "scheduleDrain", void 0);
		_defineProperty(this, "running", false);
		_defineProperty(this, "tasks", /* @__PURE__ */ new PriorityBuckets());
		_defineProperty(this, "starveInternal", (depth) => {
			const tasks = this.tasks.buckets;
			this.tasks.buckets = [];
			for (const [_, toRun] of tasks) for (let i = 0; i < toRun.length; i++) toRun[i]();
			if (this.tasks.buckets.length === 0) this.running = false;
			else this.starve(depth);
		});
		this.scheduleDrain = scheduleDrain;
	}
	starve(depth = 0) {
		this.scheduleDrain(depth, this.starveInternal);
	}
	scheduleTask(task, priority) {
		this.tasks.scheduleTask(task, priority);
		if (!this.running) {
			this.running = true;
			this.starve();
		}
	}
	/**
	* @since 3.20.0
	* @category constructors
	*/
	static cached(scheduleDrain) {
		const fallback = new SchedulerRunner(scheduleDrain);
		const runners = /* @__PURE__ */ new WeakMap();
		return (fiber) => {
			if (fiber === void 0) return fallback;
			let runner = runners.get(fiber);
			if (runner === void 0) {
				runner = new SchedulerRunner(scheduleDrain);
				runners.set(fiber, runner);
			}
			return runner;
		};
	}
};
/**
* @since 2.0.0
* @category utils
*/
var PriorityBuckets = class {
	constructor() {
		_defineProperty(
			this,
			/**
			* @since 2.0.0
			*/
			"buckets",
			[]
		);
	}
	/**
	* @since 2.0.0
	*/
	scheduleTask(task, priority) {
		const length = this.buckets.length;
		let bucket = void 0;
		let index = 0;
		for (; index < length; index++) if (this.buckets[index][0] <= priority) bucket = this.buckets[index];
		else break;
		if (bucket && bucket[0] === priority) bucket[1].push(task);
		else if (index === length) this.buckets.push([priority, [task]]);
		else this.buckets.splice(index, 0, [priority, [task]]);
	}
};
/**
* @since 2.0.0
* @category constructors
*/
var MixedScheduler = class {
	constructor(maxNextTickBeforeTimer) {
		_defineProperty(this, "maxNextTickBeforeTimer", void 0);
		_defineProperty(this, "getRunner", /* @__PURE__ */ SchedulerRunner.cached((depth, drain) => {
			if (depth >= this.maxNextTickBeforeTimer) setTimeout(() => drain(0), 0);
			else Promise.resolve(void 0).then(() => drain(depth + 1));
		}));
		this.maxNextTickBeforeTimer = maxNextTickBeforeTimer;
	}
	/**
	* @since 2.0.0
	*/
	shouldYield(fiber) {
		return fiber.currentOpCount > fiber.getFiberRef(currentMaxOpsBeforeYield) ? fiber.getFiberRef(currentSchedulingPriority) : false;
	}
	/**
	* @since 2.0.0
	*/
	scheduleTask(task, priority, fiber) {
		this.getRunner(fiber).scheduleTask(task, priority);
	}
};
/**
* @since 2.0.0
* @category schedulers
*/
var defaultScheduler = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Scheduler/defaultScheduler"), () => new MixedScheduler(2048));
/**
* @since 2.0.0
* @category constructors
*/
var SyncScheduler = class {
	constructor() {
		_defineProperty(
			this,
			/**
			* @since 2.0.0
			*/
			"tasks",
			/* @__PURE__ */ new PriorityBuckets()
		);
		_defineProperty(
			this,
			/**
			* @since 2.0.0
			*/
			"deferred",
			false
		);
	}
	/**
	* @since 2.0.0
	*/
	scheduleTask(task, priority, fiber) {
		if (this.deferred) defaultScheduler.scheduleTask(task, priority, fiber);
		else this.tasks.scheduleTask(task, priority);
	}
	/**
	* @since 2.0.0
	*/
	shouldYield(fiber) {
		return fiber.currentOpCount > fiber.getFiberRef(currentMaxOpsBeforeYield) ? fiber.getFiberRef(currentSchedulingPriority) : false;
	}
	/**
	* @since 2.0.0
	*/
	flush() {
		while (this.tasks.buckets.length > 0) {
			const tasks = this.tasks.buckets;
			this.tasks.buckets = [];
			for (const [_, toRun] of tasks) for (let i = 0; i < toRun.length; i++) toRun[i]();
		}
		this.deferred = true;
	}
};
/** @internal */
var currentScheduler = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentScheduler"), () => fiberRefUnsafeMake(defaultScheduler));
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/completedRequestMap.js
/** @internal */
var currentRequestMap = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentRequestMap"), () => fiberRefUnsafeMake(/* @__PURE__ */ new Map()));
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/fiberMessage.js
/** @internal */
var OP_INTERRUPT_SIGNAL = "InterruptSignal";
/** @internal */
var OP_STATEFUL = "Stateful";
/** @internal */
var OP_RESUME = "Resume";
/** @internal */
var OP_YIELD_NOW = "YieldNow";
/** @internal */
var interruptSignal = (cause) => ({
	_tag: OP_INTERRUPT_SIGNAL,
	cause
});
/** @internal */
var stateful = (onFiber) => ({
	_tag: OP_STATEFUL,
	onFiber
});
/** @internal */
var resume = (effect) => ({
	_tag: OP_RESUME,
	effect
});
/** @internal */
var yieldNow = () => ({ _tag: OP_YIELD_NOW });
/** @internal */
var FiberScopeTypeId = /* @__PURE__ */ Symbol.for("effect/FiberScope");
/** @internal */
var Global = class {
	constructor() {
		_defineProperty(this, FiberScopeTypeId, FiberScopeTypeId);
		_defineProperty(this, "fiberId", none$2);
		_defineProperty(this, "roots", /* @__PURE__ */ new Set());
	}
	add(_runtimeFlags, child) {
		this.roots.add(child);
		child.addObserver(() => {
			this.roots.delete(child);
		});
	}
};
/** @internal */
var Local = class {
	constructor(fiberId, parent) {
		_defineProperty(this, "fiberId", void 0);
		_defineProperty(this, "parent", void 0);
		_defineProperty(this, FiberScopeTypeId, FiberScopeTypeId);
		this.fiberId = fiberId;
		this.parent = parent;
	}
	add(_runtimeFlags, child) {
		this.parent.tell(stateful((parentFiber) => {
			parentFiber.addChild(child);
			child.addObserver(() => {
				parentFiber.removeChild(child);
			});
		}));
	}
};
/** @internal */
var unsafeMake$1 = (fiber) => {
	return new Local(fiber.id(), fiber);
};
/** @internal */
var globalScope = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberScope/Global"), () => new Global());
/** @internal */
var FiberTypeId = /* @__PURE__ */ Symbol.for("effect/Fiber");
/** @internal */
var fiberVariance = {
	/* c8 ignore next */
	_E: (_) => _,
	/* c8 ignore next */
	_A: (_) => _
};
/** @internal */
var fiberProto = {
	[FiberTypeId]: fiberVariance,
	pipe() {
		return pipeArguments(this, arguments);
	}
};
/** @internal */
var RuntimeFiberTypeId = /* @__PURE__ */ Symbol.for("effect/Fiber");
/** @internal */
var join = (self) => zipLeft(flatten(self.await), self.inheritAll);
({ ...CommitPrototype }), { ...fiberProto };
/** @internal */
var currentFiberURI = "effect/FiberCurrent";
/** @internal */
var LoggerTypeId = /* @__PURE__ */ Symbol.for("effect/Logger");
var loggerVariance = {
	/* c8 ignore next */
	_Message: (_) => _,
	/* c8 ignore next */
	_Output: (_) => _
};
/** @internal */
var makeLogger = (log) => ({
	[LoggerTypeId]: loggerVariance,
	log,
	pipe() {
		return pipeArguments(this, arguments);
	}
});
/**
* Match strings that do not contain any whitespace characters, double quotes,
* or equal signs.
*
* @internal
*/
var textOnly = /^[^\s"=]*$/;
/**
* Used by both {@link stringLogger} and {@link logfmtLogger} to render a log
* message.
*
* @internal
*/
var format = (quoteValue, whitespace) => ({ annotations, cause, date, fiberId, logLevel, message, spans }) => {
	const formatValue = (value) => value.match(textOnly) ? value : quoteValue(value);
	const format = (label, value) => `${formatLabel(label)}=${formatValue(value)}`;
	const append = (label, value) => " " + format(label, value);
	let out = format("timestamp", date.toISOString());
	out += append("level", logLevel.label);
	out += append("fiber", threadName$1(fiberId));
	const messages = ensure(message);
	for (let i = 0; i < messages.length; i++) out += append("message", toStringUnknown(messages[i], whitespace));
	if (!isEmptyType(cause)) out += append("cause", pretty(cause, { renderErrorCause: true }));
	for (const span of spans) out += " " + render(date.getTime())(span);
	for (const [label, value] of annotations) out += append(label, toStringUnknown(value, whitespace));
	return out;
};
/** @internal */
var escapeDoubleQuotes = (s) => `"${s.replace(/\\([\s\S])|(")/g, "\\$1$2")}"`;
/** @internal */
var stringLogger = /* @__PURE__ */ makeLogger(/* @__PURE__ */ format(escapeDoubleQuotes));
var colors = {
	bold: "1",
	red: "31",
	green: "32",
	yellow: "33",
	blue: "34",
	cyan: "36",
	white: "37",
	gray: "90",
	black: "30",
	bgBrightRed: "101"
};
colors.gray, colors.blue, colors.green, colors.yellow, colors.red, colors.bgBrightRed, colors.black;
var hasProcessStdout = typeof process === "object" && process !== null && typeof process.stdout === "object" && process.stdout !== null;
hasProcessStdout && process.stdout.isTTY;
hasProcessStdout || "Deno" in globalThis;
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/metric/boundaries.js
var _Hash$symbol$3, _Equal$symbol$3;
/** @internal */
var MetricBoundariesSymbolKey = "effect/MetricBoundaries";
/** @internal */
var MetricBoundariesTypeId = /* @__PURE__ */ Symbol.for(MetricBoundariesSymbolKey);
_Hash$symbol$3 = symbol$1;
_Equal$symbol$3 = symbol;
/** @internal */
var MetricBoundariesImpl = class {
	constructor(values) {
		_defineProperty(this, "values", void 0);
		_defineProperty(this, MetricBoundariesTypeId, MetricBoundariesTypeId);
		_defineProperty(this, "_hash", void 0);
		this.values = values;
		this._hash = pipe(string(MetricBoundariesSymbolKey), combine$5(array(this.values)));
	}
	[_Hash$symbol$3]() {
		return this._hash;
	}
	[_Equal$symbol$3](u) {
		return isMetricBoundaries(u) && equals$1(this.values, u.values);
	}
	pipe() {
		return pipeArguments(this, arguments);
	}
};
/** @internal */
var isMetricBoundaries = (u) => hasProperty(u, MetricBoundariesTypeId);
/** @internal */
var fromIterable = (iterable) => {
	return new MetricBoundariesImpl(pipe(iterable, appendAll$2(of$1(Number.POSITIVE_INFINITY)), dedupe));
};
/** @internal */
var exponential = (options) => pipe(makeBy(options.count - 1, (i) => options.start * Math.pow(options.factor, i)), unsafeFromArray, fromIterable), _Hash$symbol$2, _Equal$symbol$2, _Hash$symbol4$1, _Equal$symbol4$1;
/** @internal */
var MetricKeyTypeTypeId = /* @__PURE__ */ Symbol.for("effect/MetricKeyType");
/** @internal */
var CounterKeyTypeSymbolKey = "effect/MetricKeyType/Counter";
/** @internal */
var CounterKeyTypeTypeId = /* @__PURE__ */ Symbol.for(CounterKeyTypeSymbolKey);
/** @internal */
var FrequencyKeyTypeTypeId = /* @__PURE__ */ Symbol.for("effect/MetricKeyType/Frequency");
/** @internal */
var GaugeKeyTypeTypeId = /* @__PURE__ */ Symbol.for("effect/MetricKeyType/Gauge");
/** @internal */
var HistogramKeyTypeSymbolKey = "effect/MetricKeyType/Histogram";
/** @internal */
var HistogramKeyTypeTypeId = /* @__PURE__ */ Symbol.for(HistogramKeyTypeSymbolKey);
/** @internal */
var SummaryKeyTypeTypeId = /* @__PURE__ */ Symbol.for("effect/MetricKeyType/Summary");
var metricKeyTypeVariance = {
	/* c8 ignore next */
	_In: (_) => _,
	/* c8 ignore next */
	_Out: (_) => _
};
_Hash$symbol$2 = symbol$1;
_Equal$symbol$2 = symbol;
/** @internal */
var CounterKeyType = class {
	constructor(incremental, bigint) {
		_defineProperty(this, "incremental", void 0);
		_defineProperty(this, "bigint", void 0);
		_defineProperty(this, MetricKeyTypeTypeId, metricKeyTypeVariance);
		_defineProperty(this, CounterKeyTypeTypeId, CounterKeyTypeTypeId);
		_defineProperty(this, "_hash", void 0);
		this.incremental = incremental;
		this.bigint = bigint;
		this._hash = string(CounterKeyTypeSymbolKey);
	}
	[_Hash$symbol$2]() {
		return this._hash;
	}
	[_Equal$symbol$2](that) {
		return isCounterKey(that);
	}
	pipe() {
		return pipeArguments(this, arguments);
	}
};
_Hash$symbol4$1 = symbol$1;
_Equal$symbol4$1 = symbol;
/** @internal */
var HistogramKeyType = class {
	constructor(boundaries) {
		_defineProperty(this, "boundaries", void 0);
		_defineProperty(this, MetricKeyTypeTypeId, metricKeyTypeVariance);
		_defineProperty(this, HistogramKeyTypeTypeId, HistogramKeyTypeTypeId);
		_defineProperty(this, "_hash", void 0);
		this.boundaries = boundaries;
		this._hash = pipe(string(HistogramKeyTypeSymbolKey), combine$5(hash(this.boundaries)));
	}
	[_Hash$symbol4$1]() {
		return this._hash;
	}
	[_Equal$symbol4$1](that) {
		return isHistogramKey(that) && equals$1(this.boundaries, that.boundaries);
	}
	pipe() {
		return pipeArguments(this, arguments);
	}
};
/** @internal */
var counter$4 = (options) => new CounterKeyType(options?.incremental ?? false, options?.bigint ?? false);
/** @internal */
var histogram$4 = (boundaries) => {
	return new HistogramKeyType(boundaries);
};
/** @internal */
var isCounterKey = (u) => hasProperty(u, CounterKeyTypeTypeId);
/** @internal */
var isFrequencyKey = (u) => hasProperty(u, FrequencyKeyTypeTypeId);
/** @internal */
var isGaugeKey = (u) => hasProperty(u, GaugeKeyTypeTypeId);
/** @internal */
var isHistogramKey = (u) => hasProperty(u, HistogramKeyTypeTypeId);
/** @internal */
var isSummaryKey = (u) => hasProperty(u, SummaryKeyTypeTypeId);
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/metric/key.js
var _Hash$symbol$1, _Equal$symbol$1;
/** @internal */
var MetricKeyTypeId = /* @__PURE__ */ Symbol.for("effect/MetricKey");
var metricKeyVariance = { 
/* c8 ignore next */
_Type: (_) => _ };
var arrayEquivilence = /* @__PURE__ */ getEquivalence$2(equals$1);
_Hash$symbol$1 = symbol$1;
_Equal$symbol$1 = symbol;
/** @internal */
var MetricKeyImpl = class {
	constructor(name, keyType, description, tags = []) {
		_defineProperty(this, "name", void 0);
		_defineProperty(this, "keyType", void 0);
		_defineProperty(this, "description", void 0);
		_defineProperty(this, "tags", void 0);
		_defineProperty(this, MetricKeyTypeId, metricKeyVariance);
		_defineProperty(this, "_hash", void 0);
		this.name = name;
		this.keyType = keyType;
		this.description = description;
		this.tags = tags;
		this._hash = pipe(string(this.name + this.description), combine$5(hash(this.keyType)), combine$5(array(this.tags)));
	}
	[_Hash$symbol$1]() {
		return this._hash;
	}
	[_Equal$symbol$1](u) {
		return isMetricKey(u) && this.name === u.name && equals$1(this.keyType, u.keyType) && equals$1(this.description, u.description) && arrayEquivilence(this.tags, u.tags);
	}
	pipe() {
		return pipeArguments(this, arguments);
	}
};
/** @internal */
var isMetricKey = (u) => hasProperty(u, MetricKeyTypeId);
/** @internal */
var counter$3 = (name, options) => new MetricKeyImpl(name, counter$4(options), fromNullable(options?.description));
/** @internal */
var histogram$3 = (name, boundaries, description) => new MetricKeyImpl(name, histogram$4(boundaries), fromNullable(description));
/** @internal */
var taggedWithLabels$1 = /* @__PURE__ */ dual(2, (self, extraTags) => extraTags.length === 0 ? self : new MetricKeyImpl(self.name, self.keyType, self.description, union$2(self.tags, extraTags)));
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/metric/state.js
var _Hash$symbol, _Equal$symbol, _Hash$symbol2, _Equal$symbol2, _Hash$symbol3, _Equal$symbol3, _Hash$symbol4, _Equal$symbol4, _Hash$symbol5, _Equal$symbol5;
/** @internal */
var MetricStateTypeId = /* @__PURE__ */ Symbol.for("effect/MetricState");
/** @internal */
var CounterStateSymbolKey = "effect/MetricState/Counter";
/** @internal */
var CounterStateTypeId = /* @__PURE__ */ Symbol.for(CounterStateSymbolKey);
/** @internal */
var FrequencyStateSymbolKey = "effect/MetricState/Frequency";
/** @internal */
var FrequencyStateTypeId = /* @__PURE__ */ Symbol.for(FrequencyStateSymbolKey);
/** @internal */
var GaugeStateSymbolKey = "effect/MetricState/Gauge";
/** @internal */
var GaugeStateTypeId = /* @__PURE__ */ Symbol.for(GaugeStateSymbolKey);
/** @internal */
var HistogramStateSymbolKey = "effect/MetricState/Histogram";
/** @internal */
var HistogramStateTypeId = /* @__PURE__ */ Symbol.for(HistogramStateSymbolKey);
/** @internal */
var SummaryStateSymbolKey = "effect/MetricState/Summary";
/** @internal */
var SummaryStateTypeId = /* @__PURE__ */ Symbol.for(SummaryStateSymbolKey);
var metricStateVariance = { 
/* c8 ignore next */
_A: (_) => _ };
_Hash$symbol = symbol$1;
_Equal$symbol = symbol;
/** @internal */
var CounterState = class {
	constructor(count) {
		_defineProperty(this, "count", void 0);
		_defineProperty(this, MetricStateTypeId, metricStateVariance);
		_defineProperty(this, CounterStateTypeId, CounterStateTypeId);
		this.count = count;
	}
	[_Hash$symbol]() {
		return pipe(hash(CounterStateSymbolKey), combine$5(hash(this.count)), cached(this));
	}
	[_Equal$symbol](that) {
		return isCounterState(that) && this.count === that.count;
	}
	pipe() {
		return pipeArguments(this, arguments);
	}
};
var arrayEquals = /* @__PURE__ */ getEquivalence$2(equals$1);
_Hash$symbol2 = symbol$1;
_Equal$symbol2 = symbol;
/** @internal */
var FrequencyState = class {
	constructor(occurrences) {
		_defineProperty(this, "occurrences", void 0);
		_defineProperty(this, MetricStateTypeId, metricStateVariance);
		_defineProperty(this, FrequencyStateTypeId, FrequencyStateTypeId);
		_defineProperty(this, "_hash", void 0);
		this.occurrences = occurrences;
	}
	[_Hash$symbol2]() {
		return pipe(string(FrequencyStateSymbolKey), combine$5(array(fromIterable$6(this.occurrences.entries()))), cached(this));
	}
	[_Equal$symbol2](that) {
		return isFrequencyState(that) && arrayEquals(fromIterable$6(this.occurrences.entries()), fromIterable$6(that.occurrences.entries()));
	}
	pipe() {
		return pipeArguments(this, arguments);
	}
};
_Hash$symbol3 = symbol$1;
_Equal$symbol3 = symbol;
/** @internal */
var GaugeState = class {
	constructor(value) {
		_defineProperty(this, "value", void 0);
		_defineProperty(this, MetricStateTypeId, metricStateVariance);
		_defineProperty(this, GaugeStateTypeId, GaugeStateTypeId);
		this.value = value;
	}
	[_Hash$symbol3]() {
		return pipe(hash(GaugeStateSymbolKey), combine$5(hash(this.value)), cached(this));
	}
	[_Equal$symbol3](u) {
		return isGaugeState(u) && this.value === u.value;
	}
	pipe() {
		return pipeArguments(this, arguments);
	}
};
_Hash$symbol4 = symbol$1;
_Equal$symbol4 = symbol;
/** @internal */
var HistogramState = class {
	constructor(buckets, count, min, max, sum) {
		_defineProperty(this, "buckets", void 0);
		_defineProperty(this, "count", void 0);
		_defineProperty(this, "min", void 0);
		_defineProperty(this, "max", void 0);
		_defineProperty(this, "sum", void 0);
		_defineProperty(this, MetricStateTypeId, metricStateVariance);
		_defineProperty(this, HistogramStateTypeId, HistogramStateTypeId);
		this.buckets = buckets;
		this.count = count;
		this.min = min;
		this.max = max;
		this.sum = sum;
	}
	[_Hash$symbol4]() {
		return pipe(hash(HistogramStateSymbolKey), combine$5(hash(this.buckets)), combine$5(hash(this.count)), combine$5(hash(this.min)), combine$5(hash(this.max)), combine$5(hash(this.sum)), cached(this));
	}
	[_Equal$symbol4](that) {
		return isHistogramState(that) && equals$1(this.buckets, that.buckets) && this.count === that.count && this.min === that.min && this.max === that.max && this.sum === that.sum;
	}
	pipe() {
		return pipeArguments(this, arguments);
	}
};
_Hash$symbol5 = symbol$1;
_Equal$symbol5 = symbol;
/** @internal */
var SummaryState = class {
	constructor(error, quantiles, count, min, max, sum) {
		_defineProperty(this, "error", void 0);
		_defineProperty(this, "quantiles", void 0);
		_defineProperty(this, "count", void 0);
		_defineProperty(this, "min", void 0);
		_defineProperty(this, "max", void 0);
		_defineProperty(this, "sum", void 0);
		_defineProperty(this, MetricStateTypeId, metricStateVariance);
		_defineProperty(this, SummaryStateTypeId, SummaryStateTypeId);
		this.error = error;
		this.quantiles = quantiles;
		this.count = count;
		this.min = min;
		this.max = max;
		this.sum = sum;
	}
	[_Hash$symbol5]() {
		return pipe(hash(SummaryStateSymbolKey), combine$5(hash(this.error)), combine$5(hash(this.quantiles)), combine$5(hash(this.count)), combine$5(hash(this.min)), combine$5(hash(this.max)), combine$5(hash(this.sum)), cached(this));
	}
	[_Equal$symbol5](that) {
		return isSummaryState(that) && this.error === that.error && equals$1(this.quantiles, that.quantiles) && this.count === that.count && this.min === that.min && this.max === that.max && this.sum === that.sum;
	}
	pipe() {
		return pipeArguments(this, arguments);
	}
};
/** @internal */
var counter$2 = (count) => new CounterState(count);
/** @internal */
var frequency$1 = (occurrences) => {
	return new FrequencyState(occurrences);
};
/** @internal */
var gauge$1 = (count) => new GaugeState(count);
/** @internal */
var histogram$2 = (options) => new HistogramState(options.buckets, options.count, options.min, options.max, options.sum);
/** @internal */
var summary$1 = (options) => new SummaryState(options.error, options.quantiles, options.count, options.min, options.max, options.sum);
/** @internal */
var isCounterState = (u) => hasProperty(u, CounterStateTypeId);
/**
* @since 2.0.0
* @category refinements
*/
var isFrequencyState = (u) => hasProperty(u, FrequencyStateTypeId);
/**
* @since 2.0.0
* @category refinements
*/
var isGaugeState = (u) => hasProperty(u, GaugeStateTypeId);
/**
* @since 2.0.0
* @category refinements
*/
var isHistogramState = (u) => hasProperty(u, HistogramStateTypeId);
/**
* @since 2.0.0
* @category refinements
*/
var isSummaryState = (u) => hasProperty(u, SummaryStateTypeId);
/** @internal */
var MetricHookTypeId = /* @__PURE__ */ Symbol.for("effect/MetricHook");
var metricHookVariance = {
	/* c8 ignore next */
	_In: (_) => _,
	/* c8 ignore next */
	_Out: (_) => _
};
/** @internal */
var make$4 = (options) => ({
	[MetricHookTypeId]: metricHookVariance,
	pipe() {
		return pipeArguments(this, arguments);
	},
	...options
});
var bigint0 = /* @__PURE__ */ BigInt(0);
/** @internal */
var counter$1 = (key) => {
	let sum = key.keyType.bigint ? bigint0 : 0;
	const canUpdate = key.keyType.incremental ? key.keyType.bigint ? (value) => value >= bigint0 : (value) => value >= 0 : (_value) => true;
	const update = (value) => {
		if (canUpdate(value)) sum = sum + value;
	};
	return make$4({
		get: () => counter$2(sum),
		update,
		modify: update
	});
};
/** @internal */
var frequency = (key) => {
	const values = /* @__PURE__ */ new Map();
	for (const word of key.keyType.preregisteredWords) values.set(word, 0);
	const update = (word) => {
		const slotCount = values.get(word) ?? 0;
		values.set(word, slotCount + 1);
	};
	return make$4({
		get: () => frequency$1(values),
		update,
		modify: update
	});
};
/** @internal */
var gauge = (_key, startAt) => {
	let value = startAt;
	return make$4({
		get: () => gauge$1(value),
		update: (v) => {
			value = v;
		},
		modify: (v) => {
			value = value + v;
		}
	});
};
/** @internal */
var histogram$1 = (key) => {
	const bounds = key.keyType.boundaries.values;
	const size = bounds.length;
	const values = new Uint32Array(size + 1);
	const boundaries = new Float64Array(size);
	let count = 0;
	let sum = 0;
	let min = Number.MAX_VALUE;
	let max = Number.MIN_VALUE;
	pipe(bounds, sort(Order$1), map$4((n, i) => {
		boundaries[i] = n;
	}));
	const update = (value) => {
		let from = 0;
		let to = size;
		while (from !== to) {
			const mid = Math.floor(from + (to - from) / 2);
			if (value <= boundaries[mid]) to = mid;
			else from = mid;
			if (to === from + 1) if (value <= boundaries[from]) to = from;
			else from = to;
		}
		values[from] = values[from] + 1;
		count = count + 1;
		sum = sum + value;
		if (value < min) min = value;
		if (value > max) max = value;
	};
	const getBuckets = () => {
		const builder = allocate(size);
		let cumulated = 0;
		for (let i = 0; i < size; i++) {
			const boundary = boundaries[i];
			const value = values[i];
			cumulated = cumulated + value;
			builder[i] = [boundary, cumulated];
		}
		return builder;
	};
	return make$4({
		get: () => histogram$2({
			buckets: getBuckets(),
			count,
			min,
			max,
			sum
		}),
		update,
		modify: update
	});
};
/** @internal */
var summary = (key) => {
	const { error, maxAge, maxSize, quantiles } = key.keyType;
	const sortedQuantiles = pipe(quantiles, sort(Order$1));
	const values = allocate(maxSize);
	let head = 0;
	let count = 0;
	let sum = 0;
	let min = 0;
	let max = 0;
	const snapshot = (now) => {
		const builder = [];
		let i = 0;
		while (i !== maxSize - 1) {
			const item = values[i];
			if (item != null) {
				const [t, v] = item;
				const age = millis(now - t);
				if (greaterThanOrEqualTo(age, zero) && lessThanOrEqualTo(age, maxAge)) builder.push(v);
			}
			i = i + 1;
		}
		return calculateQuantiles(error, sortedQuantiles, sort(builder, Order$1));
	};
	const observe = (value, timestamp) => {
		if (maxSize > 0) {
			head = head + 1;
			const target = head % maxSize;
			values[target] = [timestamp, value];
		}
		min = count === 0 ? value : Math.min(min, value);
		max = count === 0 ? value : Math.max(max, value);
		count = count + 1;
		sum = sum + value;
	};
	return make$4({
		get: () => summary$1({
			error,
			quantiles: snapshot(Date.now()),
			count,
			min,
			max,
			sum
		}),
		update: ([value, timestamp]) => observe(value, timestamp),
		modify: ([value, timestamp]) => observe(value, timestamp)
	});
};
/** @internal */
var calculateQuantiles = (error, sortedQuantiles, sortedSamples) => {
	const sampleCount = sortedSamples.length;
	if (!isNonEmptyReadonlyArray(sortedQuantiles)) return empty$19();
	const head = sortedQuantiles[0];
	const tail = sortedQuantiles.slice(1);
	const resolvedHead = resolveQuantile(error, sampleCount, none$4(), 0, head, sortedSamples);
	const resolved = of$2(resolvedHead);
	tail.forEach((quantile) => {
		resolved.push(resolveQuantile(error, sampleCount, resolvedHead.value, resolvedHead.consumed, quantile, resolvedHead.rest));
	});
	return map$4(resolved, (rq) => [rq.quantile, rq.value]);
};
/** @internal */
var resolveQuantile = (error, sampleCount, current, consumed, quantile, rest) => {
	let error_1 = error;
	let sampleCount_1 = sampleCount;
	let current_1 = current;
	let consumed_1 = consumed;
	let quantile_1 = quantile;
	let rest_1 = rest;
	let error_2 = error;
	let sampleCount_2 = sampleCount;
	let current_2 = current;
	let consumed_2 = consumed;
	let quantile_2 = quantile;
	let rest_2 = rest;
	while (1) {
		if (!isNonEmptyReadonlyArray(rest_1)) return {
			quantile: quantile_1,
			value: none$4(),
			consumed: consumed_1,
			rest: []
		};
		if (quantile_1 === 1) return {
			quantile: quantile_1,
			value: some(lastNonEmpty(rest_1)),
			consumed: consumed_1 + rest_1.length,
			rest: []
		};
		const headValue = headNonEmpty$1(rest_1);
		const sameHead = span(rest_1, (n) => n === headValue);
		const desired = quantile_1 * sampleCount_1;
		const allowedError = error_1 / 2 * desired;
		const candConsumed = consumed_1 + sameHead[0].length;
		const candError = Math.abs(candConsumed - desired);
		if (candConsumed < desired - allowedError) {
			error_2 = error_1;
			sampleCount_2 = sampleCount_1;
			current_2 = head(rest_1);
			consumed_2 = candConsumed;
			quantile_2 = quantile_1;
			rest_2 = sameHead[1];
			error_1 = error_2;
			sampleCount_1 = sampleCount_2;
			current_1 = current_2;
			consumed_1 = consumed_2;
			quantile_1 = quantile_2;
			rest_1 = rest_2;
			continue;
		}
		if (candConsumed > desired + allowedError) {
			const valueToReturn = isNone(current_1) ? some(headValue) : current_1;
			return {
				quantile: quantile_1,
				value: valueToReturn,
				consumed: consumed_1,
				rest: rest_1
			};
		}
		switch (current_1._tag) {
			case "None":
				error_2 = error_1;
				sampleCount_2 = sampleCount_1;
				current_2 = head(rest_1);
				consumed_2 = candConsumed;
				quantile_2 = quantile_1;
				rest_2 = sameHead[1];
				error_1 = error_2;
				sampleCount_1 = sampleCount_2;
				current_1 = current_2;
				consumed_1 = consumed_2;
				quantile_1 = quantile_2;
				rest_1 = rest_2;
				continue;
			case "Some":
				if (candError < Math.abs(desired - current_1.value)) {
					error_2 = error_1;
					sampleCount_2 = sampleCount_1;
					current_2 = head(rest_1);
					consumed_2 = candConsumed;
					quantile_2 = quantile_1;
					rest_2 = sameHead[1];
					error_1 = error_2;
					sampleCount_1 = sampleCount_2;
					current_1 = current_2;
					consumed_1 = consumed_2;
					quantile_1 = quantile_2;
					rest_1 = rest_2;
					continue;
				}
				return {
					quantile: quantile_1,
					value: some(current_1.value),
					consumed: consumed_1,
					rest: rest_1
				};
		}
	}
	throw new Error("BUG: MetricHook.resolveQuantiles - please report an issue at https://github.com/Effect-TS/effect/issues");
};
/** @internal */
var MetricPairTypeId = /* @__PURE__ */ Symbol.for("effect/MetricPair");
var metricPairVariance = { 
/* c8 ignore next */
_Type: (_) => _ };
/** @internal */
var unsafeMake = (metricKey, metricState) => {
	return {
		[MetricPairTypeId]: metricPairVariance,
		metricKey,
		metricState,
		pipe() {
			return pipeArguments(this, arguments);
		}
	};
};
/** @internal */
var MetricRegistryTypeId = /* @__PURE__ */ Symbol.for("effect/MetricRegistry");
/** @internal */
var MetricRegistryImpl = class {
	constructor() {
		_defineProperty(this, MetricRegistryTypeId, MetricRegistryTypeId);
		_defineProperty(this, "map", /* @__PURE__ */ empty$5());
	}
	snapshot() {
		const result = [];
		for (const [key, hook] of this.map) result.push(unsafeMake(key, hook.get()));
		return result;
	}
	get(key) {
		const hook = pipe(this.map, get$1(key), getOrUndefined);
		if (hook == null) {
			if (isCounterKey(key.keyType)) return this.getCounter(key);
			if (isGaugeKey(key.keyType)) return this.getGauge(key);
			if (isFrequencyKey(key.keyType)) return this.getFrequency(key);
			if (isHistogramKey(key.keyType)) return this.getHistogram(key);
			if (isSummaryKey(key.keyType)) return this.getSummary(key);
			throw new Error("BUG: MetricRegistry.get - unknown MetricKeyType - please report an issue at https://github.com/Effect-TS/effect/issues");
		} else return hook;
	}
	getCounter(key) {
		let value = pipe(this.map, get$1(key), getOrUndefined);
		if (value == null) {
			const counter = counter$1(key);
			if (!pipe(this.map, has(key))) pipe(this.map, set(key, counter));
			value = counter;
		}
		return value;
	}
	getFrequency(key) {
		let value = pipe(this.map, get$1(key), getOrUndefined);
		if (value == null) {
			const frequency$2 = frequency(key);
			if (!pipe(this.map, has(key))) pipe(this.map, set(key, frequency$2));
			value = frequency$2;
		}
		return value;
	}
	getGauge(key) {
		let value = pipe(this.map, get$1(key), getOrUndefined);
		if (value == null) {
			const gauge$2 = gauge(key, key.keyType.bigint ? BigInt(0) : 0);
			if (!pipe(this.map, has(key))) pipe(this.map, set(key, gauge$2));
			value = gauge$2;
		}
		return value;
	}
	getHistogram(key) {
		let value = pipe(this.map, get$1(key), getOrUndefined);
		if (value == null) {
			const histogram = histogram$1(key);
			if (!pipe(this.map, has(key))) pipe(this.map, set(key, histogram));
			value = histogram;
		}
		return value;
	}
	getSummary(key) {
		let value = pipe(this.map, get$1(key), getOrUndefined);
		if (value == null) {
			const summary$2 = summary(key);
			if (!pipe(this.map, has(key))) pipe(this.map, set(key, summary$2));
			value = summary$2;
		}
		return value;
	}
};
/** @internal */
var make$3 = () => {
	return new MetricRegistryImpl();
};
/** @internal */
var MetricTypeId = /* @__PURE__ */ Symbol.for("effect/Metric");
var metricVariance = {
	/* c8 ignore next */
	_Type: (_) => _,
	/* c8 ignore next */
	_In: (_) => _,
	/* c8 ignore next */
	_Out: (_) => _
};
/** @internal */
var globalMetricRegistry = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Metric/globalMetricRegistry"), () => make$3());
/** @internal */
var make$2 = function(keyType, unsafeUpdate, unsafeValue, unsafeModify) {
	const metric = Object.assign((effect) => tap(effect, (a) => update(metric, a)), {
		[MetricTypeId]: metricVariance,
		keyType,
		unsafeUpdate,
		unsafeValue,
		unsafeModify,
		register() {
			this.unsafeValue([]);
			return this;
		},
		pipe() {
			return pipeArguments(this, arguments);
		}
	});
	return metric;
};
/** @internal */
var counter = (name, options) => fromMetricKey(counter$3(name, options));
/** @internal */
var fromMetricKey = (key) => {
	let untaggedHook;
	const hookCache = /* @__PURE__ */ new WeakMap();
	const hook = (extraTags) => {
		if (extraTags.length === 0) {
			if (untaggedHook !== void 0) return untaggedHook;
			untaggedHook = globalMetricRegistry.get(key);
			return untaggedHook;
		}
		let hook = hookCache.get(extraTags);
		if (hook !== void 0) return hook;
		hook = globalMetricRegistry.get(taggedWithLabels$1(key, extraTags));
		hookCache.set(extraTags, hook);
		return hook;
	};
	return make$2(key.keyType, (input, extraTags) => hook(extraTags).update(input), (extraTags) => hook(extraTags).get(), (input, extraTags) => hook(extraTags).modify(input));
};
/** @internal */
var histogram = (name, boundaries, description) => fromMetricKey(histogram$3(name, boundaries, description));
/** @internal */
var tagged = /* @__PURE__ */ dual(3, (self, key, value) => taggedWithLabels(self, [make$5(key, value)]));
/** @internal */
var taggedWithLabels = /* @__PURE__ */ dual(2, (self, extraTags) => {
	return make$2(self.keyType, (input, extraTags1) => self.unsafeUpdate(input, union$2(extraTags, extraTags1)), (extraTags1) => self.unsafeValue(union$2(extraTags, extraTags1)), (input, extraTags1) => self.unsafeModify(input, union$2(extraTags, extraTags1)));
});
var update = /* @__PURE__ */ dual(2, (self, input) => fiberRefGetWith(currentMetricLabels, (tags) => sync$1(() => self.unsafeUpdate(input, tags))));
({ ...StructuralPrototype });
/** @internal */
var complete = /* @__PURE__ */ dual(2, (self, result) => fiberRefGetWith(currentRequestMap, (map) => sync$1(() => {
	if (map.has(self)) {
		const entry = map.get(self);
		if (!entry.state.completed) {
			entry.state.completed = true;
			deferredUnsafeDone(entry.result, result);
		}
	}
})));
/** @internal */
var SupervisorTypeId = /* @__PURE__ */ Symbol.for("effect/Supervisor");
/** @internal */
var supervisorVariance = { 
/* c8 ignore next */
_T: (_) => _ };
/** @internal */
var ProxySupervisor = class ProxySupervisor {
	constructor(underlying, value0) {
		_defineProperty(this, "underlying", void 0);
		_defineProperty(this, "value0", void 0);
		_defineProperty(this, SupervisorTypeId, supervisorVariance);
		this.underlying = underlying;
		this.value0 = value0;
	}
	get value() {
		return this.value0;
	}
	onStart(context, effect, parent, fiber) {
		this.underlying.onStart(context, effect, parent, fiber);
	}
	onEnd(value, fiber) {
		this.underlying.onEnd(value, fiber);
	}
	onEffect(fiber, effect) {
		this.underlying.onEffect(fiber, effect);
	}
	onSuspend(fiber) {
		this.underlying.onSuspend(fiber);
	}
	onResume(fiber) {
		this.underlying.onResume(fiber);
	}
	map(f) {
		return new ProxySupervisor(this, pipe(this.value, map$1(f)));
	}
	zip(right) {
		return new Zip(this, right);
	}
};
/** @internal */
var Zip = class Zip {
	constructor(left, right) {
		_defineProperty(this, "left", void 0);
		_defineProperty(this, "right", void 0);
		_defineProperty(this, "_tag", "Zip");
		_defineProperty(this, SupervisorTypeId, supervisorVariance);
		this.left = left;
		this.right = right;
	}
	get value() {
		return zip(this.left.value, this.right.value);
	}
	onStart(context, effect, parent, fiber) {
		this.left.onStart(context, effect, parent, fiber);
		this.right.onStart(context, effect, parent, fiber);
	}
	onEnd(value, fiber) {
		this.left.onEnd(value, fiber);
		this.right.onEnd(value, fiber);
	}
	onEffect(fiber, effect) {
		this.left.onEffect(fiber, effect);
		this.right.onEffect(fiber, effect);
	}
	onSuspend(fiber) {
		this.left.onSuspend(fiber);
		this.right.onSuspend(fiber);
	}
	onResume(fiber) {
		this.left.onResume(fiber);
		this.right.onResume(fiber);
	}
	map(f) {
		return new ProxySupervisor(this, pipe(this.value, map$1(f)));
	}
	zip(right) {
		return new Zip(this, right);
	}
};
/** @internal */
var isZip = (self) => hasProperty(self, SupervisorTypeId) && isTagged(self, "Zip");
/** @internal */
var Const = class {
	constructor(effect) {
		_defineProperty(this, "effect", void 0);
		_defineProperty(this, SupervisorTypeId, supervisorVariance);
		this.effect = effect;
	}
	get value() {
		return this.effect;
	}
	onStart(_context, _effect, _parent, _fiber) {}
	onEnd(_value, _fiber) {}
	onEffect(_fiber, _effect) {}
	onSuspend(_fiber) {}
	onResume(_fiber) {}
	map(f) {
		return new ProxySupervisor(this, pipe(this.value, map$1(f)));
	}
	zip(right) {
		return new Zip(this, right);
	}
	onRun(execution, _fiber) {
		return execution();
	}
};
/** @internal */
var fromEffect = (effect) => {
	return new Const(effect);
};
/** @internal */
var none = /* @__PURE__ */ globalValue("effect/Supervisor/none", () => fromEffect(void_$1));
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/Differ.js
/**
* Constructs a new `Differ`.
*
* @since 2.0.0
* @category constructors
*/
var make$1 = make$12;
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/supervisor/patch.js
/** @internal */
var OP_EMPTY = "Empty";
/** @internal */
var OP_ADD_SUPERVISOR = "AddSupervisor";
/** @internal */
var OP_REMOVE_SUPERVISOR = "RemoveSupervisor";
/** @internal */
var OP_AND_THEN = "AndThen";
/**
* The empty `SupervisorPatch`.
*
* @internal
*/
var empty = { _tag: OP_EMPTY };
/**
* Combines two patches to produce a new patch that describes applying the
* updates from this patch and then the updates from the specified patch.
*
* @internal
*/
var combine = (self, that) => {
	return {
		_tag: OP_AND_THEN,
		first: self,
		second: that
	};
};
/**
* Applies a `SupervisorPatch` to a `Supervisor` to produce a new `Supervisor`.
*
* @internal
*/
var patch = (self, supervisor) => {
	return patchLoop(supervisor, of$1(self));
};
/** @internal */
var patchLoop = (_supervisor, _patches) => {
	let supervisor = _supervisor;
	let patches = _patches;
	while (isNonEmpty(patches)) {
		const head = headNonEmpty(patches);
		switch (head._tag) {
			case OP_EMPTY:
				patches = tailNonEmpty(patches);
				break;
			case OP_ADD_SUPERVISOR:
				supervisor = supervisor.zip(head.supervisor);
				patches = tailNonEmpty(patches);
				break;
			case OP_REMOVE_SUPERVISOR:
				supervisor = removeSupervisor(supervisor, head.supervisor);
				patches = tailNonEmpty(patches);
				break;
			case OP_AND_THEN:
				patches = prepend$1(head.first)(prepend$1(head.second)(tailNonEmpty(patches)));
				break;
		}
	}
	return supervisor;
};
/** @internal */
var removeSupervisor = (self, that) => {
	if (equals$1(self, that)) return none;
	else if (isZip(self)) return removeSupervisor(self.left, that).zip(removeSupervisor(self.right, that));
	else return self;
};
/** @internal */
var toSet = (self) => {
	if (equals$1(self, none)) return empty$13();
	else if (isZip(self)) return pipe(toSet(self.left), union(toSet(self.right)));
	else return make$14(self);
};
/** @internal */
var diff = (oldValue, newValue) => {
	if (equals$1(oldValue, newValue)) return empty;
	const oldSupervisors = toSet(oldValue);
	const newSupervisors = toSet(newValue);
	return combine(pipe(newSupervisors, difference(oldSupervisors), reduce$3(empty, (patch, supervisor) => combine(patch, {
		_tag: OP_ADD_SUPERVISOR,
		supervisor
	}))), pipe(oldSupervisors, difference(newSupervisors), reduce$3(empty, (patch, supervisor) => combine(patch, {
		_tag: OP_REMOVE_SUPERVISOR,
		supervisor
	}))));
};
/** @internal */
var differ = /* @__PURE__ */ make$1({
	empty,
	patch,
	combine,
	diff
});
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/fiberRuntime.js
var _internalFiber$FiberT, _internalFiber$Runtim, _OpCodes$OP_TAG, _OpCodes$OP_SYNC, _OpCodes$OP_SUCCESS, _OpCodes$OP_FAILURE, _OpCodes$OP_WITH_RUNT, _OpCodes$OP_UPDATE_RU, _OpCodes$OP_ON_SUCCES, _OpCodes$OP_ON_FAILUR, _OpCodes$OP_ON_SUCCES2, _OpCodes$OP_ASYNC, _OpCodes$OP_YIELD, _OpCodes$OP_WHILE, _OpCodes$OP_ITERATOR, _OpCodes$OP_COMMIT;
/** @internal */
var fiberStarted = /* @__PURE__ */ counter("effect_fiber_started", { incremental: true });
/** @internal */
var fiberActive = /* @__PURE__ */ counter("effect_fiber_active");
/** @internal */
var fiberSuccesses = /* @__PURE__ */ counter("effect_fiber_successes", { incremental: true });
/** @internal */
var fiberFailures = /* @__PURE__ */ counter("effect_fiber_failures", { incremental: true });
/** @internal */
var fiberLifetimes = /* @__PURE__ */ tagged(/* @__PURE__ */ histogram("effect_fiber_lifetimes", /* @__PURE__ */ exponential({
	start: .5,
	factor: 2,
	count: 35
})), "time_unit", "milliseconds");
/** @internal */
var EvaluationSignalContinue = "Continue";
/** @internal */
var EvaluationSignalDone = "Done";
/** @internal */
var EvaluationSignalYieldNow = "Yield";
var runtimeFiberVariance = {
	/* c8 ignore next */
	_E: (_) => _,
	/* c8 ignore next */
	_A: (_) => _
};
var absurd = (_) => {
	throw new Error(`BUG: FiberRuntime - ${toStringUnknown(_)} - please report an issue at https://github.com/Effect-TS/effect/issues`);
};
var YieldedOp = /* @__PURE__ */ Symbol.for("effect/internal/fiberRuntime/YieldedOp");
var yieldedOpChannel = /* @__PURE__ */ globalValue("effect/internal/fiberRuntime/yieldedOpChannel", () => ({ currentOp: null }));
var contOpSuccess = {
	[OP_ON_SUCCESS]: (_, cont, value) => {
		return internalCall(() => cont.effect_instruction_i1(value));
	},
	["OnStep"]: (_, _cont, value) => {
		return exitSucceed$1(exitSucceed$1(value));
	},
	[OP_ON_SUCCESS_AND_FAILURE]: (_, cont, value) => {
		return internalCall(() => cont.effect_instruction_i2(value));
	},
	[OP_REVERT_FLAGS]: (self, cont, value) => {
		self.patchRuntimeFlags(self.currentRuntimeFlags, cont.patch);
		if (interruptible$2(self.currentRuntimeFlags) && self.isInterrupted()) return exitFailCause$1(self.getInterruptedCause());
		else return exitSucceed$1(value);
	},
	[OP_WHILE]: (self, cont, value) => {
		internalCall(() => cont.effect_instruction_i2(value));
		if (internalCall(() => cont.effect_instruction_i0())) {
			self.pushStack(cont);
			return internalCall(() => cont.effect_instruction_i1());
		} else return void_$1;
	},
	[OP_ITERATOR]: (self, cont, value) => {
		while (true) {
			const state = internalCall(() => cont.effect_instruction_i0.next(value));
			if (state.done) return exitSucceed$1(state.value);
			const primitive = yieldWrapGet(state.value);
			if (!exitIsExit(primitive)) {
				self.pushStack(cont);
				return primitive;
			} else if (primitive._tag === "Failure") return primitive;
			value = primitive.value;
		}
	}
};
var drainQueueWhileRunningTable = {
	[OP_INTERRUPT_SIGNAL]: (self, runtimeFlags, cur, message) => {
		self.processNewInterruptSignal(message.cause);
		return interruptible$2(runtimeFlags) ? exitFailCause$1(message.cause) : cur;
	},
	[OP_RESUME]: (_self, _runtimeFlags, _cur, _message) => {
		throw new Error("It is illegal to have multiple concurrent run loops in a single fiber");
	},
	[OP_STATEFUL]: (self, runtimeFlags, cur, message) => {
		message.onFiber(self, running(runtimeFlags));
		return cur;
	},
	[OP_YIELD_NOW]: (_self, _runtimeFlags, cur, _message) => {
		return flatMap$2(yieldNow$2(), () => cur);
	}
};
/**
* Executes all requests, submitting requests to each data source in parallel.
*/
var runBlockedRequests = (self) => forEachSequentialDiscard(flatten$1(self), (requestsByRequestResolver) => forEachConcurrentDiscard(sequentialCollectionToChunk(requestsByRequestResolver), ([dataSource, sequential]) => {
	const map = /* @__PURE__ */ new Map();
	const arr = [];
	for (const block of sequential) {
		arr.push(toReadonlyArray(block));
		for (const entry of block) map.set(entry.request, entry);
	}
	const flat = arr.flat();
	return fiberRefLocally(invokeWithInterrupt(dataSource.runAll(arr), flat, () => flat.forEach((entry) => {
		entry.listeners.interrupted = true;
	})), currentRequestMap, map);
}, false, false));
var _version = /* @__PURE__ */ getCurrentVersion();
_internalFiber$FiberT = FiberTypeId;
_internalFiber$Runtim = RuntimeFiberTypeId;
_OpCodes$OP_TAG = "Tag";
_OpCodes$OP_SYNC = OP_SYNC;
_OpCodes$OP_SUCCESS = OP_SUCCESS;
_OpCodes$OP_FAILURE = OP_FAILURE;
_OpCodes$OP_WITH_RUNT = OP_WITH_RUNTIME;
_OpCodes$OP_UPDATE_RU = OP_UPDATE_RUNTIME_FLAGS;
_OpCodes$OP_ON_SUCCES = OP_ON_SUCCESS;
_OpCodes$OP_ON_FAILUR = OP_ON_FAILURE;
_OpCodes$OP_ON_SUCCES2 = OP_ON_SUCCESS_AND_FAILURE;
_OpCodes$OP_ASYNC = OP_ASYNC;
_OpCodes$OP_YIELD = OP_YIELD;
_OpCodes$OP_WHILE = OP_WHILE;
_OpCodes$OP_ITERATOR = OP_ITERATOR;
_OpCodes$OP_COMMIT = OP_COMMIT;
/** @internal */
var FiberRuntime = class extends Class {
	constructor(fiberId, fiberRefs0, runtimeFlags0) {
		super();
		_defineProperty(this, _internalFiber$FiberT, fiberVariance);
		_defineProperty(this, _internalFiber$Runtim, runtimeFiberVariance);
		_defineProperty(this, "_fiberRefs", void 0);
		_defineProperty(this, "_fiberId", void 0);
		_defineProperty(this, "_queue", /* @__PURE__ */ new Array());
		_defineProperty(this, "_children", null);
		_defineProperty(this, "_observers", /* @__PURE__ */ new Array());
		_defineProperty(this, "_running", false);
		_defineProperty(this, "_stack", []);
		_defineProperty(this, "_asyncInterruptor", null);
		_defineProperty(this, "_asyncBlockingOn", null);
		_defineProperty(this, "_exitValue", null);
		_defineProperty(this, "_steps", []);
		_defineProperty(this, "_isYielding", false);
		_defineProperty(this, "currentRuntimeFlags", void 0);
		_defineProperty(this, "currentOpCount", 0);
		_defineProperty(this, "currentSupervisor", void 0);
		_defineProperty(this, "currentScheduler", void 0);
		_defineProperty(this, "currentTracer", void 0);
		_defineProperty(this, "currentSpan", void 0);
		_defineProperty(this, "currentContext", void 0);
		_defineProperty(this, "currentDefaultServices", void 0);
		_defineProperty(this, "run", () => {
			this.drainQueueOnCurrentThread();
		});
		this.currentRuntimeFlags = runtimeFlags0;
		this._fiberId = fiberId;
		this._fiberRefs = fiberRefs0;
		if (runtimeMetrics(runtimeFlags0)) {
			const tags = this.getFiberRef(currentMetricLabels);
			fiberStarted.unsafeUpdate(1, tags);
			fiberActive.unsafeUpdate(1, tags);
		}
		this.refreshRefCache();
	}
	commit() {
		return join(this);
	}
	/**
	* The identity of the fiber.
	*/
	id() {
		return this._fiberId;
	}
	/**
	* Begins execution of the effect associated with this fiber on in the
	* background. This can be called to "kick off" execution of a fiber after
	* it has been created.
	*/
	resume(effect) {
		this.tell(resume(effect));
	}
	/**
	* The status of the fiber.
	*/
	get status() {
		return this.ask((_, status) => status);
	}
	/**
	* Gets the fiber runtime flags.
	*/
	get runtimeFlags() {
		return this.ask((state, status) => {
			if (isDone(status)) return state.currentRuntimeFlags;
			return status.runtimeFlags;
		});
	}
	/**
	* Returns the current `FiberScope` for the fiber.
	*/
	scope() {
		return unsafeMake$1(this);
	}
	/**
	* Retrieves the immediate children of the fiber.
	*/
	get children() {
		return this.ask((fiber) => Array.from(fiber.getChildren()));
	}
	/**
	* Gets the fiber's set of children.
	*/
	getChildren() {
		if (this._children === null) this._children = /* @__PURE__ */ new Set();
		return this._children;
	}
	/**
	* Retrieves the interrupted cause of the fiber, which will be `Cause.empty`
	* if the fiber has not been interrupted.
	*
	* **NOTE**: This method is safe to invoke on any fiber, but if not invoked
	* on this fiber, then values derived from the fiber's state (including the
	* log annotations and log level) may not be up-to-date.
	*/
	getInterruptedCause() {
		return this.getFiberRef(currentInterruptedCause);
	}
	/**
	* Retrieves the whole set of fiber refs.
	*/
	fiberRefs() {
		return this.ask((fiber) => fiber.getFiberRefs());
	}
	/**
	* Returns an effect that will contain information computed from the fiber
	* state and status while running on the fiber.
	*
	* This allows the outside world to interact safely with mutable fiber state
	* without locks or immutable data.
	*/
	ask(f) {
		return suspend(() => {
			const deferred = deferredUnsafeMake(this._fiberId);
			this.tell(stateful((fiber, status) => {
				deferredUnsafeDone(deferred, sync$1(() => f(fiber, status)));
			}));
			return deferredAwait(deferred);
		});
	}
	/**
	* Adds a message to be processed by the fiber on the fiber.
	*/
	tell(message) {
		this._queue.push(message);
		if (!this._running) {
			this._running = true;
			this.drainQueueLaterOnExecutor();
		}
	}
	get await() {
		return async_((resume) => {
			const cb = (exit) => resume(succeed$1(exit));
			if (this._exitValue !== null) {
				cb(this._exitValue);
				return;
			}
			this.tell(stateful((fiber, _) => {
				if (fiber._exitValue !== null) cb(this._exitValue);
				else fiber.addObserver(cb);
			}));
			return sync$1(() => this.tell(stateful((fiber, _) => {
				fiber.removeObserver(cb);
			})));
		}, this.id());
	}
	get inheritAll() {
		return withFiberRuntime((parentFiber, parentStatus) => {
			const parentFiberId = parentFiber.id();
			const parentFiberRefs = parentFiber.getFiberRefs();
			const parentRuntimeFlags = parentStatus.runtimeFlags;
			const updatedFiberRefs = joinAs(parentFiberRefs, parentFiberId, this.getFiberRefs());
			parentFiber.setFiberRefs(updatedFiberRefs);
			return updateRuntimeFlags(pipe(diff$3(parentRuntimeFlags, parentFiber.getFiberRef(currentRuntimeFlags)), exclude(1), exclude(16)));
		});
	}
	/**
	* Tentatively observes the fiber, but returns immediately if it is not
	* already done.
	*/
	get poll() {
		return sync$1(() => fromNullable(this._exitValue));
	}
	/**
	* Unsafely observes the fiber, but returns immediately if it is not
	* already done.
	*/
	unsafePoll() {
		return this._exitValue;
	}
	/**
	* In the background, interrupts the fiber as if interrupted from the specified fiber.
	*/
	interruptAsFork(fiberId) {
		return sync$1(() => this.tell(interruptSignal(interrupt(fiberId))));
	}
	/**
	* In the background, interrupts the fiber as if interrupted from the specified fiber.
	*/
	unsafeInterruptAsFork(fiberId) {
		this.tell(interruptSignal(interrupt(fiberId)));
	}
	/**
	* Adds an observer to the list of observers.
	*
	* **NOTE**: This method must be invoked by the fiber itself.
	*/
	addObserver(observer) {
		if (this._exitValue !== null) observer(this._exitValue);
		else this._observers.push(observer);
	}
	/**
	* Removes the specified observer from the list of observers that will be
	* notified when the fiber exits.
	*
	* **NOTE**: This method must be invoked by the fiber itself.
	*/
	removeObserver(observer) {
		this._observers = this._observers.filter((o) => o !== observer);
	}
	/**
	* Retrieves all fiber refs of the fiber.
	*
	* **NOTE**: This method is safe to invoke on any fiber, but if not invoked
	* on this fiber, then values derived from the fiber's state (including the
	* log annotations and log level) may not be up-to-date.
	*/
	getFiberRefs() {
		this.setFiberRef(currentRuntimeFlags, this.currentRuntimeFlags);
		return this._fiberRefs;
	}
	/**
	* Deletes the specified fiber ref.
	*
	* **NOTE**: This method must be invoked by the fiber itself.
	*/
	unsafeDeleteFiberRef(fiberRef) {
		this._fiberRefs = delete_(this._fiberRefs, fiberRef);
	}
	/**
	* Retrieves the state of the fiber ref, or else its initial value.
	*
	* **NOTE**: This method is safe to invoke on any fiber, but if not invoked
	* on this fiber, then values derived from the fiber's state (including the
	* log annotations and log level) may not be up-to-date.
	*/
	getFiberRef(fiberRef) {
		if (this._fiberRefs.locals.has(fiberRef)) return this._fiberRefs.locals.get(fiberRef)[0][1];
		return fiberRef.initial;
	}
	/**
	* Sets the fiber ref to the specified value.
	*
	* **NOTE**: This method must be invoked by the fiber itself.
	*/
	setFiberRef(fiberRef, value) {
		this._fiberRefs = updateAs(this._fiberRefs, {
			fiberId: this._fiberId,
			fiberRef,
			value
		});
		this.refreshRefCache();
	}
	refreshRefCache() {
		this.currentDefaultServices = this.getFiberRef(currentServices);
		this.currentTracer = this.currentDefaultServices.unsafeMap.get(tracerTag.key);
		this.currentSupervisor = this.getFiberRef(currentSupervisor);
		this.currentScheduler = this.getFiberRef(currentScheduler);
		this.currentContext = this.getFiberRef(currentContext);
		this.currentSpan = this.currentContext.unsafeMap.get(spanTag.key);
	}
	/**
	* Wholesale replaces all fiber refs of this fiber.
	*
	* **NOTE**: This method must be invoked by the fiber itself.
	*/
	setFiberRefs(fiberRefs) {
		this._fiberRefs = fiberRefs;
		this.refreshRefCache();
	}
	/**
	* Adds a reference to the specified fiber inside the children set.
	*
	* **NOTE**: This method must be invoked by the fiber itself.
	*/
	addChild(child) {
		this.getChildren().add(child);
	}
	/**
	* Removes a reference to the specified fiber inside the children set.
	*
	* **NOTE**: This method must be invoked by the fiber itself.
	*/
	removeChild(child) {
		this.getChildren().delete(child);
	}
	/**
	* Transfers all children of this fiber that are currently running to the
	* specified fiber scope.
	*
	* **NOTE**: This method must be invoked by the fiber itself after it has
	* evaluated the effects but prior to exiting.
	*/
	transferChildren(scope) {
		const children = this._children;
		this._children = null;
		if (children !== null && children.size > 0) {
			for (const child of children) if (child._exitValue === null) scope.add(this.currentRuntimeFlags, child);
		}
	}
	/**
	* On the current thread, executes all messages in the fiber's inbox. This
	* method may return before all work is done, in the event the fiber executes
	* an asynchronous operation.
	*
	* **NOTE**: This method must be invoked by the fiber itself.
	*/
	drainQueueOnCurrentThread() {
		let recurse = true;
		while (recurse) {
			let evaluationSignal = EvaluationSignalContinue;
			const prev = globalThis[currentFiberURI];
			globalThis[currentFiberURI] = this;
			try {
				while (evaluationSignal === EvaluationSignalContinue) evaluationSignal = this._queue.length === 0 ? EvaluationSignalDone : this.evaluateMessageWhileSuspended(this._queue.splice(0, 1)[0]);
			} finally {
				this._running = false;
				globalThis[currentFiberURI] = prev;
			}
			if (this._queue.length > 0 && !this._running) {
				this._running = true;
				if (evaluationSignal === EvaluationSignalYieldNow) {
					this.drainQueueLaterOnExecutor();
					recurse = false;
				} else recurse = true;
			} else recurse = false;
		}
	}
	/**
	* Schedules the execution of all messages in the fiber's inbox.
	*
	* This method will return immediately after the scheduling
	* operation is completed, but potentially before such messages have been
	* executed.
	*
	* **NOTE**: This method must be invoked by the fiber itself.
	*/
	drainQueueLaterOnExecutor() {
		this.currentScheduler.scheduleTask(this.run, this.getFiberRef(currentSchedulingPriority), this);
	}
	/**
	* Drains the fiber's message queue while the fiber is actively running,
	* returning the next effect to execute, which may be the input effect if no
	* additional effect needs to be executed.
	*
	* **NOTE**: This method must be invoked by the fiber itself.
	*/
	drainQueueWhileRunning(runtimeFlags, cur0) {
		let cur = cur0;
		while (this._queue.length > 0) {
			const message = this._queue.splice(0, 1)[0];
			cur = drainQueueWhileRunningTable[message._tag](this, runtimeFlags, cur, message);
		}
		return cur;
	}
	/**
	* Determines if the fiber is interrupted.
	*
	* **NOTE**: This method is safe to invoke on any fiber, but if not invoked
	* on this fiber, then values derived from the fiber's state (including the
	* log annotations and log level) may not be up-to-date.
	*/
	isInterrupted() {
		return !isEmpty(this.getFiberRef(currentInterruptedCause));
	}
	/**
	* Adds an interruptor to the set of interruptors that are interrupting this
	* fiber.
	*
	* **NOTE**: This method must be invoked by the fiber itself.
	*/
	addInterruptedCause(cause) {
		const oldSC = this.getFiberRef(currentInterruptedCause);
		this.setFiberRef(currentInterruptedCause, sequential$1(oldSC, cause));
	}
	/**
	* Processes a new incoming interrupt signal.
	*
	* **NOTE**: This method must be invoked by the fiber itself.
	*/
	processNewInterruptSignal(cause) {
		this.addInterruptedCause(cause);
		this.sendInterruptSignalToAllChildren();
	}
	/**
	* Interrupts all children of the current fiber, returning an effect that will
	* await the exit of the children. This method will return null if the fiber
	* has no children.
	*
	* **NOTE**: This method must be invoked by the fiber itself.
	*/
	sendInterruptSignalToAllChildren() {
		if (this._children === null || this._children.size === 0) return false;
		let told = false;
		for (const child of this._children) {
			child.tell(interruptSignal(interrupt(this.id())));
			told = true;
		}
		return told;
	}
	/**
	* Interrupts all children of the current fiber, returning an effect that will
	* await the exit of the children. This method will return null if the fiber
	* has no children.
	*
	* **NOTE**: This method must be invoked by the fiber itself.
	*/
	interruptAllChildren() {
		if (this.sendInterruptSignalToAllChildren()) {
			const it = this._children.values();
			this._children = null;
			let isDone = false;
			const body = () => {
				const next = it.next();
				if (!next.done) return asVoid(next.value.await);
				else return sync$1(() => {
					isDone = true;
				});
			};
			return whileLoop({
				while: () => !isDone,
				body,
				step: () => {}
			});
		}
		return null;
	}
	reportExitValue(exit) {
		if (runtimeMetrics(this.currentRuntimeFlags)) {
			const tags = this.getFiberRef(currentMetricLabels);
			const startTimeMillis = this.id().startTimeMillis;
			const endTimeMillis = Date.now();
			fiberLifetimes.unsafeUpdate(endTimeMillis - startTimeMillis, tags);
			fiberActive.unsafeUpdate(-1, tags);
			switch (exit._tag) {
				case OP_SUCCESS:
					fiberSuccesses.unsafeUpdate(1, tags);
					break;
				case OP_FAILURE:
					fiberFailures.unsafeUpdate(1, tags);
					break;
			}
		}
		if (exit._tag === "Failure") {
			const level = this.getFiberRef(currentUnhandledErrorLogLevel);
			if (!isInterruptedOnly(exit.cause) && level._tag === "Some") this.log("Fiber terminated with an unhandled error", exit.cause, level);
		}
	}
	setExitValue(exit) {
		this._exitValue = exit;
		this.reportExitValue(exit);
		for (let i = this._observers.length - 1; i >= 0; i--) this._observers[i](exit);
		this._observers = [];
	}
	getLoggers() {
		return this.getFiberRef(currentLoggers);
	}
	log(message, cause, overrideLogLevel) {
		const logLevel = isSome(overrideLogLevel) ? overrideLogLevel.value : this.getFiberRef(currentLogLevel);
		if (greaterThan(this.getFiberRef(currentMinimumLogLevel), logLevel)) return;
		const spans = this.getFiberRef(currentLogSpan);
		const annotations = this.getFiberRef(currentLogAnnotations);
		const loggers = this.getLoggers();
		const contextMap = this.getFiberRefs();
		if (size(loggers) > 0) {
			const clockService = get$5(this.getFiberRef(currentServices), clockTag);
			const date = new Date(clockService.unsafeCurrentTimeMillis());
			withRedactableContext(contextMap, () => {
				for (const logger of loggers) logger.log({
					fiberId: this.id(),
					logLevel,
					message,
					cause,
					context: contextMap,
					spans,
					annotations,
					date
				});
			});
		}
	}
	/**
	* Evaluates a single message on the current thread, while the fiber is
	* suspended. This method should only be called while evaluation of the
	* fiber's effect is suspended due to an asynchronous operation.
	*
	* **NOTE**: This method must be invoked by the fiber itself.
	*/
	evaluateMessageWhileSuspended(message) {
		switch (message._tag) {
			case OP_YIELD_NOW: return EvaluationSignalYieldNow;
			case OP_INTERRUPT_SIGNAL:
				this.processNewInterruptSignal(message.cause);
				if (this._asyncInterruptor !== null) {
					this._asyncInterruptor(exitFailCause$1(message.cause));
					this._asyncInterruptor = null;
				}
				return EvaluationSignalContinue;
			case OP_RESUME:
				this._asyncInterruptor = null;
				this._asyncBlockingOn = null;
				this.evaluateEffect(message.effect);
				return EvaluationSignalContinue;
			case OP_STATEFUL:
				message.onFiber(this, this._exitValue !== null ? done : suspended(this.currentRuntimeFlags, this._asyncBlockingOn));
				return EvaluationSignalContinue;
			default: return absurd(message);
		}
	}
	/**
	* Evaluates an effect until completion, potentially asynchronously.
	*
	* **NOTE**: This method must be invoked by the fiber itself.
	*/
	evaluateEffect(effect0) {
		this.currentSupervisor.onResume(this);
		try {
			let effect = interruptible$2(this.currentRuntimeFlags) && this.isInterrupted() ? exitFailCause$1(this.getInterruptedCause()) : effect0;
			while (effect !== null) {
				const eff = effect;
				const exit = this.runLoop(eff);
				if (exit === YieldedOp) {
					const op = yieldedOpChannel.currentOp;
					yieldedOpChannel.currentOp = null;
					if (op._op === "Yield") if (cooperativeYielding(this.currentRuntimeFlags)) {
						this.tell(yieldNow());
						this.tell(resume(exitVoid$1));
						effect = null;
					} else effect = exitVoid$1;
					else if (op._op === "Async") effect = null;
				} else {
					this.currentRuntimeFlags = pipe(this.currentRuntimeFlags, enable$1(16));
					const interruption = this.interruptAllChildren();
					if (interruption !== null) effect = flatMap$2(interruption, () => exit);
					else {
						if (this._queue.length === 0) this.setExitValue(exit);
						else this.tell(resume(exit));
						effect = null;
					}
				}
			}
		} finally {
			this.currentSupervisor.onSuspend(this);
		}
	}
	/**
	* Begins execution of the effect associated with this fiber on the current
	* thread. This can be called to "kick off" execution of a fiber after it has
	* been created, in hopes that the effect can be executed synchronously.
	*
	* This is not the normal way of starting a fiber, but it is useful when the
	* express goal of executing the fiber is to synchronously produce its exit.
	*/
	start(effect) {
		if (!this._running) {
			this._running = true;
			const prev = globalThis[currentFiberURI];
			globalThis[currentFiberURI] = this;
			try {
				this.evaluateEffect(effect);
			} finally {
				this._running = false;
				globalThis[currentFiberURI] = prev;
				if (this._queue.length > 0) this.drainQueueLaterOnExecutor();
			}
		} else this.tell(resume(effect));
	}
	/**
	* Begins execution of the effect associated with this fiber on in the
	* background, and on the correct thread pool. This can be called to "kick
	* off" execution of a fiber after it has been created, in hopes that the
	* effect can be executed synchronously.
	*/
	startFork(effect) {
		this.tell(resume(effect));
	}
	/**
	* Takes the current runtime flags, patches them to return the new runtime
	* flags, and then makes any changes necessary to fiber state based on the
	* specified patch.
	*
	* **NOTE**: This method must be invoked by the fiber itself.
	*/
	patchRuntimeFlags(oldRuntimeFlags, patch) {
		const newRuntimeFlags = patch$4(oldRuntimeFlags, patch);
		globalThis[currentFiberURI] = this;
		this.currentRuntimeFlags = newRuntimeFlags;
		return newRuntimeFlags;
	}
	/**
	* Initiates an asynchronous operation, by building a callback that will
	* resume execution, and then feeding that callback to the registration
	* function, handling error cases and repeated resumptions appropriately.
	*
	* **NOTE**: This method must be invoked by the fiber itself.
	*/
	initiateAsync(runtimeFlags, asyncRegister) {
		let alreadyCalled = false;
		const callback = (effect) => {
			if (!alreadyCalled) {
				alreadyCalled = true;
				this.tell(resume(effect));
			}
		};
		if (interruptible$2(runtimeFlags)) this._asyncInterruptor = callback;
		try {
			asyncRegister(callback);
		} catch (e) {
			callback(failCause$1(die$1(e)));
		}
	}
	pushStack(cont) {
		this._stack.push(cont);
		if (cont._op === "OnStep") this._steps.push({
			refs: this.getFiberRefs(),
			flags: this.currentRuntimeFlags
		});
	}
	popStack() {
		const item = this._stack.pop();
		if (item) {
			if (item._op === "OnStep") this._steps.pop();
			return item;
		}
	}
	getNextSuccessCont() {
		let frame = this.popStack();
		while (frame) {
			if (frame._op !== "OnFailure") return frame;
			frame = this.popStack();
		}
	}
	getNextFailCont() {
		let frame = this.popStack();
		while (frame) {
			if (frame._op !== "OnSuccess" && frame._op !== "While" && frame._op !== "Iterator") return frame;
			frame = this.popStack();
		}
	}
	[_OpCodes$OP_TAG](op) {
		return sync$1(() => unsafeGet$1(this.currentContext, op));
	}
	["Left"](op) {
		return fail$1(op.left);
	}
	["None"](_) {
		return fail$1(new NoSuchElementException$1());
	}
	["Right"](op) {
		return exitSucceed$1(op.right);
	}
	["Some"](op) {
		return exitSucceed$1(op.value);
	}
	["Micro"](op) {
		return unsafeAsync((microResume) => {
			let resume = microResume;
			const fiber = runFork(provideContext(op, this.currentContext));
			fiber.addObserver((exit) => {
				if (exit._tag === "Success") return resume(exitSucceed$1(exit.value));
				switch (exit.cause._tag) {
					case "Interrupt": return resume(exitFailCause$1(interrupt(none$2)));
					case "Fail": return resume(fail$1(exit.cause.error));
					case "Die": return resume(die(exit.cause.defect));
				}
			});
			return unsafeAsync((abortResume) => {
				resume = (_) => {
					abortResume(void_$1);
				};
				fiber.unsafeInterrupt();
			});
		});
	}
	[_OpCodes$OP_SYNC](op) {
		const value = internalCall(() => op.effect_instruction_i0());
		const cont = this.getNextSuccessCont();
		if (cont !== void 0) {
			if (!(cont._op in contOpSuccess)) absurd(cont);
			return contOpSuccess[cont._op](this, cont, value);
		} else {
			yieldedOpChannel.currentOp = exitSucceed$1(value);
			return YieldedOp;
		}
	}
	[_OpCodes$OP_SUCCESS](op) {
		const oldCur = op;
		const cont = this.getNextSuccessCont();
		if (cont !== void 0) {
			if (!(cont._op in contOpSuccess)) absurd(cont);
			return contOpSuccess[cont._op](this, cont, oldCur.effect_instruction_i0);
		} else {
			yieldedOpChannel.currentOp = oldCur;
			return YieldedOp;
		}
	}
	[_OpCodes$OP_FAILURE](op) {
		const cause = op.effect_instruction_i0;
		const cont = this.getNextFailCont();
		if (cont !== void 0) switch (cont._op) {
			case OP_ON_FAILURE:
			case OP_ON_SUCCESS_AND_FAILURE: if (!(interruptible$2(this.currentRuntimeFlags) && this.isInterrupted())) return internalCall(() => cont.effect_instruction_i1(cause));
			else return exitFailCause$1(stripFailures(cause));
			case "OnStep": if (!(interruptible$2(this.currentRuntimeFlags) && this.isInterrupted())) return exitSucceed$1(exitFailCause$1(cause));
			else return exitFailCause$1(stripFailures(cause));
			case OP_REVERT_FLAGS:
				this.patchRuntimeFlags(this.currentRuntimeFlags, cont.patch);
				if (interruptible$2(this.currentRuntimeFlags) && this.isInterrupted()) return exitFailCause$1(sequential$1(cause, this.getInterruptedCause()));
				else return exitFailCause$1(cause);
			default: absurd(cont);
		}
		else {
			yieldedOpChannel.currentOp = exitFailCause$1(cause);
			return YieldedOp;
		}
	}
	[_OpCodes$OP_WITH_RUNT](op) {
		return internalCall(() => op.effect_instruction_i0(this, running(this.currentRuntimeFlags)));
	}
	["Blocked"](op) {
		const refs = this.getFiberRefs();
		const flags = this.currentRuntimeFlags;
		if (this._steps.length > 0) {
			const frames = [];
			const snap = this._steps[this._steps.length - 1];
			let frame = this.popStack();
			while (frame && frame._op !== "OnStep") {
				frames.push(frame);
				frame = this.popStack();
			}
			this.setFiberRefs(snap.refs);
			this.currentRuntimeFlags = snap.flags;
			const patchRefs = diff$1(snap.refs, refs);
			const patchFlags = diff$3(snap.flags, flags);
			return exitSucceed$1(blocked(op.effect_instruction_i0, withFiberRuntime((newFiber) => {
				while (frames.length > 0) newFiber.pushStack(frames.pop());
				newFiber.setFiberRefs(patch$1(newFiber.id(), newFiber.getFiberRefs())(patchRefs));
				newFiber.currentRuntimeFlags = patch$4(patchFlags)(newFiber.currentRuntimeFlags);
				return op.effect_instruction_i1;
			})));
		}
		return uninterruptibleMask$1((restore) => flatMap$2(forkDaemon(runRequestBlock(op.effect_instruction_i0)), () => restore(op.effect_instruction_i1)));
	}
	["RunBlocked"](op) {
		return runBlockedRequests(op.effect_instruction_i0);
	}
	[_OpCodes$OP_UPDATE_RU](op) {
		const updateFlags = op.effect_instruction_i0;
		const oldRuntimeFlags = this.currentRuntimeFlags;
		const newRuntimeFlags = patch$4(oldRuntimeFlags, updateFlags);
		if (interruptible$2(newRuntimeFlags) && this.isInterrupted()) return exitFailCause$1(this.getInterruptedCause());
		else {
			this.patchRuntimeFlags(this.currentRuntimeFlags, updateFlags);
			if (op.effect_instruction_i1) {
				const revertFlags = diff$3(newRuntimeFlags, oldRuntimeFlags);
				this.pushStack(new RevertFlags(revertFlags, op));
				return internalCall(() => op.effect_instruction_i1(oldRuntimeFlags));
			} else return exitVoid$1;
		}
	}
	[_OpCodes$OP_ON_SUCCES](op) {
		this.pushStack(op);
		return op.effect_instruction_i0;
	}
	["OnStep"](op) {
		this.pushStack(op);
		return op.effect_instruction_i0;
	}
	[_OpCodes$OP_ON_FAILUR](op) {
		this.pushStack(op);
		return op.effect_instruction_i0;
	}
	[_OpCodes$OP_ON_SUCCES2](op) {
		this.pushStack(op);
		return op.effect_instruction_i0;
	}
	[_OpCodes$OP_ASYNC](op) {
		this._asyncBlockingOn = op.effect_instruction_i1;
		this.initiateAsync(this.currentRuntimeFlags, op.effect_instruction_i0);
		yieldedOpChannel.currentOp = op;
		return YieldedOp;
	}
	[_OpCodes$OP_YIELD](op) {
		this._isYielding = false;
		yieldedOpChannel.currentOp = op;
		return YieldedOp;
	}
	[_OpCodes$OP_WHILE](op) {
		const check = op.effect_instruction_i0;
		const body = op.effect_instruction_i1;
		if (check()) {
			this.pushStack(op);
			return body();
		} else return exitVoid$1;
	}
	[_OpCodes$OP_ITERATOR](op) {
		return contOpSuccess[OP_ITERATOR](this, op, void 0);
	}
	[_OpCodes$OP_COMMIT](op) {
		return internalCall(() => op.commit());
	}
	/**
	* The main run-loop for evaluating effects.
	*
	* **NOTE**: This method must be invoked by the fiber itself.
	*/
	runLoop(effect0) {
		let cur = effect0;
		this.currentOpCount = 0;
		while (true) {
			if ((this.currentRuntimeFlags & 2) !== 0) this.currentSupervisor.onEffect(this, cur);
			if (this._queue.length > 0) cur = this.drainQueueWhileRunning(this.currentRuntimeFlags, cur);
			if (!this._isYielding) {
				this.currentOpCount += 1;
				const shouldYield = this.currentScheduler.shouldYield(this);
				if (shouldYield !== false) {
					this._isYielding = true;
					this.currentOpCount = 0;
					const oldCur = cur;
					cur = flatMap$2(yieldNow$2({ priority: shouldYield }), () => oldCur);
				}
			}
			try {
				cur = this.currentTracer.context(() => {
					if (_version !== cur[EffectTypeId]._V) {
						const level = this.getFiberRef(currentVersionMismatchErrorLogLevel);
						if (level._tag === "Some") {
							const effectVersion = cur[EffectTypeId]._V;
							this.log(`Executing an Effect versioned ${effectVersion} with a Runtime of version ${getCurrentVersion()}, you may want to dedupe the effect dependencies, you can use the language service plugin to detect this at compile time: https://github.com/Effect-TS/language-service`, empty$6, level);
						}
					}
					return this[cur._op](cur);
				}, this);
				if (cur === YieldedOp) {
					const op = yieldedOpChannel.currentOp;
					if (op._op === "Yield" || op._op === "Async") return YieldedOp;
					yieldedOpChannel.currentOp = null;
					return op._op === "Success" || op._op === "Failure" ? op : exitFailCause$1(die$1(op));
				}
			} catch (e) {
				if (cur !== YieldedOp && !hasProperty(cur, "_op") || !(cur._op in this)) cur = dieMessage(`Not a valid effect: ${toStringUnknown(cur)}`);
				else if (isInterruptedException(e)) cur = exitFailCause$1(sequential$1(die$1(e), interrupt(none$2)));
				else cur = die(e);
			}
		}
	}
};
/** @internal */
var currentMinimumLogLevel = /* @__PURE__ */ globalValue("effect/FiberRef/currentMinimumLogLevel", () => fiberRefUnsafeMake(fromLiteral("Info")));
/** @internal */
var loggerWithConsoleLog = (self) => makeLogger((opts) => {
	get$5(getOrDefault(opts.context, currentServices), consoleTag).unsafe.log(self.log(opts));
});
/** @internal */
var defaultLogger = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Logger/defaultLogger"), () => loggerWithConsoleLog(stringLogger));
/** @internal */
var tracerLogger = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Logger/tracerLogger"), () => makeLogger(({ annotations, cause, context, fiberId, logLevel, message }) => {
	const span = filterDisablePropagation(getOption(getOrDefault$1(context, currentContext), spanTag));
	if (span._tag === "None" || span.value._tag === "ExternalSpan") return;
	const clockService = unsafeGet$1(getOrDefault$1(context, currentServices), clockTag);
	const attributes = {};
	for (const [key, value] of annotations) attributes[key] = value;
	attributes["effect.fiberId"] = threadName(fiberId);
	attributes["effect.logLevel"] = logLevel.label;
	if (cause !== null && cause._tag !== "Empty") attributes["effect.cause"] = pretty(cause, { renderErrorCause: true });
	span.value.event(toStringUnknown(Array.isArray(message) && message.length === 1 ? message[0] : message), clockService.unsafeCurrentTimeNanos(), attributes);
}));
/** @internal */
var currentLoggers = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentLoggers"), () => fiberRefUnsafeMakeHashSet(make$14(defaultLogger, tracerLogger)));
var forEachParUnbounded = (self, f, batching) => suspend(() => {
	const as = fromIterable$6(self);
	const array = new Array(as.length);
	const fn = (a, i) => flatMap$2(f(a, i), (b) => sync$1(() => array[i] = b));
	return zipRight(forEachConcurrentDiscard(as, fn, batching, false), succeed$1(array));
});
/** @internal */
var forEachConcurrentDiscard = (self, f, batching, processAll, n) => uninterruptibleMask$1((restore) => transplant((graft) => withFiberRuntime((parent) => {
	let todos = Array.from(self).reverse();
	let target = todos.length;
	if (target === 0) return void_$1;
	let counter = 0;
	let interrupted = false;
	const fibersCount = n ? Math.min(todos.length, n) : todos.length;
	const fibers = /* @__PURE__ */ new Set();
	const results = new Array();
	const interruptAll = () => fibers.forEach((fiber) => {
		fiber.currentScheduler.scheduleTask(() => {
			fiber.unsafeInterruptAsFork(parent.id());
		}, 0, fiber);
	});
	const startOrder = new Array();
	const joinOrder = new Array();
	const residual = new Array();
	const collectExits = () => {
		const exits = results.filter(({ exit }) => exit._tag === "Failure").sort((a, b) => a.index < b.index ? -1 : a.index === b.index ? 0 : 1).map(({ exit }) => exit);
		if (exits.length === 0) exits.push(exitVoid$1);
		return exits;
	};
	const runFiber = (eff, interruptImmediately = false) => {
		const runnable = uninterruptible(graft(eff));
		const fiber = unsafeForkUnstarted(runnable, parent, parent.currentRuntimeFlags, globalScope);
		parent.currentScheduler.scheduleTask(() => {
			if (interruptImmediately) fiber.unsafeInterruptAsFork(parent.id());
			fiber.resume(runnable);
		}, 0, fiber);
		return fiber;
	};
	const onInterruptSignal = () => {
		if (!processAll) {
			target -= todos.length;
			todos = [];
		}
		interrupted = true;
		interruptAll();
	};
	const stepOrExit = batching ? step : exit;
	const processingFiber = runFiber(async_((resume) => {
		const pushResult = (res, index) => {
			if (res._op === "Blocked") residual.push(res);
			else {
				results.push({
					index,
					exit: res
				});
				if (res._op === "Failure" && !interrupted) onInterruptSignal();
			}
		};
		const next = () => {
			if (todos.length > 0) {
				const a = todos.pop();
				let index = counter++;
				const returnNextElement = () => {
					const a = todos.pop();
					index = counter++;
					return flatMap$2(yieldNow$2(), () => flatMap$2(stepOrExit(restore(f(a, index))), onRes));
				};
				const onRes = (res) => {
					if (todos.length > 0) {
						pushResult(res, index);
						if (todos.length > 0) return returnNextElement();
					}
					return succeed$1(res);
				};
				const fiber = runFiber(flatMap$2(stepOrExit(restore(f(a, index))), onRes));
				startOrder.push(fiber);
				fibers.add(fiber);
				if (interrupted) fiber.currentScheduler.scheduleTask(() => {
					fiber.unsafeInterruptAsFork(parent.id());
				}, 0, fiber);
				fiber.addObserver((wrapped) => {
					let exit;
					if (wrapped._op === "Failure") exit = wrapped;
					else exit = wrapped.effect_instruction_i0;
					joinOrder.push(fiber);
					fibers.delete(fiber);
					pushResult(exit, index);
					if (results.length === target) resume(succeed$1(getOrElse(exitCollectAll(collectExits(), { parallel: true }), () => exitVoid$1)));
					else if (residual.length + results.length === target) {
						const exits = collectExits();
						resume(succeed$1(blocked(residual.map((blocked) => blocked.effect_instruction_i0).reduce(par), forEachConcurrentDiscard([getOrElse(exitCollectAll(exits, { parallel: true }), () => exitVoid$1), ...residual.map((blocked) => blocked.effect_instruction_i1)], (i) => i, batching, true, n))));
					} else next();
				});
			}
		};
		for (let i = 0; i < fibersCount; i++) next();
	}));
	return asVoid(onExit$1(flatten(restore(join(processingFiber))), exitMatch({
		onFailure: (cause) => {
			onInterruptSignal();
			const target = residual.length + 1;
			const concurrency = Math.min(typeof n === "number" ? n : residual.length, residual.length);
			const toPop = Array.from(residual);
			return async_((cb) => {
				const exits = [];
				let count = 0;
				let index = 0;
				const check = (index, hitNext) => (exit) => {
					exits[index] = exit;
					count++;
					if (count === target) cb(exitSucceed$1(exitFailCause$1(cause)));
					if (toPop.length > 0 && hitNext) next();
				};
				const next = () => {
					runFiber(toPop.pop(), true).addObserver(check(index, true));
					index++;
				};
				processingFiber.addObserver(check(index, false));
				index++;
				for (let i = 0; i < concurrency; i++) next();
			});
		},
		onSuccess: () => forEachSequential(joinOrder, (f) => f.inheritAll)
	})));
})));
var forEachParN = (self, n, f, batching) => suspend(() => {
	const as = fromIterable$6(self);
	const array = new Array(as.length);
	const fn = (a, i) => map$1(f(a, i), (b) => array[i] = b);
	return zipRight(forEachConcurrentDiscard(as, fn, batching, false, n), succeed$1(array));
});
var forkDaemon = (self) => forkWithScopeOverride(self, globalScope);
/** @internal */
var unsafeFork$1 = (effect, parentFiber, parentRuntimeFlags, overrideScope = null) => {
	const childFiber = unsafeMakeChildFiber(effect, parentFiber, parentRuntimeFlags, overrideScope);
	childFiber.resume(effect);
	return childFiber;
};
/** @internal */
var unsafeForkUnstarted = (effect, parentFiber, parentRuntimeFlags, overrideScope = null) => {
	return unsafeMakeChildFiber(effect, parentFiber, parentRuntimeFlags, overrideScope);
};
/** @internal */
var unsafeMakeChildFiber = (effect, parentFiber, parentRuntimeFlags, overrideScope = null) => {
	const childId = unsafeMake$3();
	const childFiberRefs = forkAs(parentFiber.getFiberRefs(), childId);
	const childFiber = new FiberRuntime(childId, childFiberRefs, parentRuntimeFlags);
	const childContext = getOrDefault$1(childFiberRefs, currentContext);
	const supervisor = childFiber.currentSupervisor;
	supervisor.onStart(childContext, effect, some(parentFiber), childFiber);
	childFiber.addObserver((exit) => supervisor.onEnd(exit, childFiber));
	(overrideScope !== null ? overrideScope : pipe(parentFiber.getFiberRef(currentForkScopeOverride), getOrElse(() => parentFiber.scope()))).add(parentRuntimeFlags, childFiber);
	return childFiber;
};
var forkWithScopeOverride = (self, scopeOverride) => withFiberRuntime((parentFiber, parentStatus) => succeed$1(unsafeFork$1(self, parentFiber, parentStatus.runtimeFlags, scopeOverride)));
var scopeUnsafeAddFinalizer = (scope, fin) => {
	if (scope.state._tag === "Open") scope.state.finalizers.set({}, fin);
};
var ScopeImplProto = {
	[ScopeTypeId]: ScopeTypeId,
	[CloseableScopeTypeId]: CloseableScopeTypeId,
	pipe() {
		return pipeArguments(this, arguments);
	},
	fork(strategy) {
		return sync$1(() => {
			const newScope = scopeUnsafeMake(strategy);
			if (this.state._tag === "Closed") {
				newScope.state = this.state;
				return newScope;
			}
			const key = {};
			const fin = (exit) => newScope.close(exit);
			this.state.finalizers.set(key, fin);
			scopeUnsafeAddFinalizer(newScope, (_) => sync$1(() => {
				if (this.state._tag === "Open") this.state.finalizers.delete(key);
			}));
			return newScope;
		});
	},
	close(exit$2) {
		return suspend(() => {
			if (this.state._tag === "Closed") return void_$1;
			const finalizers = Array.from(this.state.finalizers.values()).reverse();
			this.state = {
				_tag: "Closed",
				exit: exit$2
			};
			if (finalizers.length === 0) return void_$1;
			return isSequential(this.strategy) ? pipe(forEachSequential(finalizers, (fin) => exit(fin(exit$2))), flatMap$2((results) => pipe(exitCollectAll(results), map$5(exitAsVoid), getOrElse(() => exitVoid$1)))) : isParallel(this.strategy) ? pipe(forEachParUnbounded(finalizers, (fin) => exit(fin(exit$2)), false), flatMap$2((results) => pipe(exitCollectAll(results, { parallel: true }), map$5(exitAsVoid), getOrElse(() => exitVoid$1)))) : pipe(forEachParN(finalizers, this.strategy.parallelism, (fin) => exit(fin(exit$2)), false), flatMap$2((results) => pipe(exitCollectAll(results, { parallel: true }), map$5(exitAsVoid), getOrElse(() => exitVoid$1))));
		});
	},
	addFinalizer(fin) {
		return suspend(() => {
			if (this.state._tag === "Closed") return fin(this.state.exit);
			this.state.finalizers.set({}, fin);
			return void_$1;
		});
	}
};
var scopeUnsafeMake = (strategy = sequential) => {
	const scope = Object.create(ScopeImplProto);
	scope.strategy = strategy;
	scope.state = {
		_tag: "Open",
		finalizers: /* @__PURE__ */ new Map()
	};
	return scope;
};
/** @internal */
var fiberRefUnsafeMakeSupervisor = (initial) => fiberRefUnsafeMakePatch(initial, {
	differ,
	fork: empty
});
/** @internal */
var currentRuntimeFlags = /* @__PURE__ */ fiberRefUnsafeMakeRuntimeFlags(none$1);
/** @internal */
var currentSupervisor = /* @__PURE__ */ fiberRefUnsafeMakeSupervisor(none);
/** @internal */
var ensuring = /* @__PURE__ */ dual(2, (self, finalizer) => uninterruptibleMask$1((restore) => matchCauseEffect$1(restore(self), {
	onFailure: (cause1) => matchCauseEffect$1(finalizer, {
		onFailure: (cause2) => failCause$1(sequential$1(cause1, cause2)),
		onSuccess: () => failCause$1(cause1)
	}),
	onSuccess: (a) => as(finalizer, a)
})));
/** @internal */
var invokeWithInterrupt = (self, entries, onInterrupt) => fiberIdWith((id) => ensuring(flatMap$2(forkDaemon(interruptible$1(self)), (processing) => async_((cb) => {
	const counts = entries.map((_) => _.listeners.count);
	const checkDone = () => {
		if (counts.every((count) => count === 0)) {
			if (entries.every((_) => {
				if (_.result.state.current._tag === "Pending") return true;
				else if (_.result.state.current._tag === "Done" && exitIsExit(_.result.state.current.effect) && _.result.state.current.effect._tag === "Failure" && isInterrupted(_.result.state.current.effect.cause)) return true;
				else return false;
			})) {
				cleanup.forEach((f) => f());
				onInterrupt?.();
				cb(interruptFiber(processing));
			}
		}
	};
	processing.addObserver((exit) => {
		cleanup.forEach((f) => f());
		cb(exit);
	});
	const cleanup = entries.map((r, i) => {
		const observer = (count) => {
			counts[i] = count;
			checkDone();
		};
		r.listeners.addObserver(observer);
		return () => r.listeners.removeObserver(observer);
	});
	checkDone();
	return sync$1(() => {
		cleanup.forEach((f) => f());
	});
})), suspend(() => {
	return forEachSequentialDiscard(entries.flatMap((entry) => {
		if (!entry.state.completed) return [entry];
		return [];
	}), (entry) => complete(entry.request, exitInterrupt$1(id)));
})));
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/Scope.js
/**
* @since 2.0.0
*/
/**
* Closes this scope with the specified exit value, running all finalizers that
* have been added to the scope.
*
* @since 2.0.0
* @category destructors
*/
var close = scopeClose;
/**
* Forks a new child scope with the specified execution strategy. The child scope
* will automatically be closed when this scope is closed.
*
* @since 2.0.0
* @category utils
*/
var fork = scopeFork;
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/internal/runtime.js
var _Inspectable$NodeInsp;
var makeDual = (f) => function() {
	if (arguments.length === 1) {
		const runtime = arguments[0];
		return (effect, ...args) => f(runtime, effect, ...args);
	}
	return f.apply(this, arguments);
};
/** @internal */
var unsafeFork = /* @__PURE__ */ makeDual((runtime, self, options) => {
	const fiberId = unsafeMake$3();
	const fiberRefUpdates = [[currentContext, [[fiberId, runtime.context]]]];
	if (options?.scheduler) fiberRefUpdates.push([currentScheduler, [[fiberId, options.scheduler]]]);
	let fiberRefs = updateManyAs(runtime.fiberRefs, {
		entries: fiberRefUpdates,
		forkAs: fiberId
	});
	if (options?.updateRefs) fiberRefs = options.updateRefs(fiberRefs, fiberId);
	const fiberRuntime = new FiberRuntime(fiberId, fiberRefs, runtime.runtimeFlags);
	let effect = self;
	if (options?.scope) effect = flatMap$2(fork(options.scope, sequential), (closeableScope) => zipRight(scopeAddFinalizer(closeableScope, fiberIdWith((id) => equals$1(id, fiberRuntime.id()) ? void_$1 : interruptAsFiber(fiberRuntime, id))), onExit$1(self, (exit) => close(closeableScope, exit))));
	const supervisor = fiberRuntime.currentSupervisor;
	if (supervisor !== none) {
		supervisor.onStart(runtime.context, effect, none$4(), fiberRuntime);
		fiberRuntime.addObserver((exit) => supervisor.onEnd(exit, fiberRuntime));
	}
	globalScope.add(runtime.runtimeFlags, fiberRuntime);
	if (options?.immediate === false) fiberRuntime.resume(effect);
	else fiberRuntime.start(effect);
	return fiberRuntime;
});
/** @internal */
var unsafeRunSync = /* @__PURE__ */ makeDual((runtime, effect) => {
	const result = unsafeRunSyncExit(runtime)(effect);
	if (result._tag === "Failure") throw fiberFailure(result.effect_instruction_i0);
	return result.effect_instruction_i0;
});
var AsyncFiberExceptionImpl = class extends Error {
	constructor(fiber) {
		super(`Fiber #${fiber.id().id} cannot be resolved synchronously. This is caused by using runSync on an effect that performs async work`);
		_defineProperty(this, "fiber", void 0);
		_defineProperty(this, "_tag", "AsyncFiberException");
		this.fiber = fiber;
		this.name = this._tag;
		this.stack = this.message;
	}
};
var asyncFiberException = (fiber) => {
	const limit = Error.stackTraceLimit;
	Error.stackTraceLimit = 0;
	const error = new AsyncFiberExceptionImpl(fiber);
	Error.stackTraceLimit = limit;
	return error;
};
/** @internal */
var FiberFailureId = /* @__PURE__ */ Symbol.for("effect/Runtime/FiberFailure");
/** @internal */
var FiberFailureCauseId = /* @__PURE__ */ Symbol.for("effect/Runtime/FiberFailure/Cause");
_Inspectable$NodeInsp = NodeInspectSymbol;
var FiberFailureImpl = class extends Error {
	constructor(cause) {
		const head = prettyErrors(cause)[0];
		super(head?.message || "An error has occurred");
		_defineProperty(this, FiberFailureId, void 0);
		_defineProperty(this, FiberFailureCauseId, void 0);
		this[FiberFailureId] = FiberFailureId;
		this[FiberFailureCauseId] = cause;
		this.name = head ? `(FiberFailure) ${head.name}` : "FiberFailure";
		if (head?.stack) this.stack = head.stack;
	}
	toJSON() {
		return {
			_id: "FiberFailure",
			cause: this[FiberFailureCauseId].toJSON()
		};
	}
	toString() {
		return "(FiberFailure) " + pretty(this[FiberFailureCauseId], { renderErrorCause: true });
	}
	[_Inspectable$NodeInsp]() {
		return this.toString();
	}
};
/** @internal */
var fiberFailure = (cause) => {
	const limit = Error.stackTraceLimit;
	Error.stackTraceLimit = 0;
	const error = new FiberFailureImpl(cause);
	Error.stackTraceLimit = limit;
	return error;
};
var fastPath = (effect) => {
	const op = effect;
	switch (op._op) {
		case "Failure":
		case "Success": return op;
		case "Left": return exitFail(op.left);
		case "Right": return exitSucceed$1(op.right);
		case "Some": return exitSucceed$1(op.value);
		case "None": return exitFail(new NoSuchElementException$1());
	}
};
/** @internal */
var unsafeRunSyncExit = /* @__PURE__ */ makeDual((runtime, effect) => {
	const op = fastPath(effect);
	if (op) return op;
	const scheduler = new SyncScheduler();
	const fiberRuntime = unsafeFork(runtime)(effect, { scheduler });
	scheduler.flush();
	const result = fiberRuntime.unsafePoll();
	if (result) return result;
	return exitDie$1(capture(asyncFiberException(fiberRuntime), currentSpanFromFiber(fiberRuntime)));
});
/** @internal */
var RuntimeImpl = class {
	constructor(context, runtimeFlags, fiberRefs) {
		_defineProperty(this, "context", void 0);
		_defineProperty(this, "runtimeFlags", void 0);
		_defineProperty(this, "fiberRefs", void 0);
		this.context = context;
		this.runtimeFlags = runtimeFlags;
		this.fiberRefs = fiberRefs;
	}
	pipe() {
		return pipeArguments(this, arguments);
	}
};
/** @internal */
var make = (options) => new RuntimeImpl(options.context, options.runtimeFlags, options.fiberRefs);
/** @internal */
var unsafeRunSyncEffect = /* @__PURE__ */ unsafeRunSync(/* @__PURE__ */ make({
	context: /* @__PURE__ */ empty$17(),
	runtimeFlags: /* @__PURE__ */ make$10(1, 32, 4),
	fiberRefs: /* @__PURE__ */ empty$2()
}));
//#endregion
//#region ../../node_modules/.pnpm/effect@3.21.2/node_modules/effect/dist/esm/Effect.js
/**
* Creates an `Effect` that represents a synchronous side-effectful computation.
*
* **Details**
*
* The provided function (`thunk`) must not throw errors; if it does, the error
* will be treated as a "defect".
*
* This defect is not a standard error but indicates a flaw in the logic that
* was expected to be error-free. You can think of it similar to an unexpected
* crash in the program, which can be further managed or logged using tools like
* {@link catchAllDefect}.
*
* **When to Use**
*
* Use this function when you are sure the operation will not fail.
*
* **Example** (Logging a Message)
*
* ```ts
* import { Effect } from "effect"
*
* const log = (message: string) =>
*   Effect.sync(() => {
*     console.log(message) // side effect
*   })
*
* //      ┌─── Effect<void, never, never>
* //      ▼
* const program = log("Hello, World!")
* ```
*
* @see {@link try_ | try} for a version that can handle failures.
*
* @since 2.0.0
* @category Creating Effects
*/
var sync = sync$1;
/**
* Handles all errors in an effect by providing a fallback effect.
*
* **Details**
*
* This function catches any errors that may occur during the execution of an
* effect and allows you to handle them by specifying a fallback effect. This
* ensures that the program continues without failing by recovering from errors
* using the provided fallback logic.
*
* **Note**: This function only handles recoverable errors. It will not recover
* from unrecoverable defects.
*
* **Example** (Providing Recovery Logic for Recoverable Errors)
*
* ```ts
* import { Effect, Random } from "effect"
*
* class HttpError {
*   readonly _tag = "HttpError"
* }
*
* class ValidationError {
*   readonly _tag = "ValidationError"
* }
*
* //      ┌─── Effect<string, HttpError | ValidationError, never>
* //      ▼
* const program = Effect.gen(function* () {
*   const n1 = yield* Random.next
*   const n2 = yield* Random.next
*   if (n1 < 0.5) {
*     yield* Effect.fail(new HttpError())
*   }
*   if (n2 < 0.5) {
*     yield* Effect.fail(new ValidationError())
*   }
*   return "some result"
* })
*
* //      ┌─── Effect<string, never, never>
* //      ▼
* const recovered = program.pipe(
*   Effect.catchAll((error) =>
*     Effect.succeed(`Recovering from ${error._tag}`)
*   )
* )
* ```
*
* @see {@link catchAllCause} for a version that can recover from both
* recoverable and unrecoverable errors.
*
* @since 2.0.0
* @category Error handling
*/
var catchAll = catchAll$1;
var try_ = try_$1;
/**
* Transforms the value inside an effect by applying a function to it.
*
* **Syntax**
*
* ```ts skip-type-checking
* const mappedEffect = pipe(myEffect, Effect.map(transformation))
* // or
* const mappedEffect = Effect.map(myEffect, transformation)
* // or
* const mappedEffect = myEffect.pipe(Effect.map(transformation))
* ```
*
* **Details**
*
* `map` takes a function and applies it to the value contained within an
* effect, creating a new effect with the transformed value.
*
* It's important to note that effects are immutable, meaning that the original
* effect is not modified. Instead, a new effect is returned with the updated
* value.
*
* **Example** (Adding a Service Charge)
*
* ```ts
* import { pipe, Effect } from "effect"
*
* const addServiceCharge = (amount: number) => amount + 1
*
* const fetchTransactionAmount = Effect.promise(() => Promise.resolve(100))
*
* const finalAmount = pipe(
*   fetchTransactionAmount,
*   Effect.map(addServiceCharge)
* )
*
* Effect.runPromise(finalAmount).then(console.log)
* // Output: 101
* ```
*
* @see {@link mapError} for a version that operates on the error channel.
* @see {@link mapBoth} for a version that operates on both channels.
* @see {@link flatMap} or {@link andThen} for a version that can return a new effect.
*
* @since 2.0.0
* @category Mapping
*/
var map = map$1;
/**
* Chains effects to produce new `Effect` instances, useful for combining
* operations that depend on previous results.
*
* **Syntax**
*
* ```ts skip-type-checking
* const flatMappedEffect = pipe(myEffect, Effect.flatMap(transformation))
* // or
* const flatMappedEffect = Effect.flatMap(myEffect, transformation)
* // or
* const flatMappedEffect = myEffect.pipe(Effect.flatMap(transformation))
* ```
*
* **Details**
*
* `flatMap` lets you sequence effects so that the result of one effect can be
* used in the next step. It is similar to `flatMap` used with arrays but works
* specifically with `Effect` instances, allowing you to avoid deeply nested
* effect structures.
*
* Since effects are immutable, `flatMap` always returns a new effect instead of
* changing the original one.
*
* **When to Use**
*
* Use `flatMap` when you need to chain multiple effects, ensuring that each
* step produces a new `Effect` while flattening any nested effects that may
* occur.
*
* **Example**
*
* ```ts
* import { pipe, Effect } from "effect"
*
* // Function to apply a discount safely to a transaction amount
* const applyDiscount = (
*   total: number,
*   discountRate: number
* ): Effect.Effect<number, Error> =>
*   discountRate === 0
*     ? Effect.fail(new Error("Discount rate cannot be zero"))
*     : Effect.succeed(total - (total * discountRate) / 100)
*
* // Simulated asynchronous task to fetch a transaction amount from database
* const fetchTransactionAmount = Effect.promise(() => Promise.resolve(100))
*
* // Chaining the fetch and discount application using `flatMap`
* const finalAmount = pipe(
*   fetchTransactionAmount,
*   Effect.flatMap((amount) => applyDiscount(amount, 5))
* )
*
* Effect.runPromise(finalAmount).then(console.log)
* // Output: 95
* ```
*
* @see {@link tap} for a version that ignores the result of the effect.
*
* @since 2.0.0
* @category Sequencing
*/
var flatMap = flatMap$2;
/**
* Executes an effect synchronously, running it immediately and returning the
* result.
*
* **Details**
*
* This function evaluates the provided effect synchronously, returning its
* result directly. It is ideal for effects that do not fail or include
* asynchronous operations. If the effect does fail or involves async tasks, it
* will throw an error. Execution stops at the point of failure or asynchronous
* operation, making it unsuitable for effects that require asynchronous
* handling.
*
* **Important**: Attempting to run effects that involve asynchronous operations
* or failures will result in exceptions being thrown, so use this function with
* care for purely synchronous and error-free effects.
*
* **When to Use**
*
* Use this function when:
* - You are sure that the effect will not fail or involve asynchronous
*   operations.
* - You need a direct, synchronous result from the effect.
* - You are working within a context where asynchronous effects are not
*   allowed.
*
* Avoid using this function for effects that can fail or require asynchronous
* handling. For such cases, consider using {@link runPromise} or
* {@link runSyncExit}.
*
* **Example** (Synchronous Logging)
*
* ```ts
* import { Effect } from "effect"
*
* const program = Effect.sync(() => {
*   console.log("Hello, World!")
*   return 1
* })
*
* const result = Effect.runSync(program)
* // Output: Hello, World!
*
* console.log(result)
* // Output: 1
* ```
*
* **Example** (Incorrect Usage with Failing or Async Effects)
*
* ```ts
* import { Effect } from "effect"
*
* try {
*   // Attempt to run an effect that fails
*   Effect.runSync(Effect.fail("my error"))
* } catch (e) {
*   console.error(e)
* }
* // Output:
* // (FiberFailure) Error: my error
*
* try {
*   // Attempt to run an effect that involves async work
*   Effect.runSync(Effect.promise(() => Promise.resolve(1)))
* } catch (e) {
*   console.error(e)
* }
* // Output:
* // (FiberFailure) AsyncFiberException: Fiber #0 cannot be resolved synchronously. This is caused by using runSync on an effect that performs async work
* ```
*
* @see {@link runSyncExit} for a version that returns an `Exit` type instead of
* throwing an error.
*
* @since 2.0.0
* @category Running Effects
*/
var runSync = unsafeRunSyncEffect;
//#endregion
//#region src/lib/fourier/fourier.ts
var PI = Math.PI;
var presetTarget = (wave) => (x) => {
	const t = (x % (2 * PI) + 2 * PI) % (2 * PI);
	switch (wave) {
		case "square": return Math.sin(x) >= 0 ? 1 : -1;
		case "sawtooth": return 1 - t / PI;
		case "triangle": return 2 / PI * Math.asin(Math.sin(x));
		case "pulse": return t < PI / 2 ? 1 : -1;
		case "halfsin": return Math.max(Math.sin(x), 0);
		case "fullsin": return Math.abs(Math.sin(x));
	}
};
var analyticFourier = (wave, n) => (x) => {
	switch (wave) {
		case "square": return makeBy(n, (i) => i + 1).reduce((s, k) => s + Math.sin((2 * k - 1) * x) / (2 * k - 1), 0) * 4 / PI;
		case "sawtooth": return makeBy(n, (i) => i + 1).reduce((s, k) => s + Math.sin(k * x) / k, 0) * 2 / PI;
		case "triangle": return makeBy(n, (i) => i).reduce((s, k) => s + Math.pow(-1, k) * Math.sin((2 * k + 1) * x) / (2 * k + 1) ** 2, 0) * 8 / PI ** 2;
	}
};
var M = 512;
var makeNumericalFourier = (f, n) => {
	const dx = 2 * PI / M;
	let a0 = 0;
	const ak = new Float64Array(n);
	const bk = new Float64Array(n);
	for (let i = 0; i < M; i++) {
		const xi = i * dx;
		const fi = f(xi);
		a0 += fi;
		for (let k = 1; k <= n; k++) {
			ak[k - 1] += fi * Math.cos(k * xi);
			bk[k - 1] += fi * Math.sin(k * xi);
		}
	}
	a0 /= M;
	return (x) => {
		let s = a0;
		for (let k = 1; k <= n; k++) s += 2 / M * (ak[k - 1] * Math.cos(k * x) + bk[k - 1] * Math.sin(k * x));
		return s;
	};
};
var MATH_KEYS = [
	"x",
	"PI",
	"E",
	"pi",
	"sin",
	"cos",
	"tan",
	"asin",
	"acos",
	"atan",
	"atan2",
	"abs",
	"sqrt",
	"cbrt",
	"pow",
	"exp",
	"log",
	"log2",
	"log10",
	"sign",
	"floor",
	"ceil",
	"round",
	"trunc",
	"min",
	"max"
];
var mathVals = (x) => [
	x,
	PI,
	Math.E,
	PI,
	Math.sin,
	Math.cos,
	Math.tan,
	Math.asin,
	Math.acos,
	Math.atan,
	Math.atan2,
	Math.abs,
	Math.sqrt,
	Math.cbrt,
	Math.pow,
	Math.exp,
	Math.log,
	Math.log2,
	Math.log10,
	Math.sign,
	Math.floor,
	Math.ceil,
	Math.round,
	Math.trunc,
	Math.min,
	Math.max
];
var makeCustomFn = (expr) => {
	try {
		const fn = new Function(...MATH_KEYS, `"use strict"; return ( ${expr} )`);
		const r0 = fn(...mathVals(0));
		const r1 = fn(...mathVals(1));
		if (typeof r0 !== "number" || typeof r1 !== "number") return null;
		return (x) => {
			const v = fn(...mathVals(x));
			return isFinite(v) ? v : 0;
		};
	} catch {
		return null;
	}
};
var computePoints = (wave, n, resolution) => sync(() => {
	const xs = makeBy(resolution, (i) => i / resolution * 4 * PI);
	if (typeof wave === "object") {
		const f = makeCustomFn(wave.expr);
		if (!f) return {
			target: xs.map(() => 0),
			approx: xs.map(() => 0)
		};
		return {
			target: xs.map(f),
			approx: xs.map(makeNumericalFourier(f, n))
		};
	}
	if (wave === "square" || wave === "sawtooth" || wave === "triangle") return {
		target: xs.map(presetTarget(wave)),
		approx: xs.map(analyticFourier(wave, n))
	};
	const f = presetTarget(wave);
	return {
		target: xs.map(f),
		approx: xs.map(makeNumericalFourier(f, n))
	};
});
//#endregion
//#region src/lib/fourier/plot.ts
var defaultPad = {
	l: 44,
	r: 16,
	t: 24,
	b: 32
};
var makeCoordMap = (W, H, pad, yMin, yMax) => {
	const margin = (yMax - yMin || 1) * .12;
	const lo = Math.min(yMin - margin, 0);
	const hi = Math.max(yMax + margin, 0);
	const pW = W - pad.l - pad.r;
	const pH = H - pad.t - pad.b;
	const rng = hi - lo || 1;
	return {
		x: (f) => pad.l + f * pW,
		y: (v) => pad.t + pH * (1 - (v - lo) / rng),
		yLo: lo,
		yHi: hi
	};
};
var drawBackground = (ctx, W, H) => {
	const bg = ctx.createRadialGradient(W * .5, H * .4, 0, W * .5, H * .5, W * .75);
	bg.addColorStop(0, "#1a0e35");
	bg.addColorStop(.6, "#0e0920");
	bg.addColorStop(1, "#06050f");
	ctx.fillStyle = bg;
	ctx.fillRect(0, 0, W, H);
	ctx.fillStyle = "rgba(0,0,0,0.06)";
	for (let y = 0; y < H; y += 4) ctx.fillRect(0, y, W, 1);
};
var drawGrid = (ctx, cm, pad, W) => {
	const range = cm.yHi - cm.yLo;
	const step = range <= 1 ? .25 : range <= 2.5 ? .5 : range <= 5 ? 1 : 2;
	const first = Math.ceil(cm.yLo / step) * step;
	const last = Math.floor(cm.yHi / step) * step;
	for (let v = first; v <= last + 1e-9; v = Math.round((v + step) * 1e6) / 1e6) {
		const py = cm.y(v);
		const isZero = Math.abs(v) < 1e-9;
		if (isZero) {
			ctx.strokeStyle = "rgba(139,92,246,0.35)";
			ctx.lineWidth = 1;
			ctx.shadowColor = "#8b5cf6";
			ctx.shadowBlur = 6;
		} else {
			ctx.strokeStyle = "rgba(255,255,255,0.05)";
			ctx.lineWidth = .5;
			ctx.shadowBlur = 0;
		}
		ctx.beginPath();
		ctx.moveTo(pad.l, py);
		ctx.lineTo(W - pad.r, py);
		ctx.stroke();
		ctx.shadowBlur = 0;
		ctx.fillStyle = isZero ? "rgba(200,180,255,0.55)" : "rgba(255,255,255,0.22)";
		ctx.font = "10px monospace";
		ctx.textAlign = "right";
		ctx.textBaseline = "middle";
		const lbl = Number.isInteger(v) ? String(v) : v.toFixed(2);
		ctx.fillText(lbl, pad.l - 6, py);
	}
};
/** Draw approx curve with a horizontal rainbow gradient + glow. */
var drawApprox = (ctx, points, cm, x0px, x1px) => {
	if (points.length < 2) return;
	const grad = ctx.createLinearGradient(x0px, 0, x1px, 0);
	grad.addColorStop(0, "#06b6d4");
	grad.addColorStop(.33, "#8b5cf6");
	grad.addColorStop(.66, "#ec4899");
	grad.addColorStop(1, "#f59e0b");
	const buildPath = () => {
		ctx.beginPath();
		points.forEach((v, i) => {
			const px = cm.x(i / (points.length - 1));
			const py = cm.y(v);
			i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
		});
	};
	ctx.save();
	ctx.strokeStyle = grad;
	ctx.lineWidth = 8;
	ctx.lineJoin = "round";
	ctx.globalAlpha = .25;
	ctx.shadowColor = "#8b5cf6";
	ctx.shadowBlur = 28;
	buildPath();
	ctx.stroke();
	ctx.lineWidth = 4;
	ctx.globalAlpha = .45;
	ctx.shadowBlur = 14;
	buildPath();
	ctx.stroke();
	ctx.lineWidth = 2;
	ctx.globalAlpha = 1;
	ctx.shadowColor = "#c4b5fd";
	ctx.shadowBlur = 6;
	buildPath();
	ctx.stroke();
	ctx.restore();
};
/** Draw target curve: soft white dashed ghost. */
var drawTarget = (ctx, points, cm) => {
	if (points.length < 2) return;
	ctx.save();
	ctx.strokeStyle = "rgba(255,255,255,0.30)";
	ctx.lineWidth = 1.2;
	ctx.lineJoin = "round";
	ctx.setLineDash([5, 4]);
	ctx.shadowColor = "rgba(255,255,255,0.15)";
	ctx.shadowBlur = 4;
	ctx.beginPath();
	points.forEach((v, i) => {
		const px = cm.x(i / (points.length - 1));
		const py = cm.y(v);
		i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
	});
	ctx.stroke();
	ctx.setLineDash([]);
	ctx.restore();
};
var drawPeriodMarkers = (ctx, cm) => {
	[
		1,
		2,
		3,
		4
	].forEach((p) => {
		const px = cm.x(p / 4);
		ctx.save();
		ctx.strokeStyle = "rgba(139,92,246,0.4)";
		ctx.lineWidth = .5;
		ctx.shadowColor = "#8b5cf6";
		ctx.shadowBlur = 4;
		ctx.setLineDash([2, 4]);
		ctx.beginPath();
		ctx.moveTo(px, cm.y(cm.yHi));
		ctx.lineTo(px, cm.y(cm.yLo));
		ctx.stroke();
		ctx.setLineDash([]);
		ctx.restore();
		ctx.fillStyle = "rgba(196,181,253,0.5)";
		ctx.font = "10px monospace";
		ctx.textAlign = "center";
		ctx.textBaseline = "top";
		ctx.fillText(`${p}π`, px, cm.y(cm.yLo) + 4);
	});
};
var setupCanvas = (canvas) => try_({
	try: () => {
		const dpr = window.devicePixelRatio || 1;
		const W = canvas.clientWidth || 640;
		const H = 260;
		canvas.width = W * dpr;
		canvas.height = H * dpr;
		canvas.style.height = `${H}px`;
		const ctx = canvas.getContext("2d");
		ctx.scale(dpr, dpr);
		return {
			ctx,
			W,
			H
		};
	},
	catch: (e) => new Error(String(e))
});
var drawSeries = (canvas) => (target) => (approx) => pipe(setupCanvas(canvas), map(({ ctx, W, H }) => {
	const all = [...target, ...approx];
	const cm = makeCoordMap(W, H, defaultPad, Math.min(...all), Math.max(...all));
	drawBackground(ctx, W, H);
	drawGrid(ctx, cm, defaultPad, W);
	drawTarget(ctx, target, cm);
	drawApprox(ctx, approx, cm, cm.x(0), cm.x(1));
	drawPeriodMarkers(ctx, cm);
}));
//#endregion
//#region src/lib/fourier/FourierControls.svelte
var root_1$1 = /* @__PURE__ */ from_html(`<button> </button>`);
var root_3 = /* @__PURE__ */ from_html(`<p class="text-red-300 text-xs font-mono"> </p>`);
var root_4 = /* @__PURE__ */ from_html(`<button class="px-2 py-1 rounded-md bg-white/10 hover:bg-white/20
                   text-xs font-mono text-white/70 hover:text-white transition-colors"> </button>`);
var root_2 = /* @__PURE__ */ from_html(`<div class="bg-black/20 rounded-xl p-4 space-y-3"><div class="flex gap-2 items-center"><span class="font-mono text-yellow-300 text-sm whitespace-nowrap">f(x) =</span> <input type="text" placeholder="sin(x) + sin(3*x)/3"/> <button class="px-4 py-2 rounded-lg bg-yellow-400 text-black text-sm font-bold
                 hover:bg-yellow-300 active:scale-95 transition-all whitespace-nowrap">Apply</button></div> <!> <p class="text-white/40 text-xs font-mono">vars: x, PI, E &nbsp;|&nbsp;
        fns: sin cos tan asin acos atan abs sqrt pow exp log floor ceil round sign</p> <div class="flex flex-wrap gap-2"></div></div>`);
var root$1 = /* @__PURE__ */ from_html(`<div class="space-y-5 p-4"><div class="flex flex-col items-center gap-2"><div class="flex flex-wrap justify-center gap-2"><!> <button>f(x) = …</button></div></div> <!> <div class="flex flex-col items-center gap-2"><span class="text-sm opacity-70">Harmonics</span> <div class="flex items-center gap-3"><button aria-label="decrease" class="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95
               text-white text-2xl font-bold transition-all select-none">−</button> <span class="w-16 text-center text-3xl font-mono font-bold tabular-nums"> </span> <button aria-label="increase" class="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95
               text-white text-2xl font-bold transition-all select-none">+</button></div> <input type="range" min="1" max="100" class="w-full max-w-xs h-2 accent-yellow-400 cursor-pointer"/> <div class="flex justify-between w-full max-w-xs text-xs opacity-40 px-1"><span>1</span><span>50</span><span>100</span></div></div></div>`);
function FourierControls($$anchor, $$props) {
	push($$props, true);
	let wave = prop($$props, "wave", 15), n = prop($$props, "n", 15);
	const presets = [
		{
			id: "square",
			label: "square",
			hint: "±1, 50% duty"
		},
		{
			id: "sawtooth",
			label: "sawtooth",
			hint: "linear ramp"
		},
		{
			id: "triangle",
			label: "triangle",
			hint: "symmetric ramp"
		},
		{
			id: "pulse",
			label: "pulse",
			hint: "±1, 25% duty"
		},
		{
			id: "halfsin",
			label: "½ sin",
			hint: "max(sin x, 0)"
		},
		{
			id: "fullsin",
			label: "|sin|",
			hint: "abs(sin x)"
		}
	];
	const activePreset = /* @__PURE__ */ user_derived(() => typeof wave() === "string" ? wave() : null);
	const selectPreset = (id) => {
		wave(id);
	};
	const examples = [
		"sin(x) + sin(3*x)/3 + sin(5*x)/5",
		"sin(x) * sin(3*x)",
		"abs(sin(x)) - 0.5",
		"floor(sin(x) * 4) / 4",
		"sin(x) > 0 ? sqrt(sin(x)) : 0",
		"atan(10 * sin(x)) / (PI/2)"
	];
	let showCustom = /* @__PURE__ */ state(typeof wave() === "object");
	let expr = /* @__PURE__ */ state(proxy(typeof wave() === "object" ? wave().expr : examples[0]));
	let exprError = /* @__PURE__ */ state(null);
	const openCustom = () => {
		set$4(showCustom, true);
	};
	const applyExpr = () => {
		if (!makeCustomFn(get$8(expr).trim())) {
			set$4(exprError, "Cannot evaluate — check syntax");
			return;
		}
		set$4(exprError, null);
		wave({
			_tag: "custom",
			expr: get$8(expr).trim()
		});
	};
	const pickExample = (e) => {
		set$4(expr, e, true);
		set$4(exprError, null);
		wave({
			_tag: "custom",
			expr: e
		});
	};
	const clamp = (v) => Math.max(1, Math.min(100, v));
	const dec = () => {
		n(clamp(n() - 1));
	};
	const inc = () => {
		n(clamp(n() + 1));
	};
	const slide = (e) => {
		n(clamp(Number(e.target.value)));
	};
	var $$exports = {
		get wave() {
			return wave();
		},
		set wave($$value) {
			wave($$value);
			flushSync();
		},
		get n() {
			return n();
		},
		set n($$value) {
			n($$value);
			flushSync();
		}
	};
	var div = root$1();
	var div_1 = child(div);
	var div_2 = child(div_1);
	var node = child(div_2);
	each(node, 17, () => presets, index, ($$anchor, p) => {
		var button = root_1$1();
		var text = child(button, true);
		reset(button);
		template_effect(() => {
			set_attribute(button, "title", get$8(p).hint);
			set_class(button, 1, `px-4 py-2 rounded-lg text-sm font-medium transition-all active:scale-95
                 ${get$8(activePreset) === get$8(p).id ? "bg-white text-blue-700 shadow font-bold" : "bg-white/15 text-white hover:bg-white/25"}`);
			set_text(text, get$8(p).label);
		});
		delegated("click", button, () => {
			selectPreset(get$8(p).id);
			set$4(showCustom, false);
		});
		append$2($$anchor, button);
	});
	var button_1 = sibling(node, 2);
	reset(div_2);
	reset(div_1);
	var node_1 = sibling(div_1, 2);
	var consequent_1 = ($$anchor) => {
		var div_3 = root_2();
		var div_4 = child(div_3);
		var input = sibling(child(div_4), 2);
		remove_input_defaults(input);
		var button_2 = sibling(input, 2);
		reset(div_4);
		var node_2 = sibling(div_4, 2);
		var consequent = ($$anchor) => {
			var p_1 = root_3();
			var text_1 = child(p_1, true);
			reset(p_1);
			template_effect(() => set_text(text_1, get$8(exprError)));
			append$2($$anchor, p_1);
		};
		if_block(node_2, ($$render) => {
			if (get$8(exprError)) $$render(consequent);
		});
		var div_5 = sibling(node_2, 4);
		each(div_5, 21, () => examples, index, ($$anchor, ex) => {
			var button_3 = root_4();
			var text_2 = child(button_3, true);
			reset(button_3);
			template_effect(() => set_text(text_2, get$8(ex)));
			delegated("click", button_3, () => pickExample(get$8(ex)));
			append$2($$anchor, button_3);
		});
		reset(div_5);
		reset(div_3);
		template_effect(() => set_class(input, 1, `flex-1 bg-black/30 border border-white/20 rounded-lg px-3 py-2
                 font-mono text-sm text-white placeholder-white/30
                 focus:outline-none focus:border-yellow-400
                 ${get$8(exprError) ? "border-red-400" : ""}`));
		delegated("keydown", input, (e) => e.key === "Enter" && applyExpr());
		bind_value(input, () => get$8(expr), ($$value) => set$4(expr, $$value));
		delegated("click", button_2, applyExpr);
		append$2($$anchor, div_3);
	};
	if_block(node_1, ($$render) => {
		if (get$8(showCustom) || typeof wave() === "object") $$render(consequent_1);
	});
	var div_6 = sibling(node_1, 2);
	var div_7 = sibling(child(div_6), 2);
	var button_4 = child(div_7);
	var span = sibling(button_4, 2);
	var text_3 = child(span, true);
	reset(span);
	var button_5 = sibling(span, 2);
	reset(div_7);
	var input_1 = sibling(div_7, 2);
	remove_input_defaults(input_1);
	next(2);
	reset(div_6);
	reset(div);
	template_effect(() => {
		set_class(button_1, 1, `px-4 py-2 rounded-lg text-sm font-medium transition-all active:scale-95
               ${get$8(showCustom) || typeof wave() === "object" ? "bg-yellow-400 text-black font-bold shadow" : "bg-white/15 text-white hover:bg-white/25"}`);
		set_text(text_3, n());
		set_value(input_1, n());
	});
	delegated("click", button_1, openCustom);
	delegated("click", button_4, dec);
	delegated("click", button_5, inc);
	delegated("input", input_1, slide);
	append$2($$anchor, div);
	return pop($$exports);
}
delegate([
	"click",
	"keydown",
	"input"
]);
create_custom_element(FourierControls, {
	wave: {},
	n: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/lib/fourier/FourierSeries.svelte
var root_1 = /* @__PURE__ */ from_html(`<div class="absolute inset-0 flex items-center justify-center fourier-gimmick rounded-xl svelte-goobxl"><div class="fourier-gimmick-pill px-6 py-3 rounded-full text-base font-bold text-white text-center svelte-goobxl"> </div></div>`);
var root = /* @__PURE__ */ from_html(`<div class="relative rounded-2xl p-0.5 fourier-shell svelte-goobxl"><div class="fourier-border-ring rounded-2xl absolute inset-0 pointer-events-none svelte-goobxl"></div> <div class="relative rounded-2xl overflow-hidden fourier-card svelte-goobxl"><div class="flex items-center justify-between px-5 pt-4 pb-2"><div class="flex flex-col"><span class="text-xs tracking-widest uppercase fourier-label-muted svelte-goobxl">Visualizer</span> <h2 class="text-lg font-bold tracking-tight fourier-title svelte-goobxl">Fourier Series</h2></div> <div class="text-xs font-mono fourier-badge px-2 py-1 rounded-full svelte-goobxl"> </div></div> <div class="fourier-controls-wrap svelte-goobxl"><!></div> <div class="relative mx-3 mb-3 rounded-xl overflow-hidden fourier-canvas-wrap svelte-goobxl"><canvas class="w-full block"></canvas> <canvas class="absolute inset-0 w-full h-full pointer-events-none block"></canvas> <!></div></div></div>`);
var $$css = {
	hash: "svelte-goobxl",
	code: ".fourier-shell.svelte-goobxl {font-family:system-ui, sans-serif;}\n\n  /* rotating conic gradient border */.fourier-border-ring.svelte-goobxl {background:conic-gradient(\n      from 0deg,\n      #06b6d4 0%,\n      #8b5cf6 25%,\n      #ec4899 50%,\n      #f59e0b 75%,\n      #06b6d4 100%\n    );\n    animation: svelte-goobxl-ring-spin 6s linear infinite;opacity:0.7;}\n\n  @keyframes svelte-goobxl-ring-spin {\n    to { filter: hue-rotate(360deg); }\n  }.fourier-card.svelte-goobxl {background:linear-gradient(155deg, #1a0e35 0%, #0e0920 55%, #06050f 100%);color:#e2d9f3;margin:2px;  /* keeps the card inside the 2px ring */}.fourier-title.svelte-goobxl {background:linear-gradient(90deg, #06b6d4, #c4b5fd, #f9a8d4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}.fourier-label-muted.svelte-goobxl {color:rgba(196, 181, 253, 0.45);font-size:0.65rem;letter-spacing:0.15em;}.fourier-badge.svelte-goobxl {background:rgba(139, 92, 246, 0.18);border:1px solid rgba(139, 92, 246, 0.35);color:#c4b5fd;font-size:0.75rem;}.fourier-controls-wrap.svelte-goobxl {border-top:1px solid rgba(139, 92, 246, 0.15);border-bottom:1px solid rgba(139, 92, 246, 0.15);}.fourier-canvas-wrap.svelte-goobxl {box-shadow:0 0 0 1px rgba(139, 92, 246, 0.20),\n      0 0 40px rgba(139, 92, 246, 0.15) inset;}.fourier-gimmick.svelte-goobxl {background:rgba(6, 5, 15, 0.72);backdrop-filter:blur(8px);}.fourier-gimmick-pill.svelte-goobxl {background:linear-gradient(135deg, rgba(139,92,246,0.35), rgba(236,72,153,0.35));border:1px solid rgba(196, 181, 253, 0.4);box-shadow:0 0 32px rgba(139, 92, 246, 0.5);\n    animation: svelte-goobxl-gimmick-in 0.25s ease-out;}\n\n  @keyframes svelte-goobxl-gimmick-in {\n    from { transform: scale(0.85); opacity: 0; }\n    to   { transform: scale(1);    opacity: 1; }\n  }"
};
function FourierSeries($$anchor, $$props) {
	push($$props, true);
	append_styles($$anchor, $$css);
	const bindHost = (node) => {};
	let wave = /* @__PURE__ */ state("square");
	let n = /* @__PURE__ */ state(3);
	let canvas;
	let overlay;
	let animFrame = null;
	const gimmicks = [
		"Gibbs sagt: Das wird nie ein Rechteck 😤",
		"n → ∞ empfohlen ( Ihr Arzt )",
		"Sponsored by π",
		"Warnung: Übermäßiger Sinuskonsum",
		"Fun fact: Fourier hasste Quadratwellen",
		"Diese Kurve ist emotional nicht verfügbar"
	];
	let gimmickText = /* @__PURE__ */ state(null);
	const maybeGimmick = () => sync(() => {
		if (Math.random() < .02) {
			set$4(gimmickText, gimmicks[Math.floor(Math.random() * gimmicks.length)], true);
			setTimeout(() => {
				set$4(gimmickText, null);
			}, 2800);
		}
	});
	const PAD_L = 44;
	const PAD_R = 16;
	const PAD_T = 24;
	const PAD_B = 32;
	const PLOT_H = 260;
	const approxToScreen = (approx, target, W) => {
		const all = [...target, ...approx];
		const yMin = Math.min(...all);
		const yMax = Math.max(...all);
		const margin = (yMax - yMin || 1) * .12;
		const lo = Math.min(yMin - margin, 0);
		const rng = Math.max(yMax + margin, 0) - lo || 1;
		const pW = W - PAD_L - PAD_R;
		const pH = PLOT_H - PAD_T - PAD_B;
		return Array.from(approx, (v, i) => ({
			x: PAD_L + i / (approx.length - 1) * pW,
			y: PAD_T + pH * (1 - (v - lo) / rng)
		}));
	};
	const drawCartoon = (ctx, cur, prev, trail, bob = 0) => {
		trail.forEach((p, idx) => {
			const t = idx / trail.length;
			const alpha = t * .75;
			const r = t * 5;
			const hue = 200 + idx * 1.8;
			ctx.save();
			ctx.globalAlpha = alpha;
			ctx.fillStyle = `hsl(${hue}, 100%, 70%)`;
			ctx.shadowColor = `hsl(${hue}, 100%, 70%)`;
			ctx.shadowBlur = 8;
			ctx.beginPath();
			ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
			ctx.fill();
			ctx.restore();
		});
		const angle = Math.atan2(cur.y - prev.y, cur.x - prev.x);
		ctx.save();
		ctx.translate(cur.x, cur.y + bob);
		ctx.rotate(angle);
		ctx.shadowColor = "#f97316";
		ctx.shadowBlur = 10;
		ctx.strokeStyle = "#f97316";
		ctx.lineWidth = 3.5;
		ctx.lineCap = "round";
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineTo(-20, 0);
		ctx.stroke();
		ctx.fillStyle = "#f43f5e";
		ctx.shadowColor = "#f43f5e";
		ctx.shadowBlur = 8;
		ctx.beginPath();
		ctx.arc(-20, 0, 4.5, 0, Math.PI * 2);
		ctx.fill();
		ctx.fillStyle = "#fff";
		ctx.shadowColor = "#06b6d4";
		ctx.shadowBlur = 12;
		ctx.beginPath();
		ctx.arc(0, 0, 3.5, 0, Math.PI * 2);
		ctx.fill();
		ctx.shadowColor = "#facc15";
		ctx.shadowBlur = 14;
		ctx.fillStyle = "#facc15";
		ctx.beginPath();
		ctx.ellipse(-36, 0, 16, 19, 0, 0, Math.PI * 2);
		ctx.fill();
		ctx.shadowBlur = 0;
		ctx.strokeStyle = "#92400e";
		ctx.lineWidth = 1.5;
		ctx.stroke();
		[[-30, -8], [-42, -8]].forEach(([ex, ey]) => {
			ctx.fillStyle = "#1c1917";
			ctx.beginPath();
			ctx.arc(ex, ey, 3.2, 0, Math.PI * 2);
			ctx.fill();
			ctx.fillStyle = "#fff";
			ctx.beginPath();
			ctx.arc(ex + 1.2, ey - 1.2, 1.2, 0, Math.PI * 2);
			ctx.fill();
		});
		ctx.strokeStyle = "#1c1917";
		ctx.lineWidth = 1.5;
		ctx.beginPath();
		ctx.arc(-36, -1, 6.5, .25, Math.PI - .25);
		ctx.stroke();
		ctx.restore();
	};
	const TRAIL_LEN = 60;
	const cancelAnim = () => sync(() => {
		if (animFrame !== null) {
			cancelAnimationFrame(animFrame);
			animFrame = null;
		}
	});
	const startCartoon = (approx, target) => sync(() => {
		const dpr = window.devicePixelRatio || 1;
		overlay.width = canvas.width;
		overlay.height = canvas.height;
		overlay.style.height = `${PLOT_H}px`;
		const ctx = overlay.getContext("2d");
		if (!ctx) {
			console.error("overlay ctx null");
			return;
		}
		ctx.scale(dpr, dpr);
		const W = canvas.clientWidth || 640;
		const pts = approxToScreen(approx, target, W);
		const total = pts.length;
		let i = 2;
		let tick = 0;
		const trail = [];
		const step = () => {
			ctx.clearRect(0, 0, W, PLOT_H);
			const done = i >= total;
			const cur = pts[Math.min(i - 1, total - 1)];
			const prev = pts[Math.max(i - 2, 0)];
			const bob = done ? Math.sin(tick * .07) * 3.5 : 0;
			trail.forEach((p) => {
				p.age++;
			});
			if (!done) {
				trail.push({
					x: cur.x,
					y: cur.y,
					age: 0
				});
				if (trail.length > TRAIL_LEN) trail.shift();
			}
			drawCartoon(ctx, cur, prev, trail, bob);
			tick++;
			if (!done) i = Math.min(i + 2, total);
			animFrame = requestAnimationFrame(step);
		};
		animFrame = requestAnimationFrame(step);
	});
	const redraw = () => pipe(cancelAnim(), flatMap(() => computePoints(get$8(wave), get$8(n), 600)), flatMap(({ target, approx }) => pipe(drawSeries(canvas)(target)(approx), flatMap(() => startCartoon(approx, target)))), flatMap(() => maybeGimmick()), catchAll((e) => sync(() => console.error(e))), runSync);
	user_effect(() => {
		get$8(wave);
		get$8(n);
		redraw();
	});
	onMount(async () => {
		await Promise.resolve();
		const shadow = canvas.getRootNode();
		if (!shadow?.adoptedStyleSheets) {
			console.error("Shadow root not ready");
			return;
		}
		const sheet = new CSSStyleSheet();
		sheet.replaceSync(widget_default);
		shadow.adoptedStyleSheets = [...shadow.adoptedStyleSheets, sheet];
		redraw();
	});
	onDestroy(() => {
		if (animFrame !== null) cancelAnimationFrame(animFrame);
	});
	var div = root();
	var div_1 = sibling(child(div), 2);
	var div_2 = child(div_1);
	var div_3 = sibling(child(div_2), 2);
	var text = child(div_3);
	reset(div_3);
	reset(div_2);
	var div_4 = sibling(div_2, 2);
	FourierControls(child(div_4), {
		get wave() {
			return get$8(wave);
		},
		set wave($$value) {
			set$4(wave, $$value, true);
		},
		get n() {
			return get$8(n);
		},
		set n($$value) {
			set$4(n, $$value, true);
		}
	});
	reset(div_4);
	var div_5 = sibling(div_4, 2);
	var canvas_1 = child(div_5);
	bind_this(canvas_1, ($$value) => canvas = $$value, () => canvas);
	var canvas_2 = sibling(canvas_1, 2);
	bind_this(canvas_2, ($$value) => overlay = $$value, () => overlay);
	var node_2 = sibling(canvas_2, 2);
	var consequent = ($$anchor) => {
		var div_6 = root_1();
		var div_7 = child(div_6);
		var text_1 = child(div_7, true);
		reset(div_7);
		reset(div_6);
		template_effect(() => set_text(text_1, get$8(gimmickText)));
		append$2($$anchor, div_6);
	};
	if_block(node_2, ($$render) => {
		if (get$8(gimmickText)) $$render(consequent);
	});
	reset(div_5);
	reset(div_1);
	reset(div);
	action(div, ($$node) => bindHost?.($$node));
	template_effect(() => set_text(text, `n = ${get$8(n) ?? ""}`));
	append$2($$anchor, div);
	pop();
}
customElements.define("fourier-series", create_custom_element(FourierSeries, {}, [], [], { mode: "open" }));
//#endregion
export { FourierSeries as default };
