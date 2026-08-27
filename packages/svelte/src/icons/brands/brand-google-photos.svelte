<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 12v-.591C12 8.974 9.985 7 7.5 7S3 8.974 3 11.409a.59.59 0 0 0 .177.418.6.6 0 0 0 .426.173zm0 0v.591C12 15.026 14.015 17 16.5 17s4.5-1.974 4.5-4.409a.597.597 0 0 0-.603-.591zm0 0h-.595C8.972 12 7 14.015 7 16.5S8.972 21 11.405 21a.59.59 0 0 0 .422-.177.6.6 0 0 0 .173-.431zm0 0h.595C15.028 12 17 9.985 17 7.5S15.028 3 12.595 3a.58.58 0 0 0-.42.175.6.6 0 0 0-.175.428z\"/>";
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
