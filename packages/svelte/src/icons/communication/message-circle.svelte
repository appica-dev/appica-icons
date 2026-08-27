<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15.99 12.01v.01m-7.994-.01v.01m3.997-.01v.01M3 20l1.299-3.895c-2.322-3.432-1.425-7.861 2.098-10.36 3.524-2.498 8.584-2.293 11.836.48s3.692 7.256 1.028 10.486-7.609 4.21-11.565 2.29z\"/>";
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
