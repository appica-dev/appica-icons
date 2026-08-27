<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 7v.01M16 15v.01m-5.172-5.182a4 4 0 1 0-5.656 0L8 12.657zm8 8a4.001 4.001 0 1 0-5.656 0L16 20.657z\"/>";
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
