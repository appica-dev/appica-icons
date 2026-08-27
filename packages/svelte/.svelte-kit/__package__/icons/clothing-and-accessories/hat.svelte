<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path stroke-miterlimit=\"10\" d=\"M5.69 12.282c-2.544.63-4.19 1.633-4.19 2.762C1.5 16.953 6.201 18.5 12 18.5s10.5-1.547 10.5-3.456c0-1.129-1.645-2.131-4.19-2.762M5.819 11.06c4.124 1.567 8.24 1.567 12.365 0m-.402-3.867c-.123-1.179-1.294-1.949-2.438-1.615-.931.272-2.088.433-3.342.433s-2.412-.161-3.343-.433c-1.144-.334-2.315.436-2.437 1.615l-.707 6.778q6.486 2.583 12.973 0z\"/>";
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
