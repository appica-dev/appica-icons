<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 22c-.31 0-.617-.073-.894-.212l-8.092-4.054a1.004 1.004 0 0 1-.386-1.452l8.54-13.836a1 1 0 0 1 1.664 0l8.54 13.836a1.004 1.004 0 0 1-.385 1.452l-8.092 4.054c-.278.14-.584.212-.895.212m0 0V2\"/>";
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
