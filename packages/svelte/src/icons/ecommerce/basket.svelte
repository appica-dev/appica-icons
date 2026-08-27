<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m17 10-2-6m-8 6 2-6m1 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0M5 8h14a2 2 0 0 1 1.976 2.304l-1.255 7.152A3 3 0 0 1 16.755 20H7.243a3 3 0 0 1-2.965-2.544l-1.255-7.152A2 2 0 0 1 5 8\"/>";
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
