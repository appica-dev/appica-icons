<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M18 10c.984 2.762 1.949 4.765 2 7.153.014.688-.664 1.346-1.184.303Q18.296 16.413 17 16c.03 1.831.147 3.102-1 4l1.5 1c.5.5.5 1-.5 1H7c-1 0-1-.5-.5-1L8 20c-1.1-.87-.914-2.24-1-4q-1.365.618-1.808 1.347c-.444.727-1.377 1.31-1.16-.917C4.258 14.12 5.217 12.338 6 10m9.898 3-.476-2M6 9.748a14.72 14.72 0 0 0 11.995-.052C18.27.46 6.89-1.56 6 9.748M12.75 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0m-3.5 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/>";
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
