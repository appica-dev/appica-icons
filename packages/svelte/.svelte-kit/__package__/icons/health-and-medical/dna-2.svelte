<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M17 3v1m0 0q-.016 5.028-5.008 8.014c-3.328 1.99 3.336-2 .008-.014-3.328 1.99-5 4.662-5.008 8.014v1M17 4H7m10 17.014v-1q-.016-5.028-5.008-8.014c-3.328-1.99 3.336 2 .008.014C8.672 10.023 7 7.352 6.992 4V3M7 20h10M8 8h8m-8 8h8\"/>";
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
