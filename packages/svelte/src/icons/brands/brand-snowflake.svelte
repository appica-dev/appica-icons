<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14 21v-5.5l4.5 2.5M10 21v-5.5L5.5 18m-2-3.5L8 12 3.5 9.5m17 0L16 12l4.5 2.5M10 3v5.5L5.5 6M14 3v5.5L18.5 6M12 11l1 1-1 1-1-1z\"/>";
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
