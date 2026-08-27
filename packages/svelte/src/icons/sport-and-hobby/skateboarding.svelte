<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5.5 15H9l.75-1.5M14 19v-5l-2.5-3L14 7M8 8l3-1h4l1 3h3M3 18c0 .552.895 1 2 1h14c1.105 0 2-.448 2-1M16 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/>";
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
