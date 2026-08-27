<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m8 16 1-1 1.5 1 1.5-1 1.5 1 1.5-1 1 1m-7.5-4.5L10 10 8.5 8.5m7 3L14 10l1.5-1.5M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18\"/>";
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
