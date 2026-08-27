<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M19.5 13.572 12 21l-2.897-2.868m-6.117-8.104A5 5 0 0 1 12 7.006a5 5 0 1 1 7.5 6.572M3 13h2l2 3 2-6 1 3h3\"/>";
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
