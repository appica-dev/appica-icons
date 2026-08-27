<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M19 14.083c0 4.154-2.966 6.74-7 6.917-4.2 0-7-2.763-7-6.917C5 8.545 8.5 2.993 12 3s7 5.545 7 11.083\"/>";
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
