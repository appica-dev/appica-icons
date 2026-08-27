<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10 17a2 2 0 0 0 2 2h3.5a5.5 5.5 0 0 0 5.5-5.5V4M4 7h12a1 1 0 0 1 1 1v4.5a2.5 2.5 0 0 1-2.5 2.5H14a2 2 0 0 1-2-2 2 2 0 0 0-4 0 2 2 0 0 1-2 2h-.5A2.5 2.5 0 0 1 3 12.5V8a1 1 0 0 1 1-1\"/>";
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
