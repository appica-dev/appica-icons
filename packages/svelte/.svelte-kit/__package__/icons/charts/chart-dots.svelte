<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 3v18h18M10.16 10.62l2.34 2.88m2.588-.172 2.837-4.586M7 9a2 2 0 1 0 4 0 2 2 0 0 0-4 0m10-2a2 2 0 1 0 4 0 2 2 0 0 0-4 0m-5 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
