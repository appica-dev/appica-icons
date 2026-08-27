<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 14.529h-.222C3.243 14.529 2 13.395 2 11.999S3.243 9.47 4.778 9.47H5m14 5.058h.222C20.756 14.529 22 13.395 22 12S20.756 9.47 19.222 9.47H19M9 9.976h6m-6 4.047h6m-2.45 4.899 5-1.446a2 2 0 0 0 1.047-.727A2.04 2.04 0 0 0 19 15.531V8.47c0-.44-.142-.867-.403-1.218a2 2 0 0 0-1.047-.727l-5-1.446a2 2 0 0 0-1.1 0l-5 1.446a2 2 0 0 0-1.047.726C5.142 7.601 5 8.03 5 8.468v7.063c0 .44.141.867.403 1.218a2 2 0 0 0 1.047.727l5 1.446c.36.104.74.104 1.1 0\"/>";
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
