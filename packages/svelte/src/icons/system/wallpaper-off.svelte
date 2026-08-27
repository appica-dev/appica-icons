<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10 6h8a2 2 0 0 1 2 2v8m-.58 3.409A2 2 0 0 1 18 20H6m0 0a2 2 0 0 1-2-2m2 2a2 2 0 0 0 2-2m-4 0a2 2 0 0 1 4 0m-4 0V6c0-.546.22-1.04.573-1.402M8 18V8M3 3l18 18\"/>";
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
