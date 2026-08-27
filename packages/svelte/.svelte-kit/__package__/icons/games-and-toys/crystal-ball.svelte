<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6.73 17.018a8 8 0 1 1 10.54 0M11 7a3 3 0 0 0-3 3m-3 9a2 2 0 0 0 2 2h10a2 2 0 0 0 0-4H7a2 2 0 0 0-2 2\"/>";
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
