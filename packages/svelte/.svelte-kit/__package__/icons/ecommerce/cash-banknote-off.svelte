<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9.88 9.878a3 3 0 1 0 4.242 4.243m.58-3.425a3 3 0 0 0-1.412-1.405M10 6h9a2 2 0 0 1 2 2v8c0 .294-.064.574-.178.825M18 18H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1m12 6h.01M6 12h.01M3 3l18 18\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
