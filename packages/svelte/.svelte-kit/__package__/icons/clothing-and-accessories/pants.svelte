<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path stroke-miterlimit=\"10\" d=\"M18.089 7.519c-1.441 0-2.61-1.129-2.61-2.521v-1.96m-6.958 0v1.96c0 1.392-1.169 2.52-2.61 2.52m6.089 0v-4.48M13.125 21 12 10.135 10.875 21H5L6.165 3h11.67L19 21z\"/>";
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
