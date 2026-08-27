<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path stroke-miterlimit=\"22.926\" d=\"M7.685 11.937h8.63v-2.59C16.315 6.955 14.373 5 12 5S7.685 6.956 7.685 9.346zm0 0h8.629Q19.156 13.635 22 15.33c-7.51 0-12.244 7.81-20 0q2.845-1.694 5.685-3.393m.132-2.59h8.366m5.8 6.075C21.43 17.491 18.69 19 15.487 19c-1.226 0-2.426-.224-3.469-.646\"/>";
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
