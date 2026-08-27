<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10 11H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1m4 4v3q0 4-4 5m13-7h-4m-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6q0 .99-.245 1.798m-1.653 2.29q-.857.6-2.102.912M3 3l18 18\"/>";
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
