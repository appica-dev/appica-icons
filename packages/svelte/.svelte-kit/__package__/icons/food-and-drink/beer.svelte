<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M18 8c0 1.397-.289 2.4-.845 3.65l-.31.7A9.9 9.9 0 0 0 16 16.375V20a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-3.625a9.9 9.9 0 0 0-.845-4.025l-.31-.7C6.29 10.4 6 9.397 6 8m12 0V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v4m12 0H6\"/>";
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
