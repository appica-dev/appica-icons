<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M17 12.5a15.2 15.2 0 0 1-7.37 1.44A14.6 14.6 0 0 1 3 11m16.5 4c.907-1.411 1.451-3.323 1.5-5-1.197-.773-2.577-.935-4-1\"/>";
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
