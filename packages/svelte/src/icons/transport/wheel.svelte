<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 12a9 9 0 0 0 18 0M3 12a9 9 0 1 1 18 0M3 12h6m12 0h-6m-6 0a3 3 0 0 0 6 0m-6 0a3 3 0 0 1 6 0m-1.4-2.6L17 4.6m-6.6 10L7 19.4M7 4.6l3.4 4.8m3.2 5.2 3.4 4.8\"/>";
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
