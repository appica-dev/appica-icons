<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M21 11V8a2 2 0 0 0-2-2h-6m0 0 3 3m-3-3 3-3M3 13v3a2 2 0 0 0 2 2h6m0 0-3-3m3 3-3 3M3 6a3 3 0 1 0 6 0 3 3 0 0 0-6 0m12 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0\"/>";
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
