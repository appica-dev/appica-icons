<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 15v.01m6-.01a6 6 0 0 0-6-6m3 6a3 3 0 0 0-3-3m-5 0a8 8 0 1 0 16 0 8 8 0 0 0-16 0\"/>";
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
