<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 0 8-1m0 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0M9 17l5-1.5m-7.5-7 7.81 5.37M14 15a2 2 0 1 0 4 0 2 2 0 0 0-4 0M3 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0\"/>";
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
