<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M2 5c7.109 4.094 10.956 10.115 12 13.978 1.074-4.663 4.49-8.926 8-10.983M7 8.994c-.278 5.485-2.337 7.318-4 9.984 4.013-1.997 6.02-4.992 15.05-4.992 4.012 0 3.51 2.496 1 2.995 2 .5 2.508 4.992-2.007 1.997M12 7.995a1.995 1.995 0 0 0 2 1.997 2 2 0 0 0 2-1.997 1.995 1.995 0 0 0-2-1.997 2 2 0 0 0-2 1.997\"/>";
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
