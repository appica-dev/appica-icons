<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 4c.912-1.219 2.36-2 4-2a5 5 0 0 1 5 5v6m0 4a5 5 0 1 1-10 0V7m5 1a1 1 0 1 0-1-1m.291 4.295a1 1 0 0 0 1.418 1.41M3 3l18 18m-10-4a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/>";
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
