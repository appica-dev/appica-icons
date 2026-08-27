<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 0v8a2 2 0 0 0 2 2h5m5-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 0V8a2 2 0 0 0-2-2h-5m0 0 3 3m-3-3 3-3m-1 15-3-3m3 3-3 3\"/>";
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
