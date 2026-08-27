<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20 12 8 18.75M20 12 8 5.25M20 12V7.473L12 3 8 5.25M20 12v4.5L12 21l-4-2.25m0 0L4 16.5V7.472L8 5.25\"/>";
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
