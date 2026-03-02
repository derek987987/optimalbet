# Quickstart: Advanced Simulation Engine and Enhanced UI

## Developer Setup
1. **Install Rust**: Ensure `rustc` and `cargo` are installed (`rustup.rs`).
2. **Install wasm-pack**: `curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh`.
3. **Install Vite WASM Plugins**: 
   ```bash
   npm install -D vite-plugin-wasm vite-plugin-top-level-await
   ```

## Development Workflow
1. **Modify Rust Core**: Edit files in `src/engine/wasm/src/`.
2. **Rebuild WASM**:
   ```bash
   cd src/engine/wasm && wasm-pack build --target web
   ```
3. **Update UI**: Use the new card grid features in `src/components/common/CardGrid.tsx`.

## Testing the Engine
- **Rust Unit Tests**: `cd src/engine/wasm && cargo test`.
- **WASM Integration**: Run `npm run test:unit` to verify the Comlink bridge.
- **Performance Benchmark**: Use the browser console to verify 100k iterations under 100ms.
