<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M13 21v-7L8 9l-5 5v7h5m5 0H8m5 0h8V4a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1v6M8 21v-4m5-10v.01M17 7v.01M17 11v.01M17 15v.01\"/>";
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
