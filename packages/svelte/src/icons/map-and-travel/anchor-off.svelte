<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 12v9m-8-8a8 8 0 0 0 14.138 5.13m1.44-2.56A8 8 0 0 0 20 13m1 0h-2M5 13H3m9.866-4.127a3 3 0 1 0-3.737-3.747M3 3l18 18\"/>";
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
